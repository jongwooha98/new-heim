import React from 'react';
import './TeamMember.scss';

function SocialMedia(props) {
  const { skill, icon, logoColor } = props;
  return (
    <>
      <div className={`${skill} skill`} style={{ backgroundColor: logoColor }}>
        <i className={icon} />
      </div>
    </>
  );
}

function TeamMember(props) {
  const { picture, name, title } = props;
  return (
    <div className="team__member">
      <div className="cards__item__link">
        <figure className="cards__item__pic-wrap">
          <img src={picture} alt="Member" className="cards__item__img" />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{name}</h5>
          <span>{title}</span>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;