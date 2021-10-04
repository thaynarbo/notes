import React, { useState } from 'react';

const CreateNote = props => {
    const [input, setNote] = useState('')  // <- Array Destructuring

    const noteInputHandler = event => { // <- Arrow Function 
        setNote(event.target.value);
    }

    const noteInputAddingHandler = event => {
        event.preventDefault();

        const noteData = {
            id: Math.random().toString(), // Generating a random ID for every item <- Warning: Might generate the same number again. 
            title: input,
        }

        props.onNoteAdd(noteData);
        props.onNoteDelete(noteData.id)
        setNote('')
    } 

    return (
        <div>
            <input type="text" onChange={noteInputHandler} placeholder="Enter Note" value={input}/>
            <button type="submit" onClick={noteInputAddingHandler}>Add Note</button>
        </div>
    )
}

export default CreateNote; 
