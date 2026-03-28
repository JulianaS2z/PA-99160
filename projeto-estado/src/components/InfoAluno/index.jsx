import './style.css'

function InfoAluno() {

    const nome = "Juliana Santos"
    const idade = 21
    const curso ="Desenvolvimento de Sistemas"
    
    return (
        <div className='info-aluno'>
            <h2>Informações do aluno: </h2>
            <p><strong>Nome: {nome}</strong> </p>
            <p><strong>Idade: {idade}</strong> </p>
            <p><strong>Curso: {curso}</strong> </p>
        </div>
    )
}
export default InfoAluno