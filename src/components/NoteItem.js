import React from 'react';

const NoteItem = ({ handleDelete, id, note }) => {
	return <h3 onClick={() => handleDelete(id)}>{note}</h3>;
};

export default NoteItem;
