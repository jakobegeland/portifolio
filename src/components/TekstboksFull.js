import React from 'react';
import '../style/App.css';

function TekstboksFull(props) {

  return(
    <div className ="prosjekt-tekstboks-full">
      <div className="tekst-tittel">{props.tittel}</div>
      <div className="tekst-avsnitt">{props.tekst}</div>

    </div>
  );

}

export default TekstboksFull;
