# Events Api

## To do

- Remove `any`s
- Define raw data types
- Standardise error messages

## What can be improved

- Add OpenAPI spec validator to validate routes and data types, and provide a UI for the API
- Redis to cache data in memory
- Potentially could add a queue (RabbitMQ etc) to improve reliability of the application should one of the components go down (out of service)
- Develop an API client specifically for the API so that clients can communicate with it easier
- Secure the endpoint (rate limiting, api keys / cert)
- Validate data that comes from clients
- Use a different framework (Nest.js for API) rather than custom express structure
- Split domain logic into `/src/domain/..`
