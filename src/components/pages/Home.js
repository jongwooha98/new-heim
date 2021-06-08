import React from 'react';
import '../../App.scss';
import { Button } from '../Button';

function Home() {
  return (
    <div className="home__container container-fluid">
      <h1>NEW HEIM</h1>
      <p>나가자 세계로 아자아자</p>
      <div className="hero-btns">
        <Button
          linkTo="/contact"
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          CONTACT
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
}

export default Home;
