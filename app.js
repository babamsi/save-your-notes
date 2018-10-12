var secret = require('./notes');
var yargs = require('yargs');

var argv = yargs.argv

var command = yargs.argv._[0];

if(command === 'add') {
    secret.addYourSecret(argv.title, argv.body);
} else if(command === 'remove') {
    let msg = secret.removeSecret(argv.title);
    let msg2 = msg ? "Not removed " : "Note removed"
    console.log(msg2)
}