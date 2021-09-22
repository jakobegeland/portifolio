import React from 'react';
import '../style/App.css';

import Bildeboks from './Bildeboks';
import Tekstboks from './Tekstboks';



function Prosjekt(props) {


  return(

    <div className="prosjekt-container">
      <Bildeboks bilde={props.figur7} />
      <Tekstboks tittel={props.tittel} tekst={props.tekst} hashtag={props.hashtag} avsnitt={props.avsnitt} />
      </div>

  );
}

export default Prosjekt;
