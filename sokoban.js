let x = 0
let y = 0
console.log(x, y);

const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function() {
    window.alert("Clicou no Jogador Zero");
})

window.addEventListener("keydown", function(event) {
    // window.alert("Pressionou tecla");
    nextPosition(event.code);
})

function nextPosition(keycode) {
        if (keycode == 'ArrowUp' && x > 0) {
            x--;
        }
    
        if (keycode == 'ArrowDown' && x < 4) {
            x++;
        }
    
        if (keycode == 'ArrowRight' && y < 4 ) {
            y++;
        }
    
        if (keycode == 'ArrowLeft' && y > 0) {
            y--;
        }
        console.log(keycode, x, y);
}