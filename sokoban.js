const DIST_SALTO = 66;
const MARGIN_FIX = 4;
const NUM_ROWS = 8;
const NUM_COLS = 8;

function regra0() {
    return false;
}

buildGameBoard(NUM_ROWS, NUM_COLS, regra0);

const player = new Player(0, 0);
const playerElement = document.querySelector('.player');

playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

window.addEventListener("keydown", function (event) {
    const next = player.nextPosition(event.code);

    if (verifyPosition(next)) {
        player.moveTo(next, playerElement);
    }
});

function Player(posX, posY) {
    this.x = posX;
    this.y = posY;
    this.nextPosition = function (keycode) {
        let { x, y } = this;

        if (keycode === 'ArrowUp') x--;
        if (keycode === 'ArrowDown') x++;
        if (keycode === 'ArrowLeft') y--;
        if (keycode === 'ArrowRight') y++;

        console.log(keycode, player);
        return { x, y };
    }

    this.moveTo = function (position, element) {
        this.x = position.x;
        this.y = position.y;

        element.style.top = calculaPosicao(this.x);
        element.style.left = calculaPosicao(this.y);
    }
}

function verifyPosition(position) {
    let { x, y } = position;
    return x >= 0 && x < NUM_ROWS && y >= 0 && y < NUM_COLS;
}

function calculaPosicao(qtd) {
    return qtd * DIST_SALTO + MARGIN_FIX + "px";
}

function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

function buildGameBoard(linhas, celulas, regra) {
    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);
    
    const player = createGameElement('div','player', board);

    for (let y = 0; y < linhas; y++) {
        const linha = createGameElement('div','row', board);
        
        for (let x = 0; x < celulas; x++) {
            const celula = createGameElement('div','cell', linha);
            
            if (regra(linhas, celulas, y, x)) {
                celula.classList.add('remove');
            }
        }
    }

    // game.append(board);
    // board.append(player);
}