import React from 'react';
import '../style/App.css';

function Tekstboks(props) {

  return(
    <div className ="prosjekt-container-tekstboks">
      <div className="tekst-tittel">{props.tittel}</div>
      <div className="tekst-hashtag">{props.hashtag}</div>
      <div className="tekst-avsnitt">{props.tekst}</div>
      <div className="tekst-avsnitt">{props.avsnitt}</div>
    </div>
  );
}

export default Tekstboks;
