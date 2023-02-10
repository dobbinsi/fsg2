import React, { useRef } from "react";

import { Fade, Slide } from "@mui/material";

function About() {
  // const containerRef = useRef(null);

  return (
    <div className="intro">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">01: WHO WE ARE</h1>
        <div className="typewriter2">
          <p className="type2">
            Flipside is an ecosystem growth partner. Our governance team serves
            as a Professional Delegate, supporting the proliferation and
            function of decentralized organizations.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values">
        <div class="container1">
          <div class="card">
            <h3 class="title">We are Authentic</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We're here because we're passionate about crypto and what it can
                achieve. We're users first and governors second.{" "}
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Rational</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We consider all possible outcomes to the best of our ability and
                thoroughly weigh the pros and cons of each decision we make.
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Human</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We form real connections through collaboration with other
                delegates and governance participants.
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Curious</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We embrace the never-ending learning curve that is crypto and
                love to experiment with new ideas and frameworks.
              </p>
            </div>
          </div>
          <div class="card">
            <h3 class="title">We are Loyal</h3>
            <div class="bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
              <p>
                We stay committed to each other and the protocols that we serve
                because we believe in the mission.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default About;
