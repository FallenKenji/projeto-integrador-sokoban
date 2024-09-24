const player = new Player(0, 0)
const playerElement = document.querySelector('.player');
const celulas = document.querySelectorAll('.cell');

const dist_salto = 66;
const margin_fix =  4;
playerElement.style.top = calculaPosicao(0);
playerElement.style.left = calculaPosicao(0);

window.addEventListener("keydown", function(event) {
    const next = player.nextPosition(event.code);
    if(verifyPosition(next)) {
        let K = next.x * 4 + next.y;
        player.moveTo(next, playerElement, celulas[K]);
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
    
    this.moveTo = function (position, _parent) {
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