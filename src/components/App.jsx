import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// Include Header, Footer, CreateArea and Note components, users can add or delete their daily notes

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="flex flex-col min-h-screen dark:bg-night-50" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/brick-wall.png')" }}>

      <div>
        <Header />
      </div>

      <div className="gap-10 p-10 flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <CreateArea onAdd={addNote} />
        </div>

        <div className=" flex flex-wrap gap-2 justify-around w-full md:w-3/4">
          {notes.map((noteItem, index) => {
            return (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                <Note
                  id={index}
                  title={noteItem.title}
                  content={noteItem.content}
                  onDelete={deleteNote}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
