# [Building A Node Command Line Interface](./Building-A-Node-CLI.md)

This is a slidedeck built with [reveal-md](https://www.npmjs.com/package/reveal-md). You can [view it as markdown](./Building-A-Node-CLI.md) or through `reveal-md`.

## Install `reveal-md`

~~~bash
npm install -g reveal-md
~~~

## Start Slide Deck

~~~bash
reveal-md Building-A-Node-CLI.md --theme moon
~~~

## Some of the example commands

### Supplying Command Line Arguments
~~~bash
thingifier --sean cool --ethan smart --aaron 2
~~~

### Setting environment variables
~~~bash
export THINGIFIER_FOO=foo; export THINGIFIER_BAR__BAZ=1;
~~~

### Overriding Environment-based Values with Command Line Arguments
~~~bash
# This assumes you have already run `export THINGIFIER_BAR__BAZ=1`
thingifier --sean cool --ethan smart --aaron 2 --bar.baz=2
~~~

### `npm run` scripts

~~~bash
npm test
~~~

This will run the `tape` CLI at `./node_modules/.bin/tape`.

~~~bash
npm run example
~~~

Take a look at all of the environment variables npm adds for you.
