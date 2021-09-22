import React from 'react';
import '../style/App.css';
import profilbilde from '../assets/profil_jakob.JPG'

function ProfileBoks() {
  return(
    <div className="container">
      <div className="image">
      </div>
      <div className="intro-wrap">
        <div className="name-text">
          Jakob Follesø Egeland
        </div>
        <div className="paragraph-light-forside-mail">
          Design, bruk og interaksjon, Master, UiO
        </div>
        <a className="paragraph-light-forside-mail" href = "mailto: jakob.f.e@hotmail.no">Jakob.f.e@hotmail.no</a>
      </div>
    </div>
  );
}
export default ProfileBoks;
