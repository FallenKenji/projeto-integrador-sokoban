const tabuleiro = document.getElementById('board2');

function tab(linhas, celulas) {
    for(let y = 0; y < linhas; y++){
        const linha = document.createElement('div');
        linha.classList.add('row');
        tabuleiro.append(linha);
        for(let x = 0; x < celulas; x++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);

            if (y == 0 || y == linhas - 1 || x == 0 || x == celulas - 1) {
                celula.classList.add('empty');
            } 

            // if (y > 0 && y < linhas - 1 && x > 0 && x < celulas - 1) {
            //     celula.classList.add('empty');
            // }
            
            // if (y == x || y + x === linhas - 1) {
            //     celula.classList.add('empty');
            // }

            // if (y == x) {
            //     celula.classList.add('empty');
            // }

            // if (y + x == linhas -1) {
            //     celula.classList.add('empty');
                
            // }

        }
    }
}

tab(8, 8);



