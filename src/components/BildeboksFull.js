import React from 'react';
import '../style/App.css';

function BildeboksFull(props) {
  const bilde = props.bilde;
    return (
      <div className="prosjekt-image-full">
        <img src={bilde} height="auto" width="100%"/>
      </div>
);
}

export default BildeboksFull;
