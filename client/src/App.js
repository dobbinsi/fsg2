import "./App.css";
import ScrollButton from "./components/ScrollButton";

import { Link } from "react-scroll";

import LazyLoad from "react-lazy-load";

import React, {
  useState,
  useEffect,
  createContext,
  lazy,
  Suspense,
  useRef,
} from "react";
// import fscube from "./logos/fscubewhite.png";
// import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useLocalStorage from "use-local-storage";

import { Tooltip, Zoom } from "@mui/material";

import useScrollSnap from "react-use-scroll-snap";
import Landing from "./components/Landing";
// import Contact from "./components/Contact";
import ScrollButton2 from "./components/ScrollButton2";

const ThemeContext = createContext(null);

const About = lazy(() => import("./components/About"));
const Research = lazy(() => import("./components/Research"));
const Dashboards = lazy(() => import("./components/Dashboards"));
const Delegate = lazy(() => import("./components/Delegate"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [isDarkMode, setDarkMode] = useLocalStorage("isDarkMode", true);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

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
        ref={scrollRef}
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
              <Link
                activeClass="active"
                className="navlink"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
            </div>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={18}
              className="moon"
            />
          </div>
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
                        fontSize: "18px",
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
                        fontSize: "18px",
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
                        fontSize: "18px",
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
                        fontSize: "18px",
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
                        fontSize: "18px",
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
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Contact"
                  placement="left"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        fontSize: "18px",
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
          <div id="home">
            <LazyLoad>
              <Landing />
            </LazyLoad>
          </div>
          <div id="about">
            <LazyLoad>
              <About />
            </LazyLoad>
          </div>
          <ScrollButton />
          <div id="research">
            <LazyLoad>
              <Research />
            </LazyLoad>
          </div>
          <ScrollButton />
          <div id="dashboards">
            <LazyLoad>
              <Dashboards />
            </LazyLoad>
          </div>
          <ScrollButton />
          <div id="delegate">
            <LazyLoad>
              <Delegate />
            </LazyLoad>
          </div>
          <ScrollButton />
          <div id="contact">
            <LazyLoad>
              <Contact />
            </LazyLoad>
          </div>
          <ScrollButton2 />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
