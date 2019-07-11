import React, { useState } from "react";
import "./App.css";
import CrescentSaturn from './images/CrescentSaturn.jpg';

function App() {
  return (
    <div className="App">
      <h1>NASA Photo of the Day!</h1>
      <p>Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
      <p>2019 July 7</p>
      <img src= {CrescentSaturn}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
