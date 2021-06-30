# A simple events management app

To run it locally, you need to have Docker installed on your machine and then:

```sh
docker-compose up --detach
```

This will command will bring up the necessary environment. The you can use links below to a

- To see API - `http://localhost:5000`
- To see SPA - `http://localhost:3000`

## To do

- Add API integration tests
- POST request body validation
- Update `any` types to strict types

# What can be improved

- Docker / docker composer
  - Create a workspace, so that one can log in into it and start / stop services independently
