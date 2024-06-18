# Encore callback listener

Http server listening for encore callbacks. When a callback indicating a successful job is received,
the listener can post jobId and Url on a redis queue.

## Usage
### Environment variables

Service is configured with the environment variables below.

| Variable | Description | Default value |
| --- | --- | --- |
| HOST | Host interface to listen on | 0.0.0.0 |
| PORT | Port to listen on | 8000 |
| REDIS_URL | URL to the redis server | redis://localhost:6379 |
| REDIS_QUEUE | Name of the redis queue to post to | packaging-queue |
| ENCORE_URL | URL to the encore instance | http://localhost:8000 |

### Running
```bash
npm run start
```

## Development
### Generating encore client
To update the encore client, fetch the latest encore api specification into `encore-api.yaml` and run the
command below.

```bash
npx @hey-api/openapi-ts -i encore-api.yaml -o src/client
```

<!--

## Requirements
Add any external project dependencies such as node.js version etc here

## Installation / Usage

Add clear instructions on how to use the project here

## Development

Add clear instructions on how to start development of the project here

-->

### License
This project is licensed under the MIT license, 
see [LICENSE](LICENSE).

### Contributing

See [CONTRIBUTING](CONTRIBUTING.md)

# Support

Join our [community on Slack](http://slack.streamingtech.se) where you can post any questions regarding any of our open source projects. Eyevinn's consulting business can also offer you:

- Further development of this component
- Customization and integration of this component into your platform
- Support and maintenance agreement

Contact [sales@eyevinn.se](mailto:sales@eyevinn.se) if you are interested.

# About Eyevinn Technology

[Eyevinn Technology](https://www.eyevinntechnology.se) is an independent consultant firm specialized in video and streaming. Independent in a way that we are not commercially tied to any platform or technology vendor. As our way to innovate and push the industry forward we develop proof-of-concepts and tools. The things we learn and the code we write we share with the industry in [blogs](https://dev.to/video) and by open sourcing the code we have written.

Want to know more about Eyevinn and how it is to work here. Contact us at work@eyevinn.se!
