**Requirements**

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)

Clone the repository and install dependencies:

```
$ git clone https://github.com/stormdotcom/ts-node-api.git
$ cd ts-node-api
$ npm install
```

Copy and edit the `env` file:

```
$ cp .env.example .env
$ vim .env
```

Run development:

```
$ npm run dev
```

Run production:

```
$ npm start
```

Stop production:

```
$ npm run kill
```

## Docker

modify `.env.docker` to run with docker.

### run mongo with docker

```
make dev
```

### build the docker image

```
make build
```

### start/stop system

To start

```
make up
```

To stop

```
make down
```
