import React from 'react';
import Home from '../pages/Home';

//Prosjekt-sider
import In1060 from '../pages/projects/In1060';
import In2000 from '../pages/projects/In2000';
import In3010 from '../pages/projects/In3010';
import IfiNavet from '../pages/projects/IfiNavet';
import AjAj from '../pages/projects/AjAj';



//import Icon from './Icon';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename="/React">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/IN1060">
            <In1060 />
          </Route>
          <Route path="/IN2000">
            <In2000 />
          </Route>
          <Route path="/IN3010">
            <In3010 />
          </Route>
          <Route path="/IfiNavet">
            <IfiNavet />
          </Route>
          <Route path='*'>
            <AjAj />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
