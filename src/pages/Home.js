import React from 'react';

import InnholdBoks from '../components/InnholdBoks';
import ProfileBoks from '../components/ProfileBoks';
import Navfield from '../components/Navfield'

import In1060 from '../pages/projects/In1060';
import In2000 from '../pages/projects/In2000';
import In3010 from '../pages/projects/In3010';
import IfiNavet from '../pages/projects/IfiNavet';
import AjAj from '../pages/projects/AjAj';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function Home(props) {
  return(
    <Router>
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
    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route path="/IN1060" component={In1060} />
      <Route path="/IN2000" component={In2000} />
      <Route path="/IN3010" component={In3010} />
      <Route path="/IfiNavet" component={IfiNavet} />
    </Switch>
    </Router>
  );

}

export default Home;
