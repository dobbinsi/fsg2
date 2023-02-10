import { Link } from "react-scroll";

import React, { useState, useEffect } from "react";

import fsgwhite2 from "../logos/fsgwhite2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  const [isVisible2, setIsVisible2] = useState(true);
  const [height2, setHeight2] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll2);
    return () => window.removeEventListener("scroll", listenToScroll2);
  }, []);

  const listenToScroll2 = () => {
    let heightToHideFrom = 200;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight2(winScroll);

    if (winScroll > heightToHideFrom) {
      setIsVisible2(false);
    } else {
      setIsVisible2(true);
    }
  };

  return (
    <div>
      <div className="header" id="header">
        <div className="nav-main">
          <Link
            activeClass="active"
            className="navlink"
            to="about"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            WHO WE ARE
          </Link>
          <Link
            activeClass="active"
            className="navlink"
            to="about2"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            WHAT WE DO
          </Link>
          <Link
            activeClass="active"
            className="navlink"
            to="about3"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            STATS
          </Link>
          <Link
            activeClass="active"
            className="navlink"
            to="research"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            RESEARCH
          </Link>

          <Link
            activeClass="active"
            className="navlink"
            to="dashboards"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            TOOLS
          </Link>
          <Link
            activeClass="active"
            className="navlink"
            to="delegate"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            DELEGATE
          </Link>
          <Link
            activeClass="active"
            className="navlink8"
            to="contact"
            spy={true}
            smooth={true}
            // offset={-100}
            duration={500}
          >
            CONTACT US
          </Link>
        </div>
        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={18}
          className="moon"
        /> */}
      </div>
      <div className="lander">
        <div className="landing-main">
          <div className="logo-box">
            <a
              href="https://flipsidecrypto.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="lglg"
            >
              {" "}
              <img src={fsgwhite2} alt="flipside" className="fslogo" />
            </a>
          </div>
          {/* <div className="typewriter-land">
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
        </div> */}
        </div>
        {isVisible2 ? (
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
                // offset={-100}
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
        ) : (
          <div className="socialscroll2">.</div>
        )}
      </div>
    </div>
  );
}

export default Landing;
