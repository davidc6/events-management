# A simple events management app

This is a simple events management application that demonstrates interactions between a SPA (single page application) and API backend. The project is currently work in progress.

You need to have [Docker / Docker Compose](https://docs.docker.com/compose/install/) installed on your machine in order to make all the components work together.

I've included a simple bash script that installs `node_modules` outside of containers and starts `docker-compose` (tested on Linux and Mac). To run it, you have to in the root directory of this project and run `./run.sh` script.

Alternatively, to bring up the environment manually run the following command:

```sh
// detached mode - daemon runs in the background
docker-compose up --detach

// or to see logs from each component
docker-compose up

// or if you need to rebuild (force build) containers because of errors
docker-compose up --build
```

To bring the environment down (this will destroy all new data in the database and remote the containers) run the following command:

```sh
docker-compose down
```

If this does not work (and you are getting errors that contain "module cannot be found" text) please `cd` into `/spa` and `/api` and install all `package.json` dependencies by running `npm i` command. This should resolve all dependencies that are required to run the whole stack.

You can then use links below to access both the SPA and API.

- For API - `http://localhost:5000`
- For SPA - `http://localhost:3000`

There is also a README (todos / potential improvements) for each component:

- [SPA](spa/README.md)
- [API](api/README.md)

# What can be improved

- Docker / docker composer
  - Add a command / script to install node_modules locally when running `docker-compose up`
  - Create a workspace, so that one can log in into it and start / stop services independently rather than
