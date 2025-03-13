import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Projects />
    </>
  );
}

export default App;
