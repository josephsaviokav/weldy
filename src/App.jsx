import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SongPlayer from "./pages/Songplayer";
import "./css/App.css";
import "./css/Home.css";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/player/:id" element={<SongPlayer />} />


      </Routes>
    </MovieProvider>
  );
}

export default App;
