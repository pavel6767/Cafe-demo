import React from 'react';

import './App.css';

import Nav from "./components/Nav";
import Left from "./components/Left";
import Main from "./components/Main";
import Right from "./components/Right";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Left />
        <Main />
        <Right />
      </div>
    </div>
  );
}

export default App;
