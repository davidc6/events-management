# A simple events management app

To run it locally, you need to have Docker installed on your machine and then:

```sh
docker-compose up --detach
```

This will command will bring up the necessary environment.

To access the api - `http://localhost:3000`

## To do

- Add API integration tests
- POST request body validation
- Update `any` types to strict types

# What can be done different

- SPA
  - Make responsive
  - Validation for input fields
  - Better design
  - Break monolith App.js into small components and unit test each one separately

- API
  - Use Nest.js for API
  - Redis to cache data in memory
  - Potentially could add a queue (RabbitMQ etc) to improve reliability of the application should one of the components go down (out of service)
  - API client specifically for the local API
