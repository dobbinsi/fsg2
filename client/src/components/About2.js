import React from "react";
import fsgservices from "../logos/fsgservices.png";
import fsgservices2 from "../logos/fsg_services2.png";

import { Fade } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faChartSimple,
  faHandshakeSimple,
  faScroll,
  faLightbulb,
  faGear,
  faCheckToSlot,
  faLandmark,
} from "@fortawesome/free-solid-svg-icons";

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
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "300ms" }}> */}
      <div className="values">
        <div className="dgholder">
          <img src={fsgservices2} alt="services" className="services" />
        </div>
      </div>
      <div className="values">
        <h1>HELLO</h1>
        <div className="top-service">
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faBookOpenReader}
                color="#f0ffff"
                size="xl"
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Independent Research</h2>
            </div>
          </div>
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faChartSimple}
                color="#f0ffff"
                size="xl"
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Data & Analytics</h2>
            </div>
          </div>
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faLandmark}
                color="#f0ffff"
                size="xl"
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Forum Engagement</h2>
            </div>
          </div>
        </div>
        <div className="top-service">
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faScroll}
                color="#f0ffff"
                size="xl"
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Proposal Development</h2>
            </div>
          </div>
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faGear}
                color="#f0ffff"
                size="xl"
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Tools & Dashboards</h2>
            </div>
          </div>
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                color="#f0ffff"
                size="xl"
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Voting & Rationale</h2>
            </div>
          </div>
          <div className="service">
            <div className="iconhouse">
              <FontAwesomeIcon
                icon={faHandshakeSimple}
                color="#f0ffff"
                size="xl" 
                className="iconos"
              />
            </div>
            <div className="service-title">
              <h2>Advisory & Consulting</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="values99">
        .
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default About;
