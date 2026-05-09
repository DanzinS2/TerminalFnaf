function verificar() {
    const respostas = [22, 1, 21, 12, 42];
    const entradas = [
        parseInt(document.getElementById('d1').value) || 0,
        parseInt(document.getElementById('d2').value) || 0,
        parseInt(document.getElementById('d3').value) || 0,
        parseInt(document.getElementById('d4').value) || 0,
        parseInt(document.getElementById('d5').value) || 0
    ];

    const resultado = document.getElementById('resultado');

    if (entradas.every((val, idx) => val === respostas[idx])) {
        resultado.innerHTML = "ACESSO CONCEDIDO";
        resultado.style.color = "#0f0";
    } else {
        resultado.innerHTML = "ACESSO NEGADO";
        resultado.style.color = "#f00";
    }
}   