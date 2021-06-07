import React from 'react';
import '../../App.scss';

import jongwoo from '../../assets/jongwoo.png';
import hyunsub from '../../assets/hyunsub.jpeg';
import seokha from '../../assets/seokha.jpeg';

function SocialMedia(props) {
  const { name, icon, href, logoColor } = props;
  return (
    <li>
      <div className={`${name}`} style={{ backgroundColor: logoColor }}>
        <a
          className={`social-media__link ${name}`}
          href={href}
          rel="noreferrer"
          target="_blank"
          // aria-label="LinkedIn"
        >
          <i className={icon} />
        </a>
      </div>
    </li>
  );
}

function TeamMember(props) {
  const { picture, name, title } = props;
  return (
    <div className="member__card col-md-4">
      <div className="member__img-holder">
        <img src={picture} alt="Member" className="member__img" />
      </div>
      <div className="member__info">
        <h5 className="member__name">{name}</h5>
        <span className="member__title">{title}</span>
        <ul>
          <SocialMedia name="linkedin" icon="fab fa-linkedin" />
        </ul>
      </div>
    </div>
  );
}

function Teamas() {
  return (
    <div className="team-section container-fluid">
      <h1>Meet the Team</h1>
      <div className="member__container row">
        <TeamMember
          picture=""
          name="JongWoo Ha"
          title="CEO"
          linkedinHref="https://www.linkedin.com/in/jongwooha"
        />
        <TeamMember picture="" name="HyunSub Lim" title="CEO" />
        <TeamMember picture="" name="SeokHa Ryu" title="CEO" />
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="team__container container">
      <h1>MEET THE TEAM</h1>
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
