import React from 'react';
import '../../App.scss';

import jongwoo from '../../assets/jongwoo.png';
import hyunsub from '../../assets/hyunsub.jpeg';
import seokha from '../../assets/seokha.jpeg';

function Team() {
  return (
    <div className="team__container container">
      <h2>MEET THE TEAM</h2>
      <div className="members row">
        <div className="member__card col-md-3">
          <div className="member__picture">
            <img
              src={jongwoo}
              alt="jongwoo-ha"
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="member__info">
            <h2 className="name">JONGWOO HA</h2>
            <p className="title">CEO</p>
          </div>
        </div>
        <div className="member__card col-md-3">
          <div className="member__picture">
            <img
              src={hyunsub}
              alt="hyunsub-lim"
              style={{ marginTop: '1.5rem' }}
            />
          </div>

          <div className="member__info">
            <h2 className="name">HYUNSUB LIM</h2>
            <p className="title">CEO</p>
          </div>
        </div>
        <div className="member__card col-md-3">
          <div className="member__picture">
            <img
              src={seokha}
              alt="seokha-ryu"
              style={{ marginTop: '1.2rem' }}
            />
          </div>

          <div className="member__info">
            <h2 className="name">SEOKHA RYU</h2>
            <p className="title">CEO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
