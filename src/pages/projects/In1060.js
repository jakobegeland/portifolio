import React from 'react';
import '../../style/App.css';


import Bildeboks from '../../components/Bildeboks';
import BildeboksFull from '../../components/BildeboksFull';
import Tekstboks from '../../components/Tekstboks';
import TekstboksFull from '../../components/TekstboksFull';
import Divider from '../../components/Divider';
import BackButton from '../../components/BackButton';
import UioButton from '../../components/UioButton';

import figur7 from "../../assets/Rectangle7.png";
import widePic from "../../assets/Rectangle16.png";
import indigo_header from "../../assets/indigo_headerv2.png";
import indigo_hi from "../../assets/indigo_iterasjon.png";

function In1060(props) {
  const gruppeside = "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v19/prosjekt-2019/indigo/";
  const tittel = "IN1060 - Bruksorientert design";
  const fAvsnitt = "Indigo er navnet på gruppen som prøvde å løse problemstillingen «Hvordan motivere unge sjåfører til å følge sikkerhetstiltak som øker passiv sikkerhet under kjøring». Målet vårt var å utforske kjøreatferden til yngre sjåfører og benytte denne dataen til å skape en løsning som kan bidra til å redusere risikoen og skadevirkningene ved en trafikkulykke. Denne løsningen ble en høyoppløselig prototype kodet med Arduino. Jeg hadde en gjennomgående rolle i hele prosjektet, hvor jeg var inkludert i alle faser.";
  const aAvsnitt = "Gjennom hele prosjektet jobbet vi i iterasjoner hvor målet alltid var å tilfredsstille brukerens behov, derfor er alle designvalg også gjort på bakgrunn av det brukerne selv mente. Etter den innledende datainnsamlingen fant vi ut at brukerne selv hadde et behov for trygghet, som ble en fellesnevner vi gikk videre med. Vi startet prototypingen. Det ble imidlertid en diskusjon om det brukeren ønsket faktisk var deres behov. Gjennom videre datainnsamling i form av intervjuer og fokusgruppe klarte vi å kartlegge forskjellen på hva brukeren ønsket og hva de trengte for å få en mer sikker kjøreopplevelse.";
  const tAvsnitt ="Gjennom prosjektet har vi forsøkt å finne en måte å motivere unge sjåfører til å ta nytte av passive sikkerhetstiltak som trygger sjåføren ved uhell. Det har vært utfordrende å ha bil som arbeidsområde, da alle biler er forskjellige og bilene vi hadde tilgang på ofte var utilgjengelige. Dette førte til flere testinger utenfor bilen, som vi i ettertid så at burde vært gjort i bilen.";
  const fjAvsnitt ="Læringsutbyttet fra prosjektet har vært stort, og det er lett å være etterpåklok. Dette har vi ønsket å vise frem fortløpende i rapporten. Prosjektet har lært oss viktigheten av å kontrollere hvilke spørsmål som stilles, da feil spørsmål kan påvirke hele prosessen. Vi har erfart hvor vanskelig det kan være å forkaste egne ideer og hvor vanskelig det kan være å planlegge et prosjekt fra start til slutt. Hadde vi hatt lenger tid på prosjektet ville vi tilstrebet en trådløs løsning. Nåværende prototype er kablet, noe som fungerer greit, men ikke optimalt.";

  return(
    <div className="full_container">
      <BackButton />
      <div className="bakgrunn_image">
        <div className="project-title">{tittel}
        </div>
        <BildeboksFull bilde= {indigo_header} />
        <TekstboksFull tekst={fAvsnitt} tittel="Prosjektbeskrivelse:" />
        <Divider value="1" />
        <div className="prosjekt-container-simple">
          <Tekstboks tekst={aAvsnitt} tittel={tittel}/>
          <Bildeboks bilde= {indigo_hi}/>
        </div>
        <TekstboksFull tekst={tAvsnitt} tittel="Lærdom og konklusjon:" />
        <TekstboksFull tekst={fjAvsnitt} />
        <UioButton url={gruppeside}/>
        <Divider value="1" />
      </div>
    </div>
  );
}

export default In1060;
