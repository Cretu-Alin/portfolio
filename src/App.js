import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import { GlobalStyles } from "./shared/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
