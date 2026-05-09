const screen = document.getElementById('screen');
const senhaCorreta = [22, 1, 21, 12, 42];

// Função para digitar texto com efeito de máquina de escrever
function digitar(texto, delay = 20) {
    return new Promise((resolve) => {
        let i = 0;
        const timer = setInterval(() => {
            screen.textContent += texto[i];
            screen.scrollTop = screen.scrollHeight;
            i++;
            if (i >= texto.length) {
                clearInterval(timer);
                resolve();
            }
        }, delay);
    });
}

// Função para criar o formulário de autenticação
function criarFormulario() {
    const formHTML = `
    
    ╔════════════════════════════════════╗
    ║         CAMPO DE AUTENTICAÇÃO      ║
    ╠════════════════════════════════════╣
    ║                                    ║
    ║      SENHA:  <input type="text" class="digit" maxlength="2" id="d1"> <input type="text" class="digit" maxlength="2" id="d2"> <input type="text" class="digit" maxlength="2" id="d3"> <input type="text" class="digit" maxlength="2" id="d4"> <input type="text" class="digit" maxlength="2" id="d5">       ║
    ║                                    ║
    ╚════════════════════════════════════╝
    <button onclick="verificar()">AUTENTICAR</button>
    <p id="resultado"></p>
    `;
    screen.innerHTML += formHTML;
}

// Função para verificar a senha
function verificar() {
    const entradas = [
        parseInt(document.getElementById('d1').value) || 0,
        parseInt(document.getElementById('d2').value) || 0,
        parseInt(document.getElementById('d3').value) || 0,
        parseInt(document.getElementById('d4').value) || 0,
        parseInt(document.getElementById('d5').value) || 0
    ];

    const resultado = document.getElementById('resultado');

    if (entradas.every((val, idx) => val === senhaCorreta[idx])) {
        resultado.innerHTML = "ACESSO CONCEDIDO";
        resultado.style.color = "#0f0";
    } else {
        resultado.innerHTML = "ACESSO NEGADO";
        resultado.style.color = "#f00";
    }
}

// Função principal que inicia o terminal
async function iniciarTerminal() {
    const mensagemInicial = `███████████████████████████████████████████████████████

                FLEMING SYSTEMS INC.
         DIVISÃO DE SEGURANÇA E CONTROLE DIGITAL

████████████████████████████████████████████████████████

ARQUIVO...............: FS-LOCK/22A
CLASSIFICAÇÃO.........: RESTRITO
NÍVEL DE ACESSO.......: V
AUTORIZAÇÃO...........: OBRIGATÓRIA

────────────────────────────────────────────────────────

AVISO AO FUNCIONÁRIO:

Para restaurar o acesso ao terminal principal,
o operador deverá reconstruir a sequência numérica
correta através dos cálculos abaixo.

Todos os resultados devem ser inseridos na ordem
em que aparecem no documento.

ERROS REPETIDOS PODEM ACIONAR O BLOQUEIO DO SISTEMA.

────────────────────────────────────────────────────────


[ EQUAÇÃO 01 ]

     (7 × 8) - (3² + 25)

────────────────────────────────────────────────────────


[ EQUAÇÃO 02 ]

     ((5³ ÷ 5²) + 14) - (3 × 6)

────────────────────────────────────────────────────────


[ EQUAÇÃO 03 ]

     (√225 + 18) - (2³ + 4)

────────────────────────────────────────────────────────


[ EQUAÇÃO 04 ]

     ((9 × 7) - 15) ÷ 4

────────────────────────────────────────────────────────


[ EQUAÇÃO 05 ]

     ((8² - 22) ÷ 2) + 21

────────────────────────────────────────────────────────

`;
    await digitar(mensagemInicial, 10);
    criarFormulario();
}

// Inicia o terminal quando a página carrega
window.onload = iniciarTerminal;Copied!   