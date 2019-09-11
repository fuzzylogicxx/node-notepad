# node-notepad
A simple Node.js app for note-making: adding, readng, deleting and listing notes.

It uses `yargs` to parse command line commands with arguments, `fs` to create and write to `JSON` files, and JavaScript arrow functions and array-based methods (such as filter and find). 

## Prerequisites
Install the latest version of Node.js.

## Getting started
Fork this repository then `git clone` to start working locally. 

`cd` into your project folder then `npm install` to install all package dependencies.

## Add a note 

Run `node app.js add --title="Shopping List" --body="Milk, Bread, Eggs"`

## Read a note

Run `node app.js read --title="Shopping List"`

## Delete a note

Run `node app.js remove --title="Shopping List"`

## Get all notes

Run `node app.js list`
