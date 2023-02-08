import React from "react";
import fsgservices from "../logos/fsgservices.png";
import fsgservices2 from "../logos/fsg_services2.png";

import { Fade } from "@mui/material";

function About() {
  return (
    <div className="intro">
      <h1 className="bigletters">02: WHAT WE DO</h1>
      <div className="typewriter2">
        <p className="type2">
          To us, participating in governance is much more than acquiring tokens
          and voting on proposals. We bring much more to the table.
        </p>
      </div>
      <Fade in={true} timeout={4000} style={{ transitionDelay: "300ms" }}>
        <div className="values">
          <div className="dgholder">
            <img src={fsgservices2} alt="services" className="services" />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
