function resultadoMedia() {
    let caixaResultado = document.getElementById("resultadoMedia");
    let nomeAluno = document.getElementById("nomeInput").value || "Player 1";
    let v1 = Number(document.getElementById("nota1").value);
    let v2 = Number(document.getElementById("nota2").value);
    let v3 = Number(document.getElementById("nota3").value);

    if (v1 > 10 || v1 < 0 || v2 > 10 || v2 < 0 || v3 > 10 || v3 < 0 ) {
        caixaResultado.innerHTML = "<span style='color: darkred;'>ERRO: NOTA INVÁLIDA!</span>"; 
        return;  
    }
    
    let media = (v1 + v2 + v3) / 3;
    let msg = ""; 
    
    if (media >= 7.0) {
        msg = `<span class="aprovado">LEVEL UP!<br>Média: ${media.toFixed(1)}<br>Boa, ${nomeAluno}!</span>`;
    } else {
        msg = `<span class="reprovado">GAME OVER!<br>Média: ${media.toFixed(1)}<br>Estude mais!</span>`;
    }

    caixaResultado.innerHTML = msg;
}