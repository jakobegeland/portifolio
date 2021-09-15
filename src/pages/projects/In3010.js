import React from 'react';
import '../../style/App.css';

import Bildeboks from '../../components/Bildeboks';
import BildeboksFull from '../../components/BildeboksFull';
import Tekstboks from '../../components/Tekstboks';
import TekstboksFull from '../../components/TekstboksFull';
import Divider from '../../components/Divider';
import BackButton from '../../components/BackButton';
import UioButton from '../../components/UioButton';

import widePic from "../../assets/iris_header.png";
import in3010 from "../../assets/IN3010_figma.png";

function In3010(props) {
  const gruppeside = "https://www.uio.no/studier/emner/matnat/ifi/IN3010/v21/prosjekter/me/index.html";
  const tittel = "IN3010 - Transformativt design";
  const fAvsnitt = "I samarbeid med ME-foreningen utforsket vi mulighetene til ME-syke for at de kunne få mer kontroll over egen hverdag. Ønsket vårt var å designe en applikasjon som oppfyllte ME-sykes krav og behov gjennom loggføring av egen hverdag, men ogsp gjøre det enklere å bli kjent med egen sykdom og kropp. Å bli kjent med sin egne sykdom var spesielt viktig da symptomer, styrke og anstrengelse fra ulike aktiviteter ikke kunne generaliseres og var forskjellig fra person til person.";
  const aAvsnitt = "Utviklingen av prototyper har gått over en lengre prosjektperiode bestående av tre iterasjoner. I den første iterasjonen fokuserte vi på symtomsregistrering og måter å intragere med en applikasjon i tråd med prinsipper fra minimal interaction. Under iterasjon nummer to var fokuset å prototype og evaluere tre andre funksjonaliteter; Aktivitetsregistrering, Hvile og Oversikt. I siste og tredje iterasjon var fokuset å ferdigstille alle fire kjernefunksjonalitetene med wireframe og et felles utrykk med farger og knapper.";
  const tAvsnitt ="Etter den siste summative evalueringen ble det holdt et møte mellom ME-foreningen og prosjektgruppen. På dette møtet ble veien videre drøftet. Det var til stor glede at ME-foreningen hadde bestemt seg for å ta med prosjektet videre og skal søke om støtte for å kunne realisere applikasjonen. iris vil derfor, dersom alt går etter planen bli kommersialisert. Dette vil bygge videre på prototypen som vi har utformet gjennom prosjektet. Da vil fokuset være på å iterere både eksisterende funksjonalitet og undersøke videre muligheter som varsling, eksportering og innstillinger. Ved at ME-foreningen tar med seg applikasjonen videre, håper vi at den kan være med på å skape en positiv endring i hverdagen til ME-syke og kanskje andre mennesker som finner iris hjelpsom.";

  return(
    <div className="full_container">
      <BackButton />
      <div className="bakgrunn_image">
        <div className="project-title">{tittel}</div>
        <BildeboksFull bilde= {widePic} />
        <TekstboksFull tekst={fAvsnitt} tittel="Prosjektbeskrivelse:" />
        <Divider value="1" />
        <div className="prosjekt-container-simple">
          <Tekstboks tekst={aAvsnitt} tittel={tittel} hashtag="#Figma #RtD #PD"/>
          <Bildeboks bilde= {in3010}/>
        </div>
        <Divider value="1" />
        <TekstboksFull tekst={tAvsnitt} tittel="Hva satt vi igjen med?" />
        <UioButton url={gruppeside}/>
        <Divider value="1" />
      </div>
    </div>
  );
}

export default In3010;
