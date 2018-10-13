
const secret = require('./notes');
var yargs = require('yargs');

var titleOptions = {
    describe: "Title of the secret",
    alias: 't',
    demand: true
}
var bodyOptions = {
    describe: "the secret ot the text",
    alias: 'b',
    demand: true
}
var argv = yargs.command("add", 'add a new secret', {
    title: titleOptions,
    body: bodyOptions
})
.command('list', 'list all your secrets')
.command('read', 'read a secret', {
    title: titleOptions
})
.command('remove', 'remove a secret', {
    title: titleOptions
})
.command('clear', 'clear all your secrets')
.help()
.argv

var command = argv._[0];

if(command === 'add') {
     secret.addYourSecret(argv.title, argv.body);
    
} else if(command === 'remove') {
    let msg = secret.removeSecret(argv.title);
    let msg2 = msg ? "Not removed Anythinh" : "Your secret was removed removed"
    console.log(msg2)
} else if(command === 'read') {
    let getSec = secret.getSecret(argv.title);
    if(getSec) {
     secret.logSecret(getSec);
    } else {
        console.log('      ')
        console.log('Your data not found')
    }
} else if(command === 'list') {
    const all = secret.getAllSecret();
    if(all.length > 0) {
        console.log('there is ', all.length, 'secrets')
        const theData = all.map(elem => secret.logSecret(elem));
      
    } else {
        console.log('                ');
        console.log('................')
        console.log("There's no data")
    }
    
    
} else if(command === 'clear') {
    let nn = secret.clearAllSecret();
    console.log(`${nn} secrets removed `)
} else {
    console.log('           ')
    console.log('            ');
    console.log('command not recognized')
}
