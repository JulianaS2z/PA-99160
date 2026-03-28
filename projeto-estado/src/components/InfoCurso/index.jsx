import { useState } from 'react'
import './style.css'

function InfoCurso() {
    const [nome, setNome] = useState("Programação de aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [local, setlocal] = useState("SENAI")

    return (
        <div className = 'info-curso' >
            <h2>Dados do curso: </h2>
            <p><strong>Nome: {nome}</strong></p>
            <p><strong>Carga horária: {cargaHoraria}</strong></p>
            <p><strong>Local: {local}</strong></p>
        </div>
    )

}
export default Info