import React from 'react';
import '../style/App.css';

function Bildeboks(props) {
  const bilde = props.bilde;
    return (
      <div className="prosjekt-container-image">
        <img src={bilde} width="100%" height="auto" maxwidth="500px" />
      </div>
);

}


export default Bildeboks;
