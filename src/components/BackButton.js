import React from 'react';
import '../style/App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from 'react-router-dom';


function BackButton(props) {
  let history = useHistory();
  return(
    <div className="back_btn_left">
      <Link to="/">
      <div className="back_btn_icon"></div>
      </Link>
    </div>

  );
}

export default BackButton;
