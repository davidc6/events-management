# Events API

## Tech choices

- Since application tasks are not CPU heavy (i.e. no heavy mathematical calculations) Node.js runtime is ideal for this as it is lightweight and its' event-driven architecture is highly scalable
- Express.js is the framework of choice since it's not opinionated, does not have as many dependencies (as Nest.js, for example) and architectural decisions can be made by the developer. Additionally, it made sense to me to keep things simple for such a simple application.
- TypeScript to "tame" dynamic nature of JavaScript and provide contracts between various components of the API
- Mocha is used as test runner since it's intuitive, user friendly, fast and customisable
- Posgresql is used since there bound to be relationships between events, various types of events, users creating these events which can be broken down into separate database tables

## Potential improvements

- Add integration tests that store / retrieve data from a test database
- Remove `any`s (convert into proper contracts or swap for `unknown`s)
- Standardise response error messages
- Add a reverse proxy (e.e. Nginx) in front of the API to improve security and potentially act as a load balancer
- Scale Node.js application to run on multiple cores (i.e. cluster mode)
- Add OpenAPI spec validator to validate routes and data types, and provide a UI for the API
- Redis to cache data in memory for quicker access times
- Potentially could add a queue (RabbitMQ etc) to improve reliability of the application should one of the components go down (out of service)
- Develop an API client specifically for the API so that clients can communicate with it easier
- Secure the endpoints (e.g. rate limiting to prevent DDOS attacks, circuit breaker to prevent any cascading failures, add api keys / certs)
- Validate data that comes from clients
- Use a different framework (Nest.js for API) rather than custom express structure
- Split domain logic into `/src/domain/..`
- Logging and telemetry
