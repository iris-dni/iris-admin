# Iris Admin UI

The Admin UI is written in [React](https://facebook.github.io/react/) and uses
[Bootstrap 3](http://getbootstrap.com/) for styling.


## Development

### Setup

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


### Code Quality

To run the tests of the project using [mocha](https://mochajs.org/) execute:

```sh
$ npm run test
```

To lint the JavaScript source using [eslint](http://eslint.org/) execute:

```sh
$ npm run lint
```


### Assistance

To install typings for the dependencies via [typings](https://github.com/typings/typings) execute:

```sh
$ npm run typings -- install
```
