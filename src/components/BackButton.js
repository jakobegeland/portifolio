import React from 'react';
import '../style/App.css';

import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from 'react-router-dom';


function BackButton(props) {
  let history = useHistory();
  function clickHandler() {
    history.push(process.env.PUBLIC_URL + '/');
  }
  return(
    <div className="back_btn_left">
      <div className="back_btn_icon" onClick={clickHandler}></div>
    </div>

  );
}

export default BackButton;
