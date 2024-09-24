buildGameBoard(10, 10, regra0);
function buildGameBoard(linhas, celulas, regras) {
    const game = document.getElementById('game');
    const board = document.createElement('div');
    const jogador = document.createElement('div');
    jogador.classList.add('player');
    board.append(jogador);
    board.classList.add('board');
    for (let k = 0; k < linhas; k++) {
        const linha = document.createElement('div');
        linha.classList.add('row');
        board.append(linha);
        for (let i = 0; i < celulas; i++) {
            const celula = document.createElement('div');
            celula.classList.add('cell');
            linha.append(celula);
            if (regras(linhas, celulas, k, i)) {
                celula.classList.add('remove');
            }
        }
    }
    game.append(board);
}
function regra0(k, i) {
    return k == 0 || k == 7 || i == 0 || i == 7;
}

const player = new Player(0, 0)
const playerElement = document.querySelector('.player');

const dist_salto = 66;
const margin_fix =  4;
playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

window.addEventListener("keydown", function(event) {
    const next = player.nextPosition(event.code);
    if(verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }    
})

function Player(posX, posY) {
    this.x = posX;
    this.y = posY;

    this.nextPosition = function(keycode) {
        let {x, y} = this;
        if (keycode == 'ArrowUp') x--;
        if (keycode == 'ArrowDown') x++;
        if (keycode == 'ArrowRight') y++;
        if (keycode == 'ArrowLeft') y--;   
        return {x, y};
    }
    
    this.moveTo = function (position, playerElement) {
        this.x = position.x;
        this.y = position.y;
        playerElement.style.top = calculaPosicao(this.x);
        playerElement.style.left = calculaPosicao(this.y);
    }
}

function verifyPosition(position) {
    let { x, y } = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}

function calculaPosicao(qtd) {
    return qtd * dist_salto + margin_fix + "px";
}