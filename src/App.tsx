import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SongsList, Song } from "views";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SongsList />} />
        <Route path="/:songId" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
