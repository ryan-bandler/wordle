# Würdle
A clone of the popular word game, Wordle.

## Running Würdle Locally

Getting started is as simple as installing [Docker](https://docs.docker.com/get-docker/) and running

```
docker-compose up -d
```

and then navigating to `http://localhost:3000` on the web browser of your choice.


## Local Development

### Würdle UI
You can run the UI development server locally by navigating to the `wordle`  directory and running

```
yarn
yarn start
```

You can then develop locally with hot reloading enabled.

### Würdle API

Developing for the API is the same as for the UI, simply navigate to the API folder and run
```
yarn
yarn start
```
However, hot relaoding is not enabled (yet!), so you will haveto manually reload the server to see your changes.
