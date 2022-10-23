import About from "./components/About";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import Alert from "./components/Alert";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

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
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light')
      setTextTheme('Enable DarkMode');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has enabled!", "success");
      document.title = "TextUtils - Light Mode";

    }

  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} aboutText="About Us" textTheme={textTheme} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<TestForm showAlert={showAlert} heading="Enter the Text to analyze Remove punctuations, Remove newline character, Remove extra spaces, Convert To Uppercase, Convert To Lowercase, Clear Text, Copy Text, Sentence Case, Title Case." mode={mode} />}>
            </Route>
            <Route path="/home" element={<TestForm showAlert={showAlert} heading="Enter the Text to analyze Remove punctuations, Remove newline character, Remove extra spaces, Convert To Uppercase, Convert To Lowercase, Clear Text, Copy Text, Sentence Case, Title Case." mode={mode} />}>
            </Route>
            <Route exact strict path="/about" element={<About textTheme={textTheme} toggleMode={toggleMode} mode={mode}/>}>
            </Route>
          </Routes>
        </div>
        </Router>
    </>
  );
}

export default App;
