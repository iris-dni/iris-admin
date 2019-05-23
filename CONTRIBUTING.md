# Contributing


## Development Guide

The Admin UI is written in [React](https://facebook.github.io/react/) and uses
[Bootstrap 3](http://getbootstrap.com/) for styling.

`node` and `npm` are required in order to contribute to the project.


### Project Setup

To install all required packages execute:

```sh
$ npm install
```

### Bundling

This project uses [webpack](https://webpack.github.io/) to bundle the source
code files. The bundle is located in `public/bundle.js`.

To watch for changes and compile them during development time execute:

```sh
$ npm run develop
```

To bundle for production execute:

```sh
$ npm run build
```

This production build is optimized and results in a smaller file.


### Linting

[ESLint](http://eslint.org/) is used to ensure certain coding standards.

To invoke ESLint, execute:

```sh
$ npm run lint
```


### Testing

[Mocha](https://mochajs.org/) is used as test runner, [Chai](http://chaijs.com/)
as assertion library. All tests have to be placed inside a `spec` directory,
usually close to the file that's being tested.

To run the entire test suite, execute:

```sh
$ npm run test
```

In order to allow testing of only specific groups of tests (functions, React
components) there are multiple test scripts available. This helps to reduce
the runtime.

- **`npm run test`**: runs all tests (`spec/**/*.js`)
- **`npm run test:fn`**: runs only function tests (`spec/**/*.fn.js`)
- **`npm run test:react`**: runs only react tests (`spec/**/*.react.js`)


#### Writing React Component tests

To write tests for React components, AirBnb's [Enzyme](http://airbnb.io/enzyme/)
is used.


### Code Assistance

To install typings for the dependencies via [typings](https://github.com/typings/typings)
execute:

```sh
$ npm run typings -- install
```


## Deployment

### Tag the release

Before creating a new distribution, a new version and tag should be created:

- Update the ``CHANGES.rst`` file and create the top paragraph for your version
- Commit your changes with a message like "prepare release x.y.z"
- Push to origin
- Create a tag by running ``./gradlew createTag``

### Build the docker image::

```
./gradlew buildDockerImage
```

Push the docker image::

```
./gradlew pushDockerDevImage
```

