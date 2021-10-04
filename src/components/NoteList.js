import NoteItem from './NoteItem'

const NoteList = (props) => {
  
    return props.data.map((note) => {
      return ( 
        <NoteItem
            note={note.title}
            key={note.id}
            delFunction={props.onDeleteNote}
        ></NoteItem>
      );
    });
};
  
export default NoteList;
  
