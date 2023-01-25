import "./App.css";
import About from "./components/About";
import Research from "./components/Research";

import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  createContext,
} from "react";
// import fsg from "../logos/fsgwhite.png";
import fscube from "./logos/fscubewhite.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext(null);

function App() {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", false);
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleDarkMode = (isDarkMode) => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setDarkMode(isDarkMode);
    localStorage.setItem("theme", newTheme);
    localStorage.setItem("isDarkMode", isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
      <div
        style={{
          background: isDarkMode
            ? "radial-gradient(circle at 33.1% 2.8%, #383838 0%, #000000 99.4%);"
            : "#ffffff",
          transition: "0.5s background",
        }}
        id={theme}
        className="test"
      >
        <div className="wrapper">
          <div className="header">
            <div className="nav-main">
              <a href="/" className="navlink">About Us</a>
              <a href="/" className="navlink">Research & Content</a>
              <a href="/" className="navlink">Delegate Tokens</a>

              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={16}
                className="moon"
              />
            </div>
          </div>
          <div className="landing-main">
            <div className="logo-box">
              <a
                href="https://flipsidecrypto.xyz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <img src={fscube} alt="flipside" className="fslogo" />
              </a>
            </div>
            <div className="typewriter">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Flipside Governance").start();
                }}
                options={{
                  wrapperClassName: "type",
                  cursorClassName: "type-cursor",
                }}
              />
            </div>
          </div>
          <div className="socialscroll">
            <div className="socials">
              <a
                href="https://twitter.com/flipsidegov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} color="#f0ffff" size="lg" />
              </a>
              {/* <FontAwesomeIcon icon={faTelegram} color="#f0ffff" size="sm" /> */}
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMedium} color="#f0ffff" size="lg" />
              </a>
            </div>
            <div className="scroll">
              <p className="text-vert">Scroll</p>
              <FontAwesomeIcon
                icon={faAngleDown}
                color="#f0ffff"
                size="sm"
                beatFade
              />
            </div>
          </div>
          <About />
          <Research />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
