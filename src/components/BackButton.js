import React from 'react';
import '../style/App.css';

import {Link} from 'react-router-dom';


function BackButton(props) {
  return(
    <div className="back_btn_left">
      <Link to="/">
      <div className="back_btn_icon"></div>
      </Link>
    </div>

  );
}

export default BackButton;
