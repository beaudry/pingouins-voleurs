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

export default ressources;
