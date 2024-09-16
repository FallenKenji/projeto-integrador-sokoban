const tabuleiro = document.getElementById('board2');

for(let i = 0; i<8; i++) {
    const linha = document.createElement('div');
    linha.classList.add('row');
    tabuleiro.appendChild(linha);
    for(let i=0; i<8; i++) {
        const celula = document.createElement('div');
        celula.classList.add('cell');
        linha.appendChild(celula); 
    }    
}