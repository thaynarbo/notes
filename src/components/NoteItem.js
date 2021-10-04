import React from 'react';

const NoteItem = props => {
    const deleteNote = () => {
        props.delFunction(props.key)
    }

    return (
       <h3 onClick={deleteNote}>{props.note}</h3>
    )
}

export default NoteItem;
