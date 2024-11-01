import React, { useState } from "react";

//CreateArea component: on the middle left of the webpage, display the area that users can record their daily thoughts.

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  console.log(note)

  return (
    <div className="relative p-5 bg-white border border-dashed border-lavender-300 shadow-2xl rounded-xl h-90 dark:bg-night-50">
      <p className=" font-caveat text-2xl text-lavender-500 font-medium mx-3 mb-3">Log your day, freeze the moment </p>
      <form className="flex flex-col space-y-4 font-lato">
        <input
          className="w-full p-3 input-area"
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          className="w-full p-3 h-60 input-area"
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Record your mood..."
        />
        <button
          className=" absolute bottom-3 right-3 p-2.5 bg-lavender-300 text-white font-bold rounded-full cursor-pointer hover:bg-lavender-200 active:bg-lavender-300 dark:text-black"
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
