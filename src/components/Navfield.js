import React from 'react';
import '../style/App.css';

import Bildeboks from './Bildeboks';
import figur10 from "../assets/linked_in.svg";

function Navfield(props) {
  return(
    <div className="linked_in_right">
      <div className="linked_in_icon">
      <a href="https://no.linkedin.com/in/jakob-folles%C3%B8-egeland-882890184" target="_blank">
        <img className="linked_in_icon" src={figur10}/>
      </a>
      </div>
    </div>

  );
}

export default Navfield;
