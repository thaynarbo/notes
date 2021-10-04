import React, { useState } from 'react';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList';

const App = () => {
	const [note, setNotes] = useState([]);

	const addNoteHandler = (notes) => {
		setNotes((prevNotes) => {
			return [notes, ...prevNotes];
		});
	};

	const deleteNote = (id) => {
		const updatedNotes = note.filter((note) => note.id !== id);
		setNotes(updatedNotes);
	};

	return (
		<div>
			<CreateNote onNoteAdd={addNoteHandler} onNoteDelete={deleteNote} />
			<NoteList data={note} onDeleteNote={deleteNote} />
		</div>
	);
};

export default App;
