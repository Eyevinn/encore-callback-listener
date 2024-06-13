import { createClient } from 'redis';
import { RedisConfig } from './config';

export class RedisQueueService {
  private client: Awaited<ReturnType<typeof createClient>> | undefined;
  constructor(private redisConfig: RedisConfig) {}

  async connect() {
    if (this.client) {
      return;
    }
    this.client = await createClient({ url: this.redisConfig.url })
      .on('error', (err) => console.log('Redis Client Error', err))
      .connect();
  }

  async disconnect() {
    await this.client?.disconnect();
    this.client = undefined;
  }

  async pushMessage(message: string) {
    await this.connect();
    console.log(`Pushing message on queue: ${message}`);
    this.client?.zAdd(this.redisConfig.queueName, {
      score: Date.now(),
      value: message
    });
  }
}
