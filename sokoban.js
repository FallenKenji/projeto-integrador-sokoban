import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board')

const playerPiece = createBoardPiece(pieces.player, 'player');
const boxes = [];
    for (let box of pieces.boxes) {
        let piece = createBoardPiece(box, 'box');
        boxes.push(piece);
    }

window.addEventListener("keydown", function (event) {
    event.preventDefault();

    handlePieceMovement(event.code);
});

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {
    // modificar linha(s) de código abaixo
    return boxes.find((box) => box.x === position.x && box.y === position.y);
}

/** Tarefa #2: modificar a função abaixo de forma a tratar tando a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode){
    // Variável destinada ao pré-cálculo da posição do jogador
    const next = playerPiece.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const foundBox = findBoxAtPosition(next);

    // Implementar lógica caso encontre uma outra peça no caminho.
    if(foundBox) {
        
        console.log(foundBox);
    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        if (verifyPosition(next)) {
            playerPiece.moveTo(next);
        }
    }
}
    
function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);
    return piece;
}

function handleKeydownEvent(keycode) {
    const next = playerPiece.nextPosition(keycode);

    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    }
}

function verifyPosition(position) {
    let {x: i , y: k} = position;
    return boardMap[k][i] != '#';
}