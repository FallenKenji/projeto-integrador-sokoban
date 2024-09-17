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

            regra(celula, linhas, celulas, y, x);
        
        }
    }

    game.append(board);
}
function regra(celula, linhas, celulas, y, x) {
    if (y == 0 || y == 7 || x == 0 || x == 7) {
        celula.classList.add('empty');
    }   
}

function regra1(celula, linhas, celulas, y, x) {
    if (y > 0 && y < 7 && x > 0 && x < 7) {
        celula.classList.add('empty');
    }
}

function regra2(celula, linhas, celulas, y, x) {
    if (y + x == 7) {
        celula.classList.add('empty');
    }
}

function regra3(celula, linhas, celulas, y, x) {
    if (y == x) {
        celula.classList.add('empty');
    }
}

function regra4(celula, linhas, celulas, y, x) {
    if (y == x || y + x == 7) {
        celula.classList.add('empty');
    }
}

function regra5(celula, linhas, celulas, y, x) {
    if ((y + x) % 2 == 0) {
        celula.classList.add('empty')
    }
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