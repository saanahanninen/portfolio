import Topnav from "./components/topnav/Topnav";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Fun from "./components/fun/Fun";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topnav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />

      </div>
    </div>
  );
}

export default App;
