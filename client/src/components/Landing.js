import { Link } from "react-scroll";

import React from "react";
import fscube from "../logos/fscubewhite.png";
import fsgwhite from "../logos/fsgwhite.png";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Landing() {
  return (
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
            <img src={fsgwhite} alt="flipside" className="fslogo" />
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
    </div>
  );
}

export default Landing;
