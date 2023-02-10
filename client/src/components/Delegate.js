import React from "react";

import mkr from "../logos/mkrtoken.png";
import hop from "../logos/hoptoken.png";
import op from "../logos/optoken.png";
import aave from "../logos/aavetoken.png";

import { Fade, Slide } from "@mui/material";

function Delegate() {
  return (
    <div className="intro5">
      {/* <Slide direction="up" in={true} mountOnEnter style={{ transitionDelay: "100ms" }}> */}
      <div>
        <h1 className="bigletters">06: DELEGATE TO FLIPSIDE</h1>
        <div className="typewriter2">
          <p className="type2">
            Through active participation, we've developed key understandings
            around the needs and flow of information in the governance process.
            Our dedication to support and contribute in our partner communities
            allows us to improve outcomes for everyone, and we'd be honored to
            vote on your behalf.
          </p>
        </div>
      </div>
      {/* </Slide> */}
      {/* <Fade in={true} timeout={4000} style={{ transitionDelay: "100ms" }}> */}
      <div className="values">
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
                  className="hoverjawn"
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
                  className="hoverjawn"
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
                  className="hoverjawn"
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
                  className="hoverjawn"
                >
                  Delegate HOP
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Fade> */}
    </div>
  );
}

export default Delegate;
