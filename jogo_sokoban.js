const tabuleiro = document.getElementById('board2');

const linha = document.createElement('div');
linha.classList.add('row');

for(let i=0; i<4; i++) {}
const celula = document.createElement('div');
celula.classList.add('cell');
linha.appendChild(celula);
for(let i = 0; i<4; i++) {
tabuleiro.appendChild(linha);
}


tabuleiro.appendChild(linha);