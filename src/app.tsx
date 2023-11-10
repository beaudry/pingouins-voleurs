import "./app.css";
import { ComponentChildren } from "preact";
import charrue from "./images/charrue.jfif";
import canon from "./images/canon.jfif";
import curling from "./images/curling.jfif";
import pelle from "./images/pelle.jfif";
import perceuse from "./images/perceuse.jfif";
import tuque from "./images/tuque.jfif";
import poele from "./images/poele.jfif";
import patins from "./images/patins.jfif";
import sac from "./images/sac.jfif";
import truite from "./images/truite.jfif";

const motsCles = {
  boite: "boîte",
  trebuche: "trébuche",
  trebucher: "trébucher",
};

type Outil = {
  apresUtilisation?: ComponentChildren,
  description?: ComponentChildren,
  momentUtilisation?: ComponentChildren,
  image?: string,
  nom: string,
};

const ressources = {
  apresUtilisations: {
    defausser: "Défausser après utilisation",
  },
  momentsUtilisations: {
    chezQuelquUnDAutre: (
      <>
        S'utilise
        {" "}
        <strong>chez quelqu'un d'autre</strong>
      </>
    ),
    nImporteQuand: (
      <>
        S'utilise
        {" "}
        <strong>n'importe quand</strong>
      </>
    ),
  },
};

const outils: Outil[] = [
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Ces patins t'empêchent d'échapper ta
        {" "}
        {motsCles.boite}
        {" "}
        si tu atteris sur une
        {" "}
        <strong>case glacée</strong>
        .
      </>
    ),
    image: patins,
    momentUtilisation: (
      <>
        S'utilisent
        {" "}
        <strong>lors</strong>
        {" "}
        du
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Patins à glace",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Lance cette pierre sur un chemin. Le
        {" "}
        <strong>premier</strong>
        {" "}
        pingouin qu'elle rencontre
        {" "}
        <strong>trébuche</strong>
        .
      </>
    ),
    image: curling,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Pierre de curling",
  },
  {
    apresUtilisation: (
      <>
        La personne
        {" "}
        <b>l'obtient</b>
      </>
    ),
    description: (
      <>
        Dépose-la
        {" "}
        <strong>chez quelqu'un</strong>
        {" "}
        et il va
        {" "}
        <strong>te laisser repartir</strong>
        {" "}
        avec la
        {" "}
        {motsCles.boite}
        {" "}
        de ton choix.
      </>
    ),
    image: truite,
    momentUtilisation: ressources.momentsUtilisations.chezQuelquUnDAutre,
    nom: "Truite d'échange",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Cet orque te catapulte jusqu'à
        {" "}
        <strong>chez toi</strong>
        .
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Orque",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Fais
        {" "}
        <strong>{motsCles.trebucher}</strong>
        {" "}
        tous les joueurs que tu rencontres lors de ce
        {" "}
        <strong>déplacement</strong>
        .
      </>
    ),
    image: charrue,
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>avant</strong>
        {" "}
        le
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Charrue",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Utilise cette peinture pour te camoufler. Un pingouin
        {" "}
        <strong>ne verra pas</strong>
        {" "}
        que tu es chez lui.
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.chezQuelquUnDAutre,
    nom: "Peinture blanche",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Tire sur l'igloo de quelqu'un. Il
        {" "}
        <strong>perd</strong>
        {" "}
        la
        {" "}
        {motsCles.boite}
        {" "}
        <strong>de son choix</strong>
        .
      </>
    ),
    image: canon,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Canon à neige",
  },
  {
    nom: "Photo comprommetante",
  },
  { image: pelle, nom: "Pelle" },
  { image: perceuse, nom: "Perceuse à glace" },
  { image: tuque, nom: "Tuque" },
  { image: poele, nom: "Poêle à bois" },
  { image: sac, nom: "Sac à dos" },
  { nom: "Brouette" },
  { nom: "Carzy Carpet" },
  { nom: "Poisson séché" },
  { nom: "Carte au trésor" },
  { nom: "Canne à pêche" },
  { nom: "Planches de bois" },
  { nom: "Gros bouchon de liège" },
  { nom: "Boule de neige" },
];

function App() {
  return (
    <div style={{
      alignItems: "flex-start", display: "flex", flexWrap: "wrap", gap: "0.5em",
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
