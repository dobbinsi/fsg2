import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

const ScrollButton5 = () => {
  return (
    <div className="breaker">
      <Link to="about2" spy={true} smooth={true} duration={500}>
        <FontAwesomeIcon
          icon={faAnglesDown}
          color="#f0ffff"
          size="xl"
          className="iconos"
          beatFade
        />
      </Link>
    </div>
  );
};

export default ScrollButton5;
