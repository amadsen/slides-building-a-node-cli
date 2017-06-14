# Building a NodeJS CLI

---

## The Basics

1. a CLI entry point
2. a `bin` reference in `package.json`
3. your main module
4. `npm publish`

----

### `package.json`

~~~javascript
{
  "name": "thingifier",
  "version": "1.0.0-alpha.0",
  "main": "index.js",
  "bin": {
    "thingifier": "bin/thingifier.js"
  },
  ...
}
~~~

----

### `./bin/thingifier.js`

~~~javascript
#!/usr/bin/env node

// This will end up consulting package.json and
// importing the file pointed to by the "main"
// key of the module.
let thingifier = require('../');
thingifier();
~~~

----

### `./index.js`

~~~javascript
module.exports = function () {
	console.log('You ran thingifier!');
}
~~~

----

### `npm publish`

`bin` entries only get installed when you `npm install` a module globally or as a dependency

---

## The Result

After `npm install thingifier` (or, `npm link`)

1. On OSX/Linux, `./node_modules/.bin/thingifier`
2. On Windows, `./node_modules/.bin/thingifier.CMD`

---

## The hashbang

### `#!what???`
[It's a Unix thing](http://stackoverflow.com/a/33510581)

----

+ Using `/usr/env` is a trick to find the `node` executable and tells unix to run the script using it.
+ Windows ignores it
+ Some versions of Linux may give you trouble because there was already a `node` package (Debian, Ubuntu, ...)

---

## A little more advanced

---

### Command Line Arguments

----

[`process.argv`](https://nodejs.org/docs/latest/api/process.html#process_process_argv)

An array of the space seperated arguments passed to the process, starting with the path to `node` and the running script.

----

You can parse it yourself, but you probably just want to use [yargs](https://www.npmjs.com/package/yargs), [minimist](https://www.npmjs.com/package/minimist), or [nopt](https://www.npmjs.com/package/nopt).

---

### Environment Variables

----

[`process.env`](https://nodejs.org/api/process.html#process_process_env)

An object mapping environment variables to their string values

----

Lots of packages to help with this too, but I like how [yargs](https://www.npmjs.com/package/yargs) transforms prefixed environment variable keys to nested configuration objects.

---

### Configuration Files

----

#### Root-of-the-Project

+ `grunt` - `Gruntfile.js`
+ `gulp` - `Gulpfile.js`
+ `webpack` - `webpack.config.js`

----

#### `.{app}rc` files

+ `eslint` - `.eslintrc`
+ `babel` - `.babelrc`
+ `npm` - `.npmrc`
+ `git` - `.gitignore`

----

It is also common to see configuration under a key in `package.json`

---

## [Configr8](https://www.npmjs.com/package/configr8)

Expresses my own personal preferences for handling configuration via CLI arguments, environment, `package.json`, and `.{app}rc` files

----

[Lots of different options...](https://www.npmjs.com/browse/keyword/rc)

