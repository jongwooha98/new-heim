import React from 'react';
import '../../App.scss';
import { Button } from '../Button';

function Home() {
  return (
    <div className="home__container container-fluid">
      <div className="home__contents">
        <h1>New Heim</h1>
        <p>Food is our common ground, a universial experience</p>
        <div className="home__btns">
          <Button
            linkTo="/about"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            EXPLORE
          </Button>
          <Button
            linkTo="/contact"
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
          >
            CONTACT
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
