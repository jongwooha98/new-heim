import React from 'react';
import '../../App.scss';

import jongwoo from '../../assets/jongwoo.png';
import hyunsub from '../../assets/hyunsub.jpeg';
import seokha from '../../assets/seokha.jpeg';

function SocialMedia(props) {
  const { skill, icon, logoColor } = props;
  return (
    <>
      <li>
        <div
          className={`${skill} skill`}
          style={{ backgroundColor: logoColor }}
        >
          <a
            className="social-icon-link linkedin"
            href="https://www.linkedin.com/in/jongwooha"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </li>
    </>
  );
}

function TeamMember(props) {
  const { picture, name, title } = props;
  return (
    <div className="member">
      <div className="member__picture">
        <img src={picture} alt="Member" className="cards__item__img" />
      </div>
      <div className="cards__item__info">
        <h5 className="cards__item__text">{name}</h5>
        <span>{title}</span>
        <div>
          <SocialMedia icon="fab fa-instagram" logoColor="#fff" />
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="team-section">
      <h1>Meet the Team</h1>
      <div className="member__container">
        <TeamMember picture={jongwoo} name="JongWoo Ha" title="CEO" />
        <TeamMember picture={hyunsub} name="HyunSub Lim" title="CEO" />
        <TeamMember picture={seokha} name="SeokHa Ryu" title="CEO" />
      </div>
    </div>
  );
}

export default Team;
