function Player(posX, posY) {
    this.x = posX;
    this.y = posY;
}
const player = new Player(0, 0)

const playerElement = document.querySelector('.player');

playerElement.addEventListener("click", function() {
    window.alert("Clicou no Jogador Zero");
})

window.addEventListener("keydown", function(event) {
    nextPosition(event.code);
})
const celulas = document.querySelectorAll('.cell');
console.log(celulas);

function nextPosition(keycode) {
    if (keycode == 'ArrowUp' && player.x > 0) player.x--;
    if (keycode == 'ArrowDown' && player.x < 4) player.x++;
    if (keycode == 'ArrowRight' && player.y < 4) player.y++;
    if (keycode == 'ArrowLeft' && player.y > 0) player.y--;
        
    console.log(keycode, player);
    const K = player.x * 4 + player.y;
    celulas[K].append(playerElement);
}

