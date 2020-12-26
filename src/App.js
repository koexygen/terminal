import React from "react";
import "./App.css";
import "./Bulma.min.css";
import gio from "./gio.jpg";
import LinkedIn from "./svg/linkedin.svg";
import Facebook from "./svg/facebook.svg";
import Github from "./svg/github.svg";
import Instagram from "./svg/instagram.svg";
import WhatsApp from "./svg/whatsapp.svg";
import Gmail from "./svg/gmail.svg";
import Heart from "./svg/heart.svg";

const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">portfolio</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span> , <span class="code">resume</span>',
  about:
    "Hello 👋<br>I'm Gio. I’m a 25 years old software engineer currently living in Tbilisi, Georgia, resident of New York, USA. I have a burning passion to create/ build projects that benefits, innovates daily life of humanity. I enjoy my professional field, the limitless potential and impact it can have, It is what pushes me every day to become a better software developer. Outside of coding, one can find me Riding my motorcycle as a hobby, gaming, join different events and thinking. I am happy to be part of humanity today, in this day and age When, it is so interesting to broaden your horizons, in every way thus, better yourself and others just by doing what you love to do. <br>Just do it!",
  skills:
    '<span class="code">Languages:</span> SQL, Ruby, Lua, HTML, CSS, JavaScript, Python<br>' +
    '<span class="code">Databases:</span> PostgreSQL, MongoDB, MySQL<br>' +
    '<span class="code">Frameworks/Libs:</span> NodeJS, React, Redux, GraphQL, Ruby on Rails, Express, SASS, SCSS, Pug, Jade, EJS, jQuery<br>' +
    '<span class="code">Technologies:</span> Git, Electron, Responsive, Hybrid Development, LiteSpeed, Load Balancer, WebRTC, Sockets<br>' +
    '<span class="code">Extra:</span> Data structures & algorithms, Wordpress/Development, Server Optimize, Apache, NgNix, LiteSpeed, Big O Notation, Performance Optimization, Load Balance, Cloud Configuration, VPS/Dedicated Management, CDN Integration with Dynamic Content, Aggressive Caching Static/Dynamic, Scripting',
  education:
    "Private School Olimpi, Tbilisi<br>University — Georgian Technical University<br>Academy/Bootcamp — <a href='https://appacademy.io' target='_blank' class='success link'>AppAcadeny.io</a> Full Stack Software Engineer<br>Online/Self Learning — Everything Everywhere",
  resume:
    "<a href='./resume.pdf'  download class='success link'>Click here for download Gio's Resume</a>",
  portfolio:
    " <a href='https://nextflix-g.herokuapp.com/' target='_blank' class='success link'>Nextflix</a> - A Netflix-inspired full stack, single-page web application where users can browse and watch movies. <br>" +
    " <a href='https://koexygen.github.io/what-to-watch-d3/' target='_blank' class='success link'>WTW</a> - What to watch is a single page application that helps you quickly find movie & tv series for watch. <br>" +
    " <a href='https://dry-mountain-84171.herokuapp.com/#/' target='_blank' class='success link'>CGDb</a> - experiential horror website <br>" +
    " <a href='https://koexygen.github.io/kazbegi/' target='_blank' class='success link'>KAZBEGI</a> - built a fully responsive html and css website which adapts different devices and resolutions. <br>",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/gio-chomakhashvili-a739911b9/' target='_blank' class='success link'>LinkedIn</a>, <a target='_blank' href='https://www.facebook.com/thekoexygen' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/koexygen/' class='success link' target='_blank'>Instagram</a>, <a target='_blank' href='https://wa.me/995558888884' class='success link'>WhatsApp</a>, <a target='_blank' href='mailto:ggiosweb@gmail.com' class='success link'>Email</a>",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

function clickze() {
  document.getElementById("dummyKeyboard").focus();
}

function App() {
  return (
    <div className="App">
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <div id="title" />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-3 is-flex">
                <div className="column-child sidebar shadow">
                  <div className="sidebar-header has-text-centered">
                    <img src={gio} alt="Avatar" className="sidebar-image" />
                    <h2 className="header-name">Gio Chomakhashvili</h2>
                    <h5>Software Engineer</h5>
                    <div className="social-icons">
                      <a
                        href="https://www.linkedin.com/in/gio-chomakhashvili-a739911b9/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={LinkedIn}
                          alt="linkedin"
                          className="contact-icon"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/thekoexygen/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={Facebook}
                          alt="Facebook"
                          className="contact-icon"
                        />
                      </a>
                      <a
                        href="https://github.com/koexygen"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={Github}
                          alt="Github"
                          className="contact-icon"
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/koexygen/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={Instagram}
                          alt="Instagram"
                          className="contact-icon"
                        />
                      </a>
                      <a
                        href="https://wa.me/995558888884"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={WhatsApp}
                          alt="WhatsApp"
                          className="contact-icon"
                        />
                      </a>
                      <a
                        href="mailto:ggiosweb@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={Gmail} alt="Gmail" className="contact-icon" />{" "}
                      </a>
                    </div>
                    <div className="resume">
                      <a
                        href="./Resume.pdf"
                        download
                        className="sidebar-link"
                        target="_blank"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-flex">
                <div className="column-child terminal shadow">
                  <div className="terminal-bar dark-mode">
                    <div className="icon-btn close" />
                    <div className="icon-btn min" />
                    <div className="icon-btn max" />
                    <div className="terminal-bar-text is-hidden-mobile dark-mode-text">
                      guest@gio: ~
                    </div>
                  </div>
                  <div className="terminal-window primary-bg" onClick={clickze}>
                    <div className="terminal-output" id="terminalOutput">
                      <div className="terminal-line">
                        <span className="help-msg">
                          Welcome to Gio's Terminal — Type{" "}
                          <span className="code">help </span>
                          and hit "Enter" or "Return" for a list of supported
                          commands.
                        </span>
                      </div>
                    </div>
                    <div className="terminal-line">
                      <span className="success">➜</span>{" "}
                      <span className="directory">~</span>
                      <span className="user-input" id="userInput" />
                      <input
                        autoFocus
                        type="text"
                        id="dummyKeyboard"
                        className="dummy-keyboard"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              I Am Proud
              <img src={Heart} alt="Heart" className="contact-icon" /> Coder,
              Georgian and Biker.
            </p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
