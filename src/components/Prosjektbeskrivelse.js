import React from 'react';
import '../style/App.css';

function Prosjekt(props) {

  return(
    <div className="prosjekt-container">
      <Bildeboks bilde={props.figur7} />
      <Tekstboks tittel={props.tittel} tekst={props.tekst} />

    </div>
  );
}

export default Prosjekt;
