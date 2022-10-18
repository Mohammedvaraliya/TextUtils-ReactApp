// import About from "./components/About";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us"/>
      <TestForm heading="Enter the Text to analyze"/>
      {/* <About/> */}
    </>
  );
}

export default App;
