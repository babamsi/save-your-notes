var secret = require('./notes');
var yargs = require('yargs');

var argv = yargs.argv

var command = yargs.argv._[0];

if(command === 'add') {
    secret.addYourSecret(argv.title);
}