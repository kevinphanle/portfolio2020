import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/work/work";
import Footer from "./components/footer/footer";

import "./styles/index.scss";

function App() {
  AOS.init({
    offset: 200,
    duration: 600,
    once: true,
  });

  document
    .querySelectorAll("img")
    .forEach((img) => img.addEventListener("load", () => AOS.refresh()));

  return (
    <Router>
      <div className="App">
        <Home />
        <Navbar />

        <About />
        <Work />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
