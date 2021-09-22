import React from 'react';
import '../style/App.css';

import Bildeboks from './Bildeboks';
import Tekstboks from './Tekstboks';

import {useHistory} from 'react-router-dom';


function Prosjekt(props) {
  const history = useHistory();


  function clickHandler() {
    history.push(props.tittel);
  }

  return(
    <div className="prosjekt-container" onClick={clickHandler}>
      <Bildeboks bilde={props.figur7} />
      <Tekstboks tittel={props.tittel} tekst={props.tekst} hashtag={props.hashtag} avsnitt={props.avsnitt} />

    </div>
  );
}

export default Prosjekt;
