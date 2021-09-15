import React from 'react';
import '../../style/App.css';


import Bildeboks from '../../components/Bildeboks';
import BildeboksFull from '../../components/BildeboksFull';
import Tekstboks from '../../components/Tekstboks';
import TekstboksFull from '../../components/TekstboksFull';
import Divider from '../../components/Divider';
import BackButton from '../../components/BackButton';
import UioButton from '../../components/UioButton';

import figur7 from "../../assets/Navet_figma.png";
import widePic from "../../assets/ifiNavet_header_thin.png";

function IfiNavet(props) {
  const nettside ="https://ifinavet.no/";
  const tittel = "IFI Navet - Webprosjekt";
  const fAvsnitt = "I peridoden juni 2020 - desember 2020 startet, utviklet og fullførte vi et nettsideprosjekt for Ifi Navet, bedriftskontakten for institutt for informatikk. Min rolle i denne perioden var webansvarlig i Navet, og jeg hadde hovedansvar for utviklingen av den nye nettsiden. Denne jobben bar på mange utfordringer, men var også veldig givende i den forstand at jeg fikk ta mye eierskap fra start til slutt. En av mine største oppgaver var å utforme det nye designet til nettsiden, og dette ble gjort ved å se på hva vi hadde den dag idag, sammenlignet det med tilbakemeldinger fra studenter og tidligere foreningsaktive personer.";
  const aAvsnitt = "Vi benyttet Figma som primær design plattform for å hjelpe oss å evaluere designet, men også kunne hjelpe oss å forklare utviklerene vi samarbeidet med fra Knowit, om hva de skulle lage.";
  const linje ="Selve kommunikasjonen mellom utviklere foregikk på Slack og Jira. Vi utvekslet kjappe oppklrende spørsmål over vår interne Slack-kanal, og lagde Kanban-tickets ved større oppgaver og ny funksjonalitet. På denne måten holdt vi god oversikt over fremgangen og status på prosjektet. ";
  const tAvsnitt = "Jeg har også hatt en sentral rolle innenfor de grafiske valgene om utformingen og designet av nettsiden. Vårt fokus har vært å skape et lett, robust, men igjen lekent utrykk hvor funksjonalitet for brukeren er i fokus. Men det har også vært viktig for oss at foreningsaktive som kommer etter oss møter en nettside hvor det er store muligheter for å videreutvikle ved behov. Gjennom dette prosjektet har jeg benyttet mye av tankegangen fra studiet jeg går, og det har vært spennende å sette teori i praksis. Nettsiden er bygget med Umbraco (CMS) og designet ved hjelp av Figma.";


  return(
    <div className="full_container">
      <BackButton />
      <div className="bakgrunn_image">
        <div className="project-title">{tittel}</div>
        <BildeboksFull bilde= {widePic} />
        <TekstboksFull tekst={fAvsnitt} tittel="Prosjektbeskrivelse:" />
        <Divider value="1"/>
        <div className="prosjekt-container-simple">
          <Tekstboks avsnitt={linje} tekst={aAvsnitt} tittel="Verktøy" hashtag="#Figma, #Jira, #Slack"/>
          <Bildeboks bilde= {figur7}/>
        </div>
        <TekstboksFull tekst={tAvsnitt}/>
        <UioButton url={nettside} tekst="Se nettside"/>
        <Divider value="1" />
      </div>
    </div>
  );
}

export default IfiNavet;
