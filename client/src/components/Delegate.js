import React from "react";
import Typewriter from "typewriter-effect";
import ScrollButton from "./ScrollButton";

import mkr from "../logos/mkrtoken.png";
import hop from "../logos/hoptoken.png";
import op from "../logos/optoken.png";
import aave from "../logos/aavetoken.png";

function Delegate() {
  return (
    <div className="intro">
      <div className="typewriter2">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "We are a full time governance team dedicated to the complete Web3 ecosystem. We currently run delegations in multiple Ethereum-based DAOs. We're committed to using our experience to improve DAOs, one proposal at a time. Through our participation in multiple DAOs, we've developed key understandings around the needs and flow of information in the governance process and developed key tooling to be successful. Our dedication to support, contribute and drive participation in our partner communities allows us to improve outcomes for everyone, and we'd be honored to vote on your behalf."
              )
              .start();
          }}
          options={{
            delay: 50,
            wrapperClassName: "type2",
            cursorClassName: "type-cursor2",
          }}
        />
      </div>
      <div className="values">
        <h1 id="dele">Delegate to Flipside</h1>
        <div class="container2">
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={mkr} alt="mkr" />
                <h3>MakerDAO</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 10 delegate by total voting power.</p>
                <a
                  href="https://vote.makerdao.com/address/0x84b05b0a30b6ae620f393d1037f217e607ad1b96#delegate-credentials"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delegate MKR
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={aave} alt="aave" />
                <h3>Aave</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 10 delegate by total voting power.</p>
                <a
                  href="https://governance.aave.com/t/flipside-crypto-delegate-platform/9193?u=fig"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delegate AAVE
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={op} alt="op" />
                <h3>Optimism</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 20 delegate by total voting power.</p>
                <a
                  href="https://app.optimism.io/delegates?search=flipside"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delegate OP
                </a>
              </div>
            </div>
          </div>
          <div class="card2">
            <div class="face face1">
              <div class="content">
                <img src={hop} alt="hop" />
                <h3>Hop</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content2">
                <p>Flipside is a top 20 delegate by total voting power.</p>
                <a
                  href="https://www.tally.xyz/gov/hop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Delegate HOP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroller">
        <ScrollButton />
      </div>
    </div>
  );
}

export default Delegate;
