import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="foot">
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
          <FontAwesomeIcon
            icon={faAnglesUp}
            color="#f0ffff"
            size="xl"
            className="iconos"
            beatFade
            onClick={scrollToTop}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
