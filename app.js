const yargs = require('yargs');
const notes = require('./notes.js');
//const _ = require('lodash');

// Customise yargs verson
yargs.version('1.1.0')

// Create 'add' command 
yargs.command({
    command: 'add',
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'Note body', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.addNote(argv.title, argv.body)
  }
})

// Create 'remove' command 
yargs.command({
    command: 'remove',
    describe: 'Remove a note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.removeNote(argv.title)
  }
})

yargs.command({
    command: 'list', 
    describe: 'List all notes', 
    handler(argv) {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read', 
    describe: 'Read note', 
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true, 
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})



console.log(yargs.argv)
