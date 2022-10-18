import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [textTheme, setTextTheme] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setTextTheme('Enable LightMode');
      document.body.style.backgroundColor = "#150037";
      showAlert("Dark mode has enabled!", "success");
    }
    else {
      setMode('light')
      setTextTheme('Enable DarkMode');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled!", "success");

    }

  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} aboutText="About Us" textTheme={textTheme} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TestForm showAlert={showAlert} heading="Enter the Text to analyze" mode={mode} />
      <About />
    </>
  );
}

export default App;
