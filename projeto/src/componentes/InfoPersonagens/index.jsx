import './style.css';

function InfoPersonagens({ nome, gem, arma }) {
  return (
    <div className="card-personagem">
      <h3>{nome}</h3>
      <div className="detalhes">
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Gem:</strong> {gem}</p>
        <p><strong>Arma:</strong> {arma}</p>
      </div>
    </div>
  );
}

export default InfoPersonagens;