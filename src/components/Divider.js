import React from 'react';
import '../style/App.css';

function Divider(props) {
  let temp_class = "divider-line"
  if (props.value == 1) {
    temp_class ="divider-blank"
  }
    return (
      <div className={temp_class}></div>
    );
}
export default Divider;
