import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton2 = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="breaker2">
      <FontAwesomeIcon
        icon={faAnglesUp}
        color="#f0ffff"
        size="2xl"
        className="iconos"
        beatFade
        onClick={scrollToTop}
      />
    </div>
  );
};

export default ScrollButton2;
