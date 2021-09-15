import React from 'react';

import InnholdBoks from '../components/InnholdBoks';
import ProfileBoks from '../components/ProfileBoks';
import Navfield from '../components/Navfield'

function Home(props) {
  return(
    <div className="full_container">
      <div className="section">
        <Navfield />
      </div>
      <div className="section">
        <ProfileBoks />
      </div>
      <div className="section">
        <InnholdBoks />
      </div>
    </div>
  );
}

export default Home;
