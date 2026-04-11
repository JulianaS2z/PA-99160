import './style.css';

function InfoPersonagens({ nome, gem, arma }) {
  return (
    <div className="personagem-card">
      <h3>{nome}</h3>
      <p><strong>Gem:</strong> {gem}</p>
      <p><strong>Arma:</strong> {arma}</p>
    </div>
  );
}

export default InfoPersonagens;