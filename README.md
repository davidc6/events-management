# A simple events management app

This is a simple events management application that demonstrates interactions between a SPA (single page application) and API backend. The project is currently work in progress.

To run it locally, you need to have [Docker / Docker Compose](https://docs.docker.com/compose/install/) installed on your machine. Once you have installed it, run the command:

```sh
docker-compose up --detach
```

To bring the environment down (this will remove any data added to the database) run this command:

```sh
docker-compose down
```

This will command will bring up the environment. You can then use links below to access both the SPA and API.

- For API - `http://localhost:5000`
- For SPA - `http://localhost:3000`

There is also documentation for each:

- [SPA](spa/README.md)
- [API](api/README.md)

## To do

- Add / push up API tests (unit and integration tests)
- Add / push up SPA tests (unit and integration tests)

# What can be improved

- Docker / docker composer
  - Create a workspace, so that one can log in into it and start / stop services independently rather than
