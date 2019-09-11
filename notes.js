const fs = require('fs')
const chalk = require('chalk');

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (e) {
		return []
	}
}

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', dataJSON)	
}

const listNotes = () => {
	const notes = loadNotes()
	console.log(chalk.green('Your Notes:'))
	notes.forEach((note) => {
		console.log(note.title)
	})
}

const addNote = (title, body) => {
	const notes = loadNotes()

	// Only add the provided note if it is not a duplicate.
	// We work this out by checking if any of the existing notes are the same as the note provided.
	// We’ll use filter to create a "duplicateNotes" subset of our existing notes.
	// Filter() will run the function passed to it as an argument once on each note in notes.
	// If the note’s title is the same as the proposed new note’s title, it gets stored in the subset "duplicateNotes" 
	// const duplicateNotes = notes.filter((note) => note.title === title)
	// if (duplicateNotes.length === 0) {
	// 	notes.push({
	// 		title: title, 
	// 		body: body 
	// 	})
	// 	saveNotes(notes)
	// 	console.log(chalk.green.inverse("New note added!"))
	// } else {
	// 	console.log(chalk.red.inverse("Note could not be added because the title was already taken."))
	// }

	// We’ll replace the above with something more efficient; using the 'find' array method to stop after a duplicate is found rather than go through all notes.
	const duplicateNote = notes.find((note) => note.title === title)
	if (!duplicateNote) {
		notes.push({
			title: title, 
			body: body 
		})
		saveNotes(notes)
		console.log(chalk.green.inverse("New note added!"))
	} else {
		console.log(chalk.red.inverse("Note could not be added because the title was already taken."))
	}
}

const readNote = (title) => {
	const notes = loadNotes()
	const foundNote = notes.find((note) => note.title === title)
	if (foundNote) {
		console.log(chalk.green.inverse('Your note'))
		console.log(foundNote.body)
	} else {
		console.log(chalk.red.inverse('No note found!'))
	}
}

const removeNote = (title) => {
	const notes = loadNotes()

	// Remove the provided note if it exists.
	const remainingNotes = notes.filter((note) => note.title !== title)
	
	// We only need to save something new if the new array of notes is different from the old.
	if (remainingNotes.length !== notes.length) {	
		if (remainingNotes.length === 0) {
			saveNotes([])
		} else {
			saveNotes(remainingNotes)
		}
		console.log(chalk.green.inverse('Note with title ' + title + ' was removed!'))
	} else {
		console.log(chalk.red.inverse('No note found!'))
	}
}

module.exports = {
	listNotes: listNotes, 
	addNote: addNote, 
	readNote: readNote, 
	removeNote: removeNote
}