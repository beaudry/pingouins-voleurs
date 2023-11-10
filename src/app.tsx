import './app.css';
import { ComponentChildren } from 'preact';
import autobus from './images/autobus.jfif';
import charrue from './images/charrue.jfif';
import canon from './images/canon.jfif';
import curling from './images/curling.jfif';
import pelle from './images/pelle.jfif';
import perceuse from './images/perceuse.jfif';
import tuque from './images/tuque.jfif';
import poele from './images/poele.jfif';
import patins from './images/patins.jfif';
import sac from './images/sac.jfif';
import truite from './images/truite.jfif';

type Outil = {
  apresUtilisation?: ComponentChildren,
  description?: ComponentChildren,
  momentUtilisation?: ComponentChildren,
  image?: string,
  nom: string,
};

const outils: Outil[] = [
  {
    nom: 'Patins à glace',
    momentUtilisation: "S'utilisent lors du déplacement",
    apresUtilisation: 'Défausser après utilisation',
    description: (
      <>
        Ces patins t'empêchent d'échapper ta boîte si tu atteris sur une
        {' '}
        <b>case glacée</b>
        .
      </>
    ),
    image: patins,
  },
  {
    nom: 'Pierre de curling',
    description: (
      <>
        Lance cette pierre vers un chemin. Le premier pingouin qu'elle rencontre
        {' '}
        <b>trébuche</b>
        .
      </>
    ),
    image: curling,
  },
  { nom: "Truite d'échange", image: truite },
  { nom: 'Autobus', image: autobus },
  { nom: 'Charrue', image: charrue },
  { nom: 'Peinture blanche' },
  { nom: 'Canon à neige', image: canon },
  { nom: 'Photo comprommetante' },
  { nom: 'Pelle', image: pelle },
  { nom: 'Perceuse à glace', image: perceuse },
  { nom: 'Tuque', image: tuque },
  { nom: 'Poêle à bois', image: poele },
  { nom: 'Sac à dos', image: sac },
  { nom: 'Brouette' },
  { nom: 'Carzy Carpet' },
  { nom: 'Poisson séché' },
  { nom: 'Carte au trésor' },
  { nom: 'Canne à pêche' },
  { nom: 'Planches de bois' },
  { nom: 'Gros bouchon de liège' },
  { nom: 'Boule de neige' },
];

function App() {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: '0.5em', flexWrap: 'wrap',
    }}
    >
      {outils.map((carte) => (
        <div className="carte">
          <h1>{carte.nom}</h1>
          <p><i>{carte.momentUtilisation}</i></p>
          <p>{carte.description}</p>
          <p><i>{carte.apresUtilisation}</i></p>
        </div>
      ))}
    </div>
  );
}

export default App;
