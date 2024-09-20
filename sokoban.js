window.addEventListener("keydown", function(event) {
    const next = nextPosition(event.code);

    if(verifyPosition(next)) movePlayer(next);
})

function Player(posX, posY) {
    this.x = posX;
    this.y = posY;
}

const player = new Player(0, 0)
const playerElement = document.querySelector('.player');
const celulas = document.querySelectorAll('.cell');

function nextPosition(keycode) {
    let {x, y} = player;
    if (keycode == 'ArrowUp') x--;
    if (keycode == 'ArrowDown') x++;
    if (keycode == 'ArrowRight') y++;
    if (keycode == 'ArrowLeft') y--;   
    return {x, y};
}
function movePlayer(position) {
    let {x, y} = position;
    player.x = x;
    player.y = y;
    const K = player.x * 4 + player.y;
    celulas[K].append(playerElement);    
}
function verifyPosition(position) {
    let {x, y} = position;
    return x >= 0 && x < 4 && y >= 0 && y < 4;
}