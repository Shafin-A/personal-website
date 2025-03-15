import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Socials } from "./components/Socials";
import { Footer } from "./Footer";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Resume />
      <Projects />
      <Contact />
      <Socials />
      <Footer />
    </>
  );
};

export default App;
