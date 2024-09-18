let x = 3
let y = 4
console.log(x, y);

const player = document.querySelector('.player');
console.log(player);

player.addEventListener("click", function(){
    window.alert("Clicou no Jogador Zero");
})

window.addEventListener("keydown", function(event){
    // window.alert("Pressionou tecla");
    console.log(event)

    if (event.code == 'ArrowUp' && x > 0) {
        x--;
    }

    if (event.code == 'ArrowDown' && x < 4) {
        x++;
    }

    if (event.code == 'ArrowRight' && y < 4 ) {
        y++;
    }

    if (event.code == 'ArrowLeft' && y > 0) {
        y--;
    }
    console.log(event.code, x, y);

})