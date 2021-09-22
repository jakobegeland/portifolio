import React from 'react';
import Home from '../pages/Home';

//Prosjekt-sider
import In1060 from '../pages/projects/In1060';
import In2000 from '../pages/projects/In2000';
import In3010 from '../pages/projects/In3010';
import IfiNavet from '../pages/projects/IfiNavet';
import AjAj from '../pages/projects/AjAj';



//import Icon from './Icon';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={process.env.PUBLIC_URL + '/'} exact component={Home} />
          <Route path="/IN1060" component={In1060} />
          <Route path="/IN2000" component={In2000} />
          <Route path="/IN3010" component={In3010} />
          <Route path="/IfiNavet" component={IfiNavet} />
          <Route path='*' component={AjAj} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
