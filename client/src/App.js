import "./App.css";

import { Link } from "react-scroll";

// import LazyLoad from "react-lazy-load";

import React, {
  useState,
  useEffect,
  createContext,
  lazy,
  Suspense,
  useRef,
} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

import { Tooltip, Zoom } from "@mui/material";

import Landing from "./components/Landing";
import ScrollButton2 from "./components/ScrollButton2";
import ScrollButton5 from "./components/ScrollButton5";
import ScrollButton6 from "./components/ScrollButton6";
import ScrollButton7 from "./components/ScrollButton7";
import ScrollButton8 from "./components/ScrollButton8";
import ScrollButton9 from "./components/ScrollButton9";
import ScrollButton33 from "./components/ScrollButton33";

import About from "./components/About";
import About2 from "./components/About2";
import Research from "./components/Research";
import Dashboards from "./components/Dashboards";
import Delegate from "./components/Delegate";
import Contact from "./components/Contact";
import Numbers from "./components/Numbers";

// const About = lazy(() => import("./components/About"));
// const About2 = lazy(() => import("./components/About2"));
// const Research = lazy(() => import("./components/Research"));
// const Dashboards = lazy(() => import("./components/Dashboards"));
// const Delegate = lazy(() => import("./components/Delegate"));
// const Contact = lazy(() => import("./components/Contact"));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 700;
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
    <div className="wrapper">
      {isVisible && (
        <div className="TimelineIndicator_container">
          <Link
            activeClass="active"
            className="iconos"
            to="home"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="00: HOME"
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
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="01: WHO WE ARE"
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
            to="about2"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="02: WHAT WE DO"
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
            to="about3"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="03: STATS"
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
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="04: RESEARCH"
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
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="05: TOOLS"
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
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="06: DELEGATE"
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
            // offset={-100}
            duration={500}
          >
            <Tooltip
              TransitionComponent={Zoom}
              title="07: CONTACT US"
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
        <Landing />
      </div>
      <div id="about">
        <About />
        <ScrollButton5 />
      </div>
      <div id="about2">
        <About2 />
        <ScrollButton33 />
      </div>
      <div id="about3">
        <Numbers />
        <ScrollButton6 />
      </div>
      <div id="research">
        <Research />
        <ScrollButton7 />
      </div>
      <div id="dashboards">
        <Dashboards />
        <ScrollButton8 />
      </div>
      <div id="delegate">
        <Delegate />
        <ScrollButton9 />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <ScrollButton2 />
    </div>
  );
}

export default App;
