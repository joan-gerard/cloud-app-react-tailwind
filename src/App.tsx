import React from "react";
import About from "./components/About";
import AllInOne from "./components/AllInOne";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Support from "./components/Support";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
    </div>
  );
}

export default App;
