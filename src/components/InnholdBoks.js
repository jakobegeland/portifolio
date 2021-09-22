import React from 'react';
import '../style/App.css';
import Prosjekt from './Prosjekt';

import in1060 from "../assets/trygghetsmaler-skisser-v2.png";
import ifinavet from  "../assets/Navet_figma.png";
import in3010 from "../assets/IN3010_figma.png";
import in2000 from "../assets/bergtatt_prototype.png";

import {Link} from 'react-router-dom';




function InnholdBoks() {
  const tekst = "Dette er en placeholder tekst som kan brukes for å vise hvordan teksten vil se ut og som vil fungere som et eksempel under skallering.";
  const in1060_tekst = "Yngre sjåfører er statistisk sett oftere innblandet i ulykker og andre farlige trafikksituasjoner. Vi ønsker å utforske kjøreadferden til denne aldersgruppen, samt hvordan de oppfører seg i trafikkbildet. ";
  const in1060_tekst_2 ="Målet vårt er å benytte denne dataen til å skape en løsning som kan bidra til å redusere risikoen for, samt skadevirkningene ved en trafikkulykke.";

  const in2000_tekst = "Applikasjonen “Bergtatt” er en turplanlegger som tilrettelegger for valg av trygge og gode turer basert på vær- og snøskredvarsel i fjellet.";
  const in2000_tekst_2 ="Løsningen er utviklet for Android-enheter og tilbyr blant annet en database med over 100 turer, karttjeneste med bratthet- og topografisk filter, regional skredvarsling, værvarsling på nærområder, visualisering av tur på kart, og mulighet til å lagre/fjerne favoritturer.";

  const in3010_tekst ="Hvordan kan vi hjelpe ME-syke med å få en bedre hverdag ved å gi en økt forståelse av egen situasjon og hjelpe til med å kommunisere dette videre til andre?";
  const in3010_tekst_2 ="Ved å utvikle en app som skal bli brukt for å loggføre over en lengre tidsperiode, og som skal hjelpe å gjøre det enklere for mennesker i alle aldre med bedre helse og økt livskvalitet. I tillegg til å hjelpe å kommunisere eget sykdomsbilde videre til leger, venner og familie.";

  const ifinavet_tekst ="Dette er et frivillig prosjekt som jeg har ved mitt verv som webansvarlig for Navet var ansvarlig for. Prosjektet var i samarbeid med Knowit som hadde ansvar for å utvikle selve nettsiden, mens vi som deltakere fungerte som en designer og stakeholder. Nettsiden ble bygget med CMS (Umbraco), og stylet ved hjelp av grafisk fremstilte skisser fra oss.";
  const ifinavet_tekst_2 ="Dette prosjektet har gitt nytte ettersom det la til rette for å sette konsepter og strategier vi har lært i løpet av vår Bachelor grad ut i praksis."

  return (
      <div className="bakgrunn_image">
        <div className="project-title">Prosjekter</div>
        <Link to="IN2000">
        <div className="innhold-container" id="In2000">
          <Prosjekt figur7={in2000} tittel="IN2000" tekst={in2000_tekst} avsnitt={in2000_tekst_2} hashtag="#Figma #Notion #Kotlin"/>
        </div>
        </Link>
        <Link to="IN3010">
        <div className="innhold-container" id="In3010">
          <Prosjekt figur7={in3010} tittel="IN3010" tekst={in3010_tekst} avsnitt={in3010_tekst_2} hashtag="#Figma #Miro #PD #RtD"/>
        </div>
        </Link>
        <Link to="IN1060">
        <div className="innhold-container" id="In1060">
          <Prosjekt figur7={in1060} tittel="IN1060" tekst={in1060_tekst} avsnitt={in1060_tekst_2} hashtag="#UCD #Blender #Arduino #3Dprinting"/>
        </div>
        </Link>
        <Link to="IfiNavet">
        <div className="innhold-container" id="IfiNavet">
          <Prosjekt figur7={ifinavet} tittel="IfiNavet" tekst={ifinavet_tekst} avsnitt={ifinavet_tekst_2} hashtag="#Figma #Jira #Slack"/>
        </div>
        </Link>
      </div>
  );
}

export default InnholdBoks;
