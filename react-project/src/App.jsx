import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="stylized atom" />
      <h1>React Essentials</h1>
      <p></p>
      Fundamental react concepts you will need for almost any app you are going
      to build!
    </header>
  );
}

function App() {
  return (
    <div>
      <Header></Header> 
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
