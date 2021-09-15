import React from 'react';
import '../../style/App.css';


import Bildeboks from '../../components/Bildeboks';
import BildeboksFull from '../../components/BildeboksFull';
import Tekstboks from '../../components/Tekstboks';
import TekstboksFull from '../../components/TekstboksFull';
import Divider from '../../components/Divider';
import BackButton from '../../components/BackButton';

import figur7 from "../../assets/bergtatt_logo_firkant.png";
import widePic from "../../assets/bergtatt_header.png";

function In2000(props) {
  const tittel = "IN2000 - Software Engineering";
  const fAvsnitt = "I dette kurset var målet å lage en applikasjon ved bruk av data fra meteorologisk institutt gjennom deres API. Vi var en gruppe på seks studenter, og valgte caset «Ras-, flo-, og flomvarsling». Med den avgrensede tidsperioden for å utvikle denne appen, valgte vi å spisse oss inn på ras. Ved bruk av den tilgjengelige dataen lagde vi en snøskredvarsler.";
  const aAvsnitt = "En generell interesse for ski og brettkjøring innad i gruppen, ønsket vi å lage en app som la til rette for god og trygg ferdsel i utsatte områder. Min rolle i dette prosjektet var å, sammen med noen andre, lede den grafiske utviklingen av applikasjonen. Dette innebar at jeg jobbet mye med prototyper i Figma, undersøkte funksjonalitet og implementerte funksjonene i den endelige applikasjonen. Det jeg sitter igjen med etter dette prosjektet er en mengdekunnskap med designvektøyet Figma, forståelsen med Front-end utbikling og å jobbe smidig med et sammensatt team.";
  const tAvsnitt ="Gjennom prosjektet benyttet vi Scrum som smidig utviklingsmetodikk, da vi så dette mest hensiktsmessig med tanke på tiden vi hadde. Vi ble dog nødt til å endre sprintene til å tilpasse vårt prosjekt, og de varte derfor i en uke av gangen. Dette er noe kortere enn en ordinær sprint, men vi så det hensiktsmessig å gjøre det på denne måten for å holde et noe hyppigere leveringstempo. Appen ble laget for Android, ved bruk av verktøyet Android Studio, og Kotlin som programmeringsspråk. Applikasjonen ble også nominert til «årets beste app», i kurset IN2000 våren 2020.";
  const fjAvsitt = "Prosjektperioden i IN2000 har vært intens og krevende, men mest av alt utrolig lærerikt. På rundt tre måneder  har vi gjennomført en utviklingsprosess fra start til slutt, der arbeidet har resultert i en applikasjon vi er stolte av. I dette kapittelet vil vi ta for oss noen av de viktigste erfaringene vi sitter igjen med på slutten av dette prosjektet, men også hva vi kanskje ville gjort annerledes dersom vi skulle gjennomført prosjektet på nytt.";


  return(
    <div className="full_container">
      <BackButton />
      <div className="bakgrunn_image">
        <div className="project-title">{tittel}</div>
        <BildeboksFull bilde= {widePic} />
        <TekstboksFull tekst={fAvsnitt} tittel="Prosjektbeskrivelse:" />
        <TekstboksFull tekst={aAvsnitt}/>
        <Divider value="1" />
        <div className="prosjekt-container-simple">
          <Tekstboks tekst={tAvsnitt} tittel={tittel}/>
          <Bildeboks bilde= {figur7}/>
        </div>
        <TekstboksFull tekst={fjAvsitt} />
        <Divider value="1" />
      </div>
    </div>
  );
}

export default In2000;
