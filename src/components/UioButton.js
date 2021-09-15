import React from 'react';
import '../style/App.css';

function UioButton(props) {

  let def_tekst = "Les mer om prosjektet";

  if (props.tekst) {
    def_tekst = props.tekst;
  }
    return (
       <button className="knapp" onClick={()=> window.open(props.url, "_blank")}>{def_tekst}</button>
    );
}
export default UioButton;
