const player = new Player(0, 0)
const playerElement = document.querySelector('.player');
const celulas = document.querySelectorAll('.cell');

window.addEventListener("keydown", function(event) {
    const next = player.nextPosition(event.code);
    if(verifyPosition(next)) player.movePlayer(next);
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
    
    this.movePlayer = function(position) {
        this.x = position.x;
        this.y = position.y;
        const K = this.x * 4 + this.y;
        celulas[K].append(playerElement);    
    }
}

function verifyPosition(position) {
    let {x, y} = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}