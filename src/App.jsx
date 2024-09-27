import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./assets/componentes/Cards.jsx";
import Video from "./assets/componentes/card/video.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards />
      <Video />
      <h1>Laura Fernández</h1>
    </>
  );
}

export default App;
