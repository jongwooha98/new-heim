import React from 'react';
import TeamMember from '../TeamMember';
import '../TeamMember.scss';

import jongwoo from '../../assets/jongwoo.png';
import hyunsub from '../../assets/hyunsub.jpeg';
import seokha from '../../assets/seokha.jpeg';

function Team() {
  return (
    <div className="team">
      <h1>Meet the Team</h1>
      <div className="team__container">
        <div className="team__members">
          <TeamMember picture={jongwoo} name="JongWoo Ha" title="CEO" />
          <TeamMember picture={hyunsub} name="HyunSub Lim" title="CEO" />
          <TeamMember picture={seokha} name="SeokHa Ryu" title="CEO" />
        </div>
      </div>
    </div>
  );
}

export default Team;
