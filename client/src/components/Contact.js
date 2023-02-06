import React from "react";
import Footer from "./Footer";
import fsgwhite2 from "../logos/fsgwhite2.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faAnglesUp } from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faMedium,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="values">
      <div className="typewriter2">
        <p className="type2">
          Want to get in touch? Drop us a note below! We'd be happy to chat with
          you about the future of decentralized organizations.
        </p>
      </div>
      <h1 id="ct">CONTACT US</h1>{" "}
      <div className="contact-main">
        <div className="contact-logo">
          <img src={fsgwhite2} className="ct-logo" />
          <div className="socials-ct">
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
        </div>
        <div className="contact-form">
          <form>
            <input
              name="name"
              type="text"
              class="feedback-input"
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              class="feedback-input"
              placeholder="Email"
            />
            <textarea
              name="text"
              class="feedback-input"
              placeholder="Message"
            ></textarea>
            <input type="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
