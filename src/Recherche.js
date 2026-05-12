import './Recherche.css';

function Recherche({ valeur, onChange, onRecherche }) {
  return (
    <div className="recherche">
      <input
        type="text"
        className="recherche-input"
        placeholder="Rechercher une ligne (depart, arrivee)..."
        value={valeur}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter") onRecherche();
        }}
      />
      <button
        className="recherche-btn-effacer"
        onClick={() => onChange("")}
      >
        ✕
      </button>
      
    </div>
  );
}

export default Recherche;