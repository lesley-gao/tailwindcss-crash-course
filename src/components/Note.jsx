import React from "react";
import { VscTrash } from "react-icons/vsc";

// Notes component: on the middle right area of the webpage, display the notes that include users' daily thoughts.

function Note(props) {

  const creationDate = new Date().toLocaleDateString();

  function handleClick() {
    props.onDelete(props.id);
  }

  return (

    <div className="relative p-8 h-80 rounded-xl shadow-lg font-lato text-md text-gray-600 bg-lavender-100 text-balance flex flex-col dark:bg-night-50 dark:text-white">
      <h1 className="font-bold font-caveat text-lavender-600 text-2xl">{props.title.substring(0, 20)}</h1>
      <p className="text-right mt-3 font-caveat">{creationDate}</p>
      <p className="my-5">{props.content.substring(0, 100)}</p>
      <a href="#"><p className="text-lavender-400 cursor-pointer absolute bottom-5 left-6"> Read more...</p></a>
      <button onClick={handleClick} className="cursor-pointer absolute bottom-5 right-6 text-2xl"><VscTrash /></button>
    </div>
  );

}

export default Note;