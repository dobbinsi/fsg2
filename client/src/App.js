import "./App.css";
import About from "./components/About";
import Research from "./components/Research";
import Dashboards from "./components/Dashboards";
import Delegate from "./components/Delegate";
import ScrollButton from "./components/ScrollButton";

import { Link } from "react-scroll";

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
              <Link
                activeClass="active"
                className="navlink"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Who We Are
              </Link>
              <Link
                activeClass="active"
                className="navlink"
                to="research"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Research & Content
              </Link>
              <Link
                activeClass="active"
                className="navlink"
                to="dashboards"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Dashboards & Tooling
              </Link>
              <Link
                activeClass="active"
                className="navlink"
                to="delegate"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Delegate Tokens
              </Link>
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
                <FontAwesomeIcon
                  icon={faTwitter}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
              {/* <FontAwesomeIcon icon={faTelegram} color="#f0ffff" size="sm" /> */}
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMedium}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
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
          <div id="about">
            <About />
          </div>
          <div id="research">
            <Research />
          </div>
          <div id="dashboards">
            <Dashboards />
          </div>
          <div id="delegate">
            <Delegate />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
