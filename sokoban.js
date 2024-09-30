import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board')

const playerPiece = createBoardPiece(pieces.player, 'player');
const boxesPiece = [];
    for (let i = 0; i < pieces.boxes.length; i++){
        boxesPiece.push(createBoardPiece(pieces.boxes[i], 'box'))
    };

window.addEventListener("keydown", function (event) {
        handleKeydownEvent(event.code);
});
    
function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);
    return piece;
}

function handleKeydownEvent(keycode) {
    const next = playerPiece.nextPosition(event.code);

    if (verifyPosition(next)) {
        playerPiece.moveTo(next);
    }
}

function verifyPosition(position) {
    let {x: i , y: k} = position;
    return boardMap[k][i] != '#';
}