import React from "react";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <div className="intro">
      <div className="typewriter2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Flipside is an ecosystem growth partner. Our governance team serves as a Professional Delegate, supporting the proliferation and function of decentralized organizations through rational decision-making, proposal creation and analytics. We bring clarity to DAOs by unlocking product, social and tokenholder value."
              )
              .start();
          }}
          options={{
            wrapperClassName: "type2",
            cursorClassName: "type-cursor2",
          }}
        />
        <div className="values">
          <div className="value-card">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
