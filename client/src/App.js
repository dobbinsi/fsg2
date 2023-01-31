import "./App.css";
import About from "./components/About";
import Research from "./components/Research";
import Dashboards from "./components/Dashboards";
import Delegate from "./components/Delegate";
import Landing from "./components/Landing";

import { Link } from "react-scroll";

import React, { createContext } from "react";
import fscube from "./logos/fscubewhite.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "use-local-storage";

import { Tooltip, Zoom } from "@mui/material";

// import {
//   HideBetween,
//   HideDuring,
//   HideOn,
//   HideScroll,
// } from "react-hide-on-scroll";

const ThemeContext = createContext(null);

function App() {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", true);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

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
          background: isDarkMode ? "#000" : "#ffffff",
          transition: "0.6s background",
        }}
        id={theme}
        className="test"
      >
        <div className="wrapper">
          <div className="header" id="header">
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
                About
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
                Research
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
                Services
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
                Tools
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
                Delegate
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
            {/* <HideOn inverse height={600}> */}
            <div className="TimelineIndicator_container">
              <Link
                activeClass="active"
                className="iconos"
                to="header"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Home"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        backgroundColor: "#171b20",
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} size="2xs" />
                </Tooltip>
              </Link>
              <Link
                activeClass="active"
                className="iconos"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="About"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        backgroundColor: "#171b20",
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} size="2xs" />
                </Tooltip>
              </Link>
              <Link
                activeClass="active"
                className="iconos"
                to="research"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Research"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        backgroundColor: "#171b20",
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} size="2xs" />
                </Tooltip>
              </Link>
              <Link
                activeClass="active"
                className="iconos"
                to="dashboards"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Services"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        backgroundColor: "#171b20",
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} size="2xs" />
                </Tooltip>
              </Link>
              <Link
                activeClass="active"
                className="iconos"
                to="dashboards"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Tools"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        backgroundColor: "#171b20",
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} size="2xs" />
                </Tooltip>
              </Link>
              <Link
                activeClass="active"
                className="iconos"
                to="delegate"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Delegate"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "13px",
                        fontFamily: "inherit",
                        fontWeight: "bold",
                        backgroundColor: "#171b20",
                      },
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faCircle} size="2xs" />
                </Tooltip>
              </Link>
            </div>
            {/* </HideOn> */}

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
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTelegram}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
              <a
                href="https://medium.com/flipside-governance"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color="#f0ffff"
                  size="lg"
                  className="iconos"
                />
              </a>
            </div>
            <div className="scroll">
              {/* <p className="text-vert">Scroll</p> */}
              <Link
                activeClass="active"
                className="navlink"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  color="#f0ffff"
                  size="xl"
                  className="iconos"
                  beatFade
                />
              </Link>
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
