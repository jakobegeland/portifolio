import React, {useState} from 'react';
import '../style/App.css';

import Bildeboks from './Bildeboks';
import Tekstboks from './Tekstboks';

import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from 'react-router-dom';


function Prosjekt(props) {
  const history = useHistory();
  const [bgColour, setBgColour] = useState("#fafafa");

  function clickHandler() {
    history.push(props.tittel);
  }

  function mouseHoover() {
    console.log('hoover ' + props.tittel);
  }


  return(
    <div className="prosjekt-container" onClick={clickHandler}>
      <Bildeboks bilde={props.figur7} />
      <Tekstboks tittel={props.tittel} tekst={props.tekst} hashtag={props.hashtag} avsnitt={props.avsnitt} />

    </div>
  );
}

export default Prosjekt;
