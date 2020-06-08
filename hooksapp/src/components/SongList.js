import React, { useState, useEffect } from "react";
import { v1 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  // The useState method takes the initial array and returns an array.
  //We're using array destructuring to get songs array, and a function.
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);

  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: v1() }]);
  };

  // When only one argument (a function) is given, the useEffect function
  // will run every time the data changes (songs, age etc.)
  // But if we pass a second array argument, we're telling them to watch
  // for these data changes.
  useEffect(() => {
    console.log("useEffect hook ran. Songs array changed.", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect hook ran. Age changed.", songs);
  }, [age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
