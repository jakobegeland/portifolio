import React from 'react';

import InnholdBoks from '../components/InnholdBoks';
import ProfileBoks from '../components/ProfileBoks';
import Navfield from '../components/Navfield'

import In1060 from '../pages/projects/In1060';
import In2000 from '../pages/projects/In2000';
import In3010 from '../pages/projects/In3010';
import IfiNavet from '../pages/projects/IfiNavet';
import AjAj from '../pages/projects/AjAj';

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
