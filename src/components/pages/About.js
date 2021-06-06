import React from 'react';
import '../../App.scss';

function About() {
  return (
    <>
      <div class="bgimg">
        <div class="topleft">
          <img src="image/new-heim-logo-main.png" alt="logo" class="logo"></img>
        </div>
        <div class="topright">
          <p>Menu</p>
        </div>
        <a href="main.html" class="link">
          <div class="middle">
            <p>New Heim</p>
            <hr />
            <p class="highlight">COMING SOON</p>
            <hr />
            <p>The Restaurant</p>
          </div>
        </a>
        <div class="bottom">
          <p id="countdown"></p>
        </div>
      </div>
    </>
  );
}

export default About;
