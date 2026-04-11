// import InfoPersonagens from './componentes/InfoPersonagens/index'; 
// import './App.css';

// function App() {
//     return (
//       <>
//         <InfoPersonagens/>
//       </>
//     )  
//   }
// export default App

import { useState } from 'react'; // Importante para criar a memória do site
import InfoPersonagens from './componentes/InfoPersonagens/index'; 
import './App.css';

function App() {
  // 1. Criamos estados para capturar o que o usuário digita nos inputs
  const [nomeInput, setNomeInput] = useState('');
  const [gemInput, setGemInput] = useState('');
  const [armaInput, setArmaInput] = useState('');

  // 2. Criamos uma lista (array) para guardar todos os personagens salvos
  const [listaDePersonagens, setListaDePersonagens] = useState([]);

  // 3. Função que será disparada quando clicar no botão
  function salvarPersonagem(event) {
    event.preventDefault(); // Impede o site de recarregar a página

    // Criamos um novo objeto com os dados dos inputs
    const novoPersonagem = {
      nome: nomeInput,
      gem: gemInput,
      arma: armaInput
    };

    // Adicionamos o novo personagem na lista (mantendo os que já existiam)
    setListaDePersonagens([...listaDePersonagens, novoPersonagem]);

    // Limpamos os campos do formulário
    setNomeInput('');
    setGemInput('');
    setArmaInput('');
  }

  return (
    <div className="container-principal">
      <h1>Cadastro de Gems</h1>

      {/* Formulário de entrada */}
      <form onSubmit={salvarPersonagem} className="meu-formulario">
        <input 
          placeholder="Nome do Personagem" 
          value={nomeInput}
          onChange={(e) => setNomeInput(e.target.value)}
          required
        />
        <input 
          placeholder="Tipo de Gem" 
          value={gemInput}
          onChange={(e) => setGemInput(e.target.value)}
          required
        />
        <input 
          placeholder="Arma" 
          value={armaInput}
          onChange={(e) => setArmaInput(e.target.value)}
          required
        />
        <button type="submit">Adicionar Personagem</button>
      </form>

      <hr />

      {/* Aqui a mágica acontece: ele varre a lista e cria um componente para cada item */}
      <div className="lista-exibicao">
        {listaDePersonagens.map((personagem, index) => (
          <InfoPersonagens 
            key={index} 
            nome={personagem.nome} 
            gem={personagem.gem} 
            arma={personagem.arma} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;