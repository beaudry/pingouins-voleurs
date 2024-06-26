import { ComponentChildren } from "preact";
import charrue from "../images/charrue.jfif";
import canon from "../images/canon.jfif";
import curling from "../images/curling.jfif";
import perceuse from "../images/perceuse.jfif";
import poele from "../images/poele.jfif";
import sac from "../images/sac.jfif";
import truite from "../images/truite.jfif";
import ressources from "./ressources";
import motsCles from "./motsCles";

export type Outil = {
  apresUtilisation?: ComponentChildren,
  description?: ComponentChildren,
  momentUtilisation?: ComponentChildren,
  image?: string,
  nom: string,
};

const outils: Outil[] = [
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
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Pierre de curling",
  },
  {
    apresUtilisation: ressources.apresUtilisations.inventaireProprietaire,
    description: (
      <>
        Échange-la contre la
        {" "}
        {motsCles.boite}
        {" "}
        de ton choix.
      </>
    ),
    image: truite,
    momentUtilisation: ressources.endroitsUtilisation.interieur,
    nom: "Truite d'échange",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Cet orque te catapulte jusqu'à la case devant
        {" "}
        <strong>chez toi</strong>
        .
      </>
    ),
    momentUtilisation: (
      <>
        {ressources.endroitsUtilisation.exterieur}
        {" "}
        {ressources.endroitsUtilisation.apresDeplacement}
      </>
    ),
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
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Charrue",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Utilise-la pour te camoufler. Le propriétaire
        {" "}
        <strong>ne verra pas</strong>
        {" "}
        que tu es chez lui.
      </>
    ),
    momentUtilisation: ressources.endroitsUtilisation.interieur,
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
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
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
    // On décide au début de son tour si on prend une boîte chez Iglea ou non. Cela va rajouter un peu de stratégie
    // car les autres joueurs ne sauront pas si on va avoir les mains pleines ou non à notre prochain tour.
    momentUtilisation: ressources.endroitsUtilisation.iglea,
    nom: "Photo comprommettante",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Transforme la case sur laquelle tu te tiens en
        {" "}
        <strong>trou</strong>
        {" "}
        et utilise-le avant le
        {" "}
        <strong>{motsCles.lancerDeDe}</strong>
        .
      </>
    ),
    image: perceuse,
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Perceuse à glace",
  },
  {
    apresUtilisation: ressources.apresUtilisations.inventaireProprietaire,
    description: (
      <>
        Ce poêle fait fondre une boîte par
        {" "}
        {/* Le faire s'éteindre après deux boîtes consommées? */}
        <strong>ronde</strong>
        . Un pingouin doit venir l'éteindre.
      </>
    ),
    image: poele,
    momentUtilisation: ressources.endroitsUtilisation.interieur,
    nom: "Poêle à bois",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Permet d'acquérir et de transporter
        {" "}
        <strong>
          deux
          {" "}
          {motsCles.boite}
          s
        </strong>
        {" "}
        en même temps.
      </>
    ),
    image: sac,
    momentUtilisation: ressources.endroitsUtilisation.iglea,
    nom: "Sac fidélité",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Glisse dans une direction jusqu'à
        {" "}
        <strong>l'extrémité</strong>
        {" "}
        .
      </>
    ),
    momentUtilisation: (
      <>
        {ressources.endroitsUtilisation.exterieur}
        {" "}
        {ressources.endroitsUtilisation.apresDeplacement}
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
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Calmar Alléchant N°5 ",
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
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Canne à pêche",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Fais
        {" "}
        <strong>{motsCles.tomber}</strong>
        {" "}
        un pingouin qui
        {" "}
        <strong>transporte</strong>
        {" "}
        une
        {" "}
        {motsCles.boite}
        .
      </>
    ),
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Boule de neige",
  },
  {
    apresUtilisation: ressources.apresUtilisations.defausser,
    description: (
      <>
        Jusqu'à ton
        {" "}
        <strong>prochain tour</strong>
        ,
        {" "}
        <strong>toutes</strong>
        {" "}
        les cases vides sont
        {" "}
        <strong>glacées</strong>
        .
      </>
    ),
    momentUtilisation: ressources.endroitsUtilisation.exterieur,
    nom: "Journée patinoire",
  },
];

export default outils;
