
import React, { useState } from "react";

function CreateArea(props) {

const [note,setNote ] = React.useState({
    title:"",
    content:""
});

function handleChange(e){
const {name,value} = e.target

setNote(prevNote =>{
    return {
        ...prevNote,
        [name]:value
    }
})
}

function clickFunction(e){

    props.itemAdd(note);

    e.preventDefault();
    setNote({
        title:"",
        content:""
    });

}

  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>
        <textarea name="content" onChange={handleChange} placeholder="Take a note..." rows="3" value={note.content}/>
        <button onClick={clickFunction}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
