# Pokedex

## Running Telemetry with Docker

To set up telemetry for your Next.js application, we've provided a Docker repository that simplifies the process. This repository is based on the OpenTelemetry Collector Demo and is ready for your use without any additional configuration. Follow the steps below to run the telemetry services.

### Starting Telemetry Services

Run the following command at the repository root:

```shell
docker-compose up -d
```

This command will launch the following telemetry backends:

- **Jaeger**: You can access Jaeger at [http://0.0.0.0:16686](http://0.0.0.0:16686).
- **Zipkin**: Find Zipkin at [http://0.0.0.0:9411](http://0.0.0.0:9411).
- **Prometheus**: Access Prometheus at [http://0.0.0.0:9090](http://0.0.0.0:9090).

Please note that it may take some time for the application metrics to appear on the Prometheus dashboard.

### Stopping Telemetry Services

If you want to terminate the telemetry services, you can use the following command:

```shell
docker-compose down
```

### Viewing Jaeger Traces

To view the Jaeger traces, visit the following URL in your web browser:

[http://0.0.0.0:16686](http://0.0.0.0:16686)

