const yargs = require('yargs');
module.exports = function () {
    console.log('You ran thingifier!');
    console.log(
        yargs(process.argv.slice(2))
        .env('THINGIFIER') // THINGIFIER_BAR__BAZ=1 => bar: { baz: 1 }
        .argv
    );
    console.log(process.env);
}
