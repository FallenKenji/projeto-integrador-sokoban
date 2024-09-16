const tabuleiro = document.getElementById('board2');

function tab(linhas, celulas) {
    for(let k=0; k<linhas; k++){
        const linha = document.createElement('div');
        linha.classList.add('row');
        tabuleiro.append(linha);
        for(let i=0; i<celulas; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);
        }
    }
}

tab(8, 8);