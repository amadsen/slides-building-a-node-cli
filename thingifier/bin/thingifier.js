#!/usr/bin/env node

// This will end up consulting package.json and
// importing the file pointed to by the "main"
// key of the module.
let thingifier = require('../');
thingifier();
