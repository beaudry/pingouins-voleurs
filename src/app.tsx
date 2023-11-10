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
  tombe: "tombe",
  tomber: "tomber",
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
    inventaireProprietaire: (
      <>
        Placer dans
        {" "}
        <strong>l'inventaire</strong>
        {" "}
        du propriétaire
      </>
    ),
  },
  momentsUtilisations: {
    apresDeplacement: (
      <>
        S'utilise
        {" "}
        <strong>avant</strong>
        {" "}
        un
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    iglea: (
      <>
        S'utilise chez
        {" "}
        <strong>Iglea</strong>
      </>
    ),
    igloo: (
      <>
        S'utilise dans un
        {" "}
        <strong>igloo</strong>
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
        si tu
        {" "}
        <strong>atteris</strong>
        {" "}
        sur une
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
        d'un
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
        Lance cette pierre sur
        {" "}
        <strong>un chemin</strong>
        . Le
        {" "}
        <strong>premier</strong>
        {" "}
        pingouin qu'elle frappe
        {" "}
        <strong>{motsCles.tombe}</strong>
        .
      </>
    ),
    image: curling,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Pierre de curling",
  },
  {
    apresUtilisation: ressources.apresUtilisations.inventaireProprietaire,
    description: (
      <>
        Dépose-la
        {" "}
        <strong>chez un pingouin</strong>
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
    momentUtilisation: ressources.momentsUtilisations.igloo,
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
        <strong>{motsCles.tomber}</strong>
        {" "}
        tous les pingouins que tu rencontres lors de ce
        {" "}
        <strong>déplacement</strong>
        .
      </>
    ),
    image: charrue,
    momentUtilisation: ressources.momentsUtilisations.apresDeplacement,
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
    momentUtilisation: ressources.momentsUtilisations.igloo,
    nom: "Peinture blanche",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Tire sur l'igloo d'un pingouin. Il
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
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Le vendeur te laisse
        {" "}
        <strong>regarder</strong>
        {" "}
        dans les
        {" "}
        <strong>deux premières</strong>
        {" "}
        {motsCles.boite}
        s et de choisir laquelle prendre.
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.iglea,
    nom: "Photo comprommettante",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Permet de
        {" "}
        <strong>laisser</strong>
        {" "}
        ce que tu
        {" "}
        <strong>transportes</strong>
        {" "}
        sur ta case.
      </>
    ),
    image: pelle,
    momentUtilisation: ressources.momentsUtilisations.apresDeplacement,
    nom: "Pelle",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Transforme la case sur laquelle tu te tiens en
        {" "}
        <strong>trou</strong>
        . Tu rentres dedans.
      </>
    ),
    image: perceuse,
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>avant</strong>
        {" "}
        ou
        {" "}
        <strong>après</strong>
        {" "}
        un
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Perceuse à glace",

  },
  {
    apresUtilisation: (
      <>
        Garder dans ton
        {" "}
        <strong>inventaire</strong>
      </>
    ),
    description: (
      <>
        Cette tuque est
        {" "}
        <strong>très jolie</strong>
        .
      </>
    ),
    image: tuque,
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>immédiatement</strong>
      </>
    ),
    nom: "Tuque",
  },
  {
    apresUtilisation: ressources.apresUtilisations.inventaireProprietaire,
    description: (
      <>
        Ce poêle fait fondre une boîte par
        {" "}
        <strong>ronde</strong>
        . Un pingouin doit venir l'éteindre.
      </>
    ),
    image: poele,
    momentUtilisation: ressources.momentsUtilisations.igloo,
    nom: "Poêle à bois",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Permet de transporter une
        {" "}
        {motsCles.boite}
        {" "}
        supplémentaire.
      </>
    ),
    image: sac,
    momentUtilisation: (
      <>
        S'utilise chez
        {" "}
        <strong>Iglea</strong>
      </>
    ),
    nom: "Sac à dos",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Si un pingouin se trouve sur
        {" "}
        <strong>ta case</strong>
        , tu peux le déplacer avec toi lors de ton tour.
      </>
    ),
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>avant</strong>
        {" "}
        un
        {" "}
        <strong>déplacement</strong>
      </>
    ),
    nom: "Brouette",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Glisse
        {" "}
        <strong>jusqu'au bout</strong>
        {" "}
        d'un chemin.
      </>
    ),
    momentUtilisation: (
      <>
        <strong>Remplace</strong>
        {" "}
        un lancer de dé
      </>
    ),
    nom: "Carzy Carpet",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Attire le pingouin
        {" "}
        <strong>le plus proche</strong>
        . Il avancera
        {" "}
        <strong>vers toi</strong>
        {" "}
        à son tour.
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Calmar délicieux",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: <>Dévoile une case de ton choix.</>,
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Carte au trésor",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Vole un
        {" "}
        <strong>outil</strong>
        {" "}
        dans
        {" "}
        <strong>l'inventaire</strong>
        {" "}
        du pingouin de
        {" "}
        <strong>ton choix</strong>
        .
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Canne à pêche",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Empêchent les pingouins
        {" "}
        <strong>d'entrer</strong>
        {" "}
        ou de
        {" "}
        <strong>sortir</strong>
        {" "}
        de l'igloo jusqu'à
        {" "}
        <strong>ton prochain tour</strong>
        .
      </>
    ),
    momentUtilisation: (
      <>
        S'utilise
        {" "}
        <strong>à la porte</strong>
        {" "}
        ou dans un
        {" "}
        <strong>igloo</strong>
      </>),
    nom: "Planches de bois",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Permet de
        {" "}
        <strong>boucher un trou</strong>
        {" "}
        de façon permanente.
      </>
    ),
    momentUtilisation: (
      <>
        S'utilise sur une
        {" "}
        <strong>case trou</strong>
      </>
    ),
    nom: "Gros bouchon de liège",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Fais
        {" "}
        {motsCles.tomber}
        {" "}
        un pingouin qui
        {" "}
        <strong>transporte</strong>
        {" "}
        une
        {" "}
        {motsCles.boite}
        . La
        {" "}
        {motsCles.boite}
        {" "}
        reste sur la case.
      </>
    ),
    momentUtilisation: ressources.momentsUtilisations.nImporteQuand,
    nom: "Boule de neige",
  },
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
          <div className="instructions">
            <p><i>{carte.momentUtilisation}</i></p>
            <p>{carte.description}</p>
            <p><i>{carte.apresUtilisation}</i></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
