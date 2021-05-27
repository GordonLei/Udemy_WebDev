import React from "react";

function CreateArea(props) {

  const [note, setNotes] = useState({
    title: "",
    content: ""
  })

  function handleChange(event){
    const {name, value} = event.target;
    setNotes(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  function submitNote(event){
    props.onAdd(note)
    setNotes({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input 
          onChange = {handleChange}
          name="title" 
          value={note.title} 
          placeholder="Title" 
        />
        <textarea 
          onChange = {handleChange}
          name="content" 
          value={note.content} 
          placeholder="Take a note..." 
          rows="3" 
        />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
