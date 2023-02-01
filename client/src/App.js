import "./App.css";

import { Link } from "react-scroll";

import LazyLoad from "react-lazy-load";

import React, {
  useState,
  useEffect,
  createContext,
  lazy,
  Suspense,
} from "react";
import fscube from "./logos/fscubewhite.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAnglesDown,
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

const ThemeContext = createContext(null);

const About = lazy(() => import("./components/About"));
const Research = lazy(() => import("./components/Research"));
const Dashboards = lazy(() => import("./components/Dashboards"));
const Delegate = lazy(() => import("./components/Delegate"));

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

  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);

    if (winScroll < heightToShowFrom) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
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
              {/* <Link
                activeClass="active"
                className="navlink"
                to="dashboards"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Services
              </Link> */}
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
            </div>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={18}
              className="moon"
            />
          </div>
          <div className="landing-main">
            {isVisible && (
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
                          fontSize: "14px",
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
                          fontSize: "14px",
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
                          fontSize: "14px",
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
                {/* <Link
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
                          fontSize: "14px",
                          fontFamily: "inherit",
                          fontWeight: "bold",
                          backgroundColor: "#171b20",
                        },
                      },
                    }}
                  >
                    <FontAwesomeIcon icon={faCircle} size="2xs" />
                  </Tooltip>
                </Link> */}
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
                          fontSize: "14px",
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
                          fontSize: "14px",
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
            )}
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
            <div className="typewriter-land">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("FLIPSIDE GOVERNANCE").start();
                }}
                options={{
                  delay: 60,
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
              <Link
                activeClass="active"
                className="navlink2"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <FontAwesomeIcon
                  icon={faAnglesDown}
                  color="#f0ffff"
                  size="xl"
                  className="iconos"
                  beatFade
                />
              </Link>
            </div>
          </div>
          <div id="about">
            <LazyLoad height={1000}>
              <About />
            </LazyLoad>
          </div>
          <div id="research">
            <LazyLoad height={1600}>
              <Research />
            </LazyLoad>
          </div>
          <div id="dashboards">
            <LazyLoad height={2400}>
              <Dashboards />
            </LazyLoad>
          </div>
          <div id="delegate">
            <LazyLoad>
              <Delegate />
            </LazyLoad>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
