import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  return (
    <div className="breaker">
      <FontAwesomeIcon
        icon={faAnglesDown}
        color="#f0ffff"
        size="2xl"
        className="iconos"
        beatFade
      />
    </div>
  );
};

export default ScrollButton;
