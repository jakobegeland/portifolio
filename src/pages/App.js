import React from 'react';
import Home from '../pages/Home';

//Prosjekt-sider
import In1060 from '../pages/projects/In1060';
import In2000 from '../pages/projects/In2000';
import In3010 from '../pages/projects/In3010';
import IfiNavet from '../pages/projects/IfiNavet';
import AjAj from '../pages/projects/AjAj';



//import Icon from './Icon';
import {BrowserRouter, Route, Switch, IndexRoute} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Home />
    </div>
  );
}

export default App;
