import motsCles from "./motsCles";

const ressources = {
  apresUtilisations: {
    defausser: "Défausser après utilisation",
    inventaireProprietaire: "Laisser en cadeau",
  },

  endroitsUtilisation: {
    apresDeplacement: (
      <>
        Remplace le
        {" "}
        <strong>{motsCles.lancerDeDe}</strong>
      </>
    ),
    exterieur: (
      <>
        S'utilise
        {" "}
        <strong>sur le chemin</strong>
        .
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
    interieur: (
      <>
        S'utilise
        {" "}
        <strong>dans un igloo</strong>
        .
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

export default ressources;
