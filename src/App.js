import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";

function App() {
  const [mode, setMode] = useState("dark");
  const [textColor, setTextColor] = useState("light");
  return (
    <>
      <Navbar title="TextUtils" mode={mode} aboutText="About Us" textColor={textColor}/>
      <TestForm heading="Enter the Text to analyze" mode={mode}/>
      <About/>
    </>
  );
}

export default App;
