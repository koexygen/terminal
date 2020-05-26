import React from 'react';
import './App.css';
import './Bulma.min.css';
import gio from './gio.jpg';


const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:

    "Hello 👋<br>I'm Gio. I’m a 25 years old software engineer currently living in Tbilisi, Georgia, resident of New York, USA. I have a burning passion to create/ build projects that benefits, innovates daily life of humanity. I enjoy my professional field, the limitless potential and impact it can have, It is what pushes me every day to become a better software developer. Outside of coding, one can find me Riding my motorcycle as a hobby, gaming, join different events and thinking. I am happy to be part of humanity today, in this day and age When, it is so interesting to broaden your horizons, in every way thus, better yourself and others just by doing what you love to do. <br>Just do it!",
  skills:
    '<span class="code">Languages:</span> C#, C++, SQL, Ruby, Lua, PHP, Python, HTML, CSS, JavaScript<br><span class="code">Technologies:</span> Git, SQL, Electron, Hybrid Development, LiteSpeed, Load Balancer, WebRTC, Sockets<br><span class="code">Frameworks:</span> React, Vue, Angular, Ruby on Rails, Express, Node <br><span class="code">Extra:</span> Wordpress/Development, Server Optimize, Apache, NgNix, LiteSpeed, Big O Notation, Perfomance Optimization, Load Balance, Cloud Configuration, VPS/Dedicated Management, CDN Integration with Dynamic Content, Aggresive Caching Static/Dynamic, Scripting',
  education:
    "Private School Olimpi, Tbilisi<br>University — Georgian Technical University<br>Academy/Bootcamp — <a href='https://appacademy.io' target='_blank' class='success link'>AppAcadeny.io</a> Full Stack Software Engineer<br>Online/Self Learning — Everything Everywhere",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "when i was 14 years old, my first experience was Built a Private Game server of 'World of Warcraft', then i felt in love with game scripting, creating addons and plugins for games for example word of warcraft addons, after 2 years experience of scripting i joined community BOL where i developed Script for Prediction that was named VPrediction, main purpose of VPrediction was to increase skills hitchance to maximum as possible, it was calculating enemy Path, checking collisions, calculating skills acceleration, speed, size and lot of math its hard to describe here. after year and half i have been hacked and whole my github has been deleted all my scripts, so i left BOL Community and went to L# Community i did same over there as in BOL same script. at the same time i joined eternal-wow.com and i was developinig their web backend and frontend and some custom in game script. <br> Later on i joined team ScriptSun where i meet Elin Doughouz and his brother Deen Doughouz, we was working on one of the best seller scripts on CodeCanyon scripts are. <a href='https://codecanyon.net/user/doughouzforest/portfolio' target='_blank' class='success link'>Web Portfolio</a> <a href='https://codecanyon.net/user/doughouzlight/portfolio' target='_blank' class='success link'>Mobile Portfolio</a> <br> i have released my own Scripting community as well named <a href='https://aio.plus' target='_blank' class='success link'>AIO.PLUS</a> <br> i was working in GEDF / Georgian Energy Development Fund, as Software Engineer, i have built and developed custom own Cloud platform, similar to Google Drive, i have forked it from open source. <br> at the moment im working on Project <a href='https://gradu.ge' target='_blank' class='success link'>GRADU</a> wich is inspired from LinkedIn, Udemy, Facebook. it is education platform & Social Community similar to Linked & Facebook.",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/gg.chomakhashvili' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/koexygen/' class='success link'>Instagram</a>, <a href='https://wa.me/995558888884' class='success link'>WhatsApp</a>, <a href='mailto:rexarkoexygen@gmail.com' class='success link'>Email</a>"
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

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
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

function clickze () {
  document.getElementById('dummyKeyboard').focus()
}



function App() {
  return (
    <div className="App">
      <div id='stars'/>
<div id='stars2'/>
<div id='stars3'/>
<div id='title'/>
      <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-3 is-flex">
                    <div className="column-child sidebar shadow">
                      <div className="sidebar-header has-text-centered">
                        <img
                      src={gio} alt="Avatar"
                          className="sidebar-image"/>
                          <h2 className="header-name">Gio Chomakhashvili</h2>
                          <h5>Software Engineer</h5>
                          <div className="social-icons">
                           <a href="https://www.facebook.com/gg.chomakhashvili"><i className="fab fa-facebook icon"/></a>
                            <a href="https://github.com/koexygen"><i className="fab fa-github icon"/></a>
                            <a href="https://www.instagram.com/koexygen/"><i className="fab fa-instagram icon"/></a>
                            <a href='https://wa.me/995558888884'><i className="fab fa-whatsapp icon"/></a>
                          </div>
                          <div className="resume">
                      <a href="https://gtmetrix.com/reports/gioc.info/OgPIboTE" className="sidebar-link" target='_blank'>
                              GT Metrix Score
                    </a>
                          </div>
                </div>
                      </div>
                    </div>
                    <div className="column is-flex">
                      <div className="column-child terminal shadow">
                        <div className="terminal-bar dark-mode">
                          <div className="icon-btn close"/>
                          <div className="icon-btn min"/>
                          <div className="icon-btn max"/>
                          <div className="terminal-bar-text is-hidden-mobile dark-mode-text">guest@gio: ~</div>
                        </div>
                        <div className="terminal-window primary-bg" onClick={clickze}>
                          <div className="terminal-output" id="terminalOutput">
                            <div className="terminal-line">
                              <span className="help-msg">Welcome to Gio's Terminal — Type <span className="code">help </span>
                        and hit "Enter" or "Return" for a list of supported commands.</span>
                            </div>
                          </div>
                          <div className="terminal-line" >
                            <span className="success">➜</span> <span className="directory">~</span> <span className="user-input " id="userInput"/>
                            <input type="text" id="dummyKeyboard" className="dummy-keyboard"/>
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
                      I Am Proud <i className="fas fa-heart icon"/> Georgian, Biker and Coder.
          </p>
                  </div>
                </footer>
    </section>
    </div>
  );
}

export default App;
