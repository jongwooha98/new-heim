import React from 'react';
import '../../App.scss';
import { Button } from '../Button';

function Home() {
  return (
    <div className="home__container container-fluid">
      <h1>NEW HEIM</h1>
      <p>LEADING THE NEW WAVE OF C</p>
      <div className="home__btns">
        <Button
          linkTo="/contact"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--medium"
        >
          CONTACT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
}

export default Home;
