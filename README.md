# techradar
[![Build Status](https://travis-ci.org/bitrockteam/techradar.svg?branch=master)](https://travis-ci.org/bitrockteam/techradar)

An interactive radar, inspired by [thoughtworks.com/radar](http://thoughtworks.com/radar).

## Install & use locally
Latest [current or LTS Node.js](https://nodejs.org/en/) must be installed on your machine.

Clone the repo:
```bash
$ git clone git@github.com:bitrockteam/techradar.git
```

access the folder & install dependencies:
```bash
$ cd techradar && npm install
```

start the development server:
```bash
$ npm start
```
open the browser and access the application at `localhost:8080`.

### Setting up your data
In the `/data` folder there are four `.json` files, each one containing the data of its own quadrant. Data is provided as an array of objects following this schema:

```js
{
  "name": "Gitops",     // guess it...
  "ring": "assess",     // hold, assess, trial, adopt
  "quadrant": "devops", // devops, ui engineering, engineering, methodologies
  "isNew": "FALSE",     // TRUE / FALSE
  "description": ""     // guess it...
}
```

### Building the radar
Every time the `master` branch gets updated (*a direct commit or a merged PR*) a new Travis CI job is triggered and it composed basically of 2 steps:

1. create new build of static files
2. deploy the build folder into the related gh-pages branch

> The `master` branch it's admin locked!

## Docker Image
We have released BYOR as a docker image for our users. The image is available in our [DockerHub Repo](https://hub.docker.com/r/wwwthoughtworks/build-your-own-radar/). To pull and run the image, run the following commands.

```
$ docker pull wwwthoughtworks/build-your-own-radar
$ docker run --rm -p 8080:80 -e SERVER_NAMES="localhost 127.0.0.1" wwwthoughtworks/build-your-own-radar
$ open http://localhost:8080
```

## Contribute

All tasks are defined in `package.json`.

Pull requests are welcome; please write tests whenever possible. 
Make sure you have nodejs installed.

- `git clone git@github.com:thoughtworks/build-your-own-radar.git`
- `npm install`
- `npm test` - to run your tests
- `npm run dev` - to run application in localhost:8080. This will watch the .js and .css files and rebuild on file changes

### Don't want to install node? Run with one line docker

     $ docker run -p 8080:8080 -v $PWD:/app -w /app -it node:7.3.0 /bin/sh -c 'npm install && npm run dev'

After building it will start on localhost:8080
