import React, { useState } from 'react';
import CreateNote from './components/CreateNote';
import NoteList from './components/NoteList';
import NoteItem from './components/NoteItem';

/*
const Notes = [

]
*/

const App = () => {
	const [note, setNotes] = useState([]);

	const addNoteHandler = (notes) => {
		setNotes((prevNotes) => {
			return [notes, ...prevNotes];
		});
	};

	const handleDelete = (id) => {
		const updatedNotes = note.filter((note) => note.id !== id);
		return setNotes(updatedNotes);
	};

	return (
		<div>
			<CreateNote onNoteAdd={addNoteHandler} />
			<NoteList data={note} handleDelete={handleDelete} />
		</div>
	);
};

export default App;
