import "./app.css";
import outils from "./outils";

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
