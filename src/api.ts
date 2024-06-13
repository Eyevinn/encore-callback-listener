import fastify from 'fastify';
import cors from '@fastify/cors';
import swagger from '@fastify/swagger';
import swaggerUI from '@fastify/swagger-ui';
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';
import { Static, Type } from '@sinclair/typebox';
import { FastifyPluginCallback } from 'fastify';
import { encoreCallbackApi } from './encoreCallbackApi';
import { EncoreConfig, RedisConfig } from './config';
import { RedisQueueService } from './redisQueueService';

const Health = Type.Object({
  status: Type.String()
});

//eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HealthcheckOptions {}

const healthcheck: FastifyPluginCallback<HealthcheckOptions> = (
  fastify,
  opts,
  next
) => {
  fastify.get<{ Reply: Static<typeof Health> }>(
    '/healthcheck',
    {
      schema: {
        description: 'Healthcheck endpoint',
        response: {
          200: Health
        }
      }
    },
    async (_, reply) => {
      reply.send({ status: 'up' });
    }
  );
  next();
};

export interface ApiOptions {
  title: string;
  redis?: RedisConfig;
  encore: EncoreConfig;
}

export default (opts: ApiOptions) => {
  const api = fastify({
    ignoreTrailingSlash: true
  }).withTypeProvider<TypeBoxTypeProvider>();

  // register the cors plugin, configure it for better security
  api.register(cors);

  // register the swagger plugins, it will automagically do magic
  api.register(swagger, {
    swagger: {
      info: {
        title: opts.title,
        description: 'encore callback listener',
        version: 'v1'
      }
    }
  });
  api.register(swaggerUI, {
    routePrefix: '/docs'
  });

  api.register(healthcheck, {});
  // register other API routes here

  const redisQueueService = opts.redis
    ? new RedisQueueService(opts.redis)
    : undefined;

  api.register(encoreCallbackApi, {
    onCallback: (jobProgress) => {
      console.log(
        `Yes, I also received callback from Encore for job ${JSON.stringify(
          jobProgress
        )}`
      );
    },
    onSuccess: (jobProgress) => {
      console.debug('Job is successful, pushing to redis queue');
      redisQueueService?.pushMessage(
        JSON.stringify({
          jobId: jobProgress.jobId,
          url: `${opts.encore.url}/encoreJobs/${jobProgress.jobId}`
        })
      );
    }
  });

  return api;
};
