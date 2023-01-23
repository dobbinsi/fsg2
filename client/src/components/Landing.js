import React, {
  useState,
  useEffect,
  lazy,
  Suspense,
  createContext,
} from "react";
// import fsg from "../logos/fsgwhite.png";
import fscube from "../logos/fscubewhite.png";
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

function Landing() {
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
    <div className="landing">
      <div className="header">
        <div className="nav-main">
          <p>link1</p>
          <p>link2</p>
          <p>link3</p>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={22}
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
          <FontAwesomeIcon icon={faTwitter} color="#f0ffff" size="sm" />
          <FontAwesomeIcon icon={faTelegram} color="#f0ffff" size="sm" />
          <FontAwesomeIcon icon={faMedium} color="#f0ffff" size="sm" />
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
    </div>
  );
}

export default Landing;
