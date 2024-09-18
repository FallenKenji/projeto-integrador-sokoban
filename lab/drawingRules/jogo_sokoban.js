function buildGameBoard(linhas, celulas, regra) {
    const game = document.getElementById("game");
    const board = document.createElement('div');
    board.classList.add('board');

    for (let y = 0; y < linhas; y++) {
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);

        for (let x = 0; x < celulas; x++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);

            if (regra(linhas, celulas, y, x)) {
                celula.classList.add('empty');
            }
        }
    }

    game.append(board);
}

function regra(linhas, celulas, y, x) {
    return y == 0 || y == 7 || x == 0 || x == 7 
}

function regra1(linhas, celulas, y, x) {
    return y > 0 && y < 7 && x > 0 && x < 7   
}

function regra2(linhas, celulas, y, x) {
    return y + x == 7
}

function regra3(linhas, celulas, y, x) {
    return y == x 
}

function regra4(linhas, celulas, y, x) {
    return y == x || y + x == 7 
}

function regra5(linhas, celulas, y, x) {
    return (y + x) % 2 == 0 
}


buildGameBoard(8, 8, regra);
buildGameBoard(8, 8, regra1)
buildGameBoard(8, 8, regra2)
buildGameBoard(8, 8, regra3)
buildGameBoard(8, 8, regra4)
buildGameBoard(8, 8, regra5)


// const tabuleiro = document.getElementById('board2');

// function tab(linhas, celulas) {
//     for(let y = 0; y < linhas; y++){
//         const linha = document.createElement('div');
//         linha.classList.add('row');
//         tabuleiro.append(linha);
//         for(let x = 0; x < celulas; x++) {
//             const celula = document.createElement('div');
//             celula.classList.add('cell');
//             linha.append(celula);

//             if (y == 0 || y == 7 || x == 0 || x == 7) {
//                 celula.classList.add('empty');
//             } 

//             if(y > 0 && y < 7 && x > 0 && x < 7 ){
//                 celula.classList.add('empty');
//               }

//             if (y + x == 7) {
//                 celula.classList.add('empty'); 
//             }

//             if (y == x) {
//                 celula.classList.add('empty');
//             }
            
//             if (y == x || y + x == 7) {
//                 celula.classList.add('paint');
//             }

//         }
//     }
// }

// tab(8, 8);