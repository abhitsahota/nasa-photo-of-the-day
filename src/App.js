import React from "react";
import logo from "./assets/logo.png"
import "./App.css";
import PicData from "./components/apod-data"

function App() {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="App-logo" src={logo} alt="logo" />
      </div>
      <PicData />
    </div>
  );
}

export default App;
