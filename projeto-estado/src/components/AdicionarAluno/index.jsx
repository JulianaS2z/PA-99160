import './style.css'

function AdicionarAluno() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [alunos, setAlunos] = useState([])
    
    //FUNÇÃO PARA ADICIONAR UM ALUNO NA LISTA
        const handleAdicionarAluno = (event) => {
            event.preventDefault() // Impede que a página seja recarregada
            // SE OS CAMPOS ESTIVEREM PREENCHIDOS...
            if (nome && email) {
                setAlunos([...alunos, {nome, email}]) // ADICIONAR NA LISTA
                setNome("") // APAGA O NOME INFORMADO DEIXANDO O CAMPO VAZIO
                setEmail("") // APAGA O E-MAIL INFORMANDO DEIXANDO O CAMPO VAZIO
            }
        }


return (
    <div>
            <h2> Adicionar Aluno: </h2>
            <from onSubmit={handleAdicionarAluno}>
                <input
                type= "text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />

                <input
                type= "email"
                value={email}
                onChange={(e) => setNome(e.target.value)}
            />
            <button type="submit">
                Adicionar
            </button>
        </from>
        <hr />
        <h2> Alunos Adicionados</h2>
        <ul>
            {alunos.map((aluno, index) => (
                <li key={index}>
                    {aluno.nome} - {aluno.email}
                </li>
            ))}
        </ul>
    </div>
    )

}
export default AdicionarAluno