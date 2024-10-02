function findBoxAtPosition(position) {
    // Percorre todas as caixas e verifica se a posição bate com a fornecida
    for (let box of boxes) {
        if (box.x === position.x && box.y === position.y) {
            return box; // Retorna a caixa se encontrar
        }
    }
    return null; // Retorna null se não houver caixa na posição
}

function handlePieceMovement(keycode) {
    // Posição seguinte do jogador
    const nextPlayerPosition = playerPiece.nextPosition(keycode);
    // Verificar se há uma caixa na posição seguinte do jogador
    const foundBox = findBoxAtPosition(nextPlayerPosition);

    // Se houver uma caixa na posição seguinte
    if (foundBox) {
        // Posição seguinte da caixa (movendo na mesma direção do jogador)
        const nextBoxPosition = foundBox.nextPosition(keycode);

        // Verificar se a posição seguinte da caixa é válida e se não há outra caixa lá
        if (verifyPosition(nextBoxPosition) && !findBoxAtPosition(nextBoxPosition)) {
            // Mover a caixa para a nova posição
            foundBox.moveTo(nextBoxPosition);

            // Mover o jogador para a posição anterior da caixa
            playerPiece.moveTo(nextPlayerPosition);
        } else {
            // A caixa está bloqueada e o jogador não pode se mover
            console.log("A caixa está bloqueada, não pode se mover.");
        }
    } else {
        // Se não houver caixa, mover apenas o jogador
        if (verifyPosition(nextPlayerPosition)) {
            playerPiece.moveTo(nextPlayerPosition);
        }
    }
}

class Piece {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.element = null; // Este será o elemento DOM associado à peça
    }

    // Método que retorna a próxima posição com base na tecla pressionada
    nextPosition(keycode) {
        const next = { x: this.x, y: this.y };
        switch (keycode) {
            case "ArrowUp":
                next.y -= 1;
                break;
            case "ArrowDown":
                next.y += 1;
                break;
            case "ArrowLeft":
                next.x -= 1;
                break;
            case "ArrowRight":
                next.x += 1;
                break;
        }
        return next;
    }

    // Método que move a peça para uma nova posição
    moveTo(position) {
        this.x = position.x;
        this.y = position.y;
        // Atualiza a posição do elemento DOM no tabuleiro
        this.element.style.transform = `translate(${this.x * 50}px, ${this.y * 50}px)`;
    }

    // Insere o elemento DOM associado à peça no tabuleiro
    insertElementInto(className, board) {
        const pieceElement = document.createElement('div');
        pieceElement.classList.add(className);
        pieceElement.style.transform = `translate(${this.x * 50}px, ${this.y * 50}px)`;
        board.appendChild(pieceElement);
        this.element = pieceElement;
    }
}

function verifyPosition(position) {
    let { x: i, y: k } = position;
    return boardMap[k][i] !== '#'; // Verifica se a célula do mapa não é um obstáculo
}

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board);
    return piece;
}


// Suponha que boxes é um array de objetos, cada um representando uma caixa com uma posição
const boxes = [
    { id: 1, position: { x: 10, y: 20 } },
    { id: 2, position: { x: 30, y: 40 } },
    { id: 3, position: { x: 50, y: 60 } },
];

function findBoxAtPosition(position) {
    // Usar o método find para localizar a caixa que está na posição fornecida
    return boxes.find(box => box.position.x === position.x && box.position.y === position.y);
}

// Exemplo de uso:
const position = { x: 30, y: 40 };
const box = findBoxAtPosition(position);
console.log(box); // { id: 2, position: { x: 30, y: 40 } }

import Piece from "./piece.js";
import { buildGameBoard, boardMap } from "./board.js";

const pieces = buildGameBoard();
const board = document.querySelector('.board');

const player = createBoardPiece(pieces.player, 'player')
const boxes = [];

for (let b = 0; b < pieces.boxes.length; b++) {
    boxes.push(createBoardPiece(pieces.boxes[b], 'box'));
}

window.addEventListener("keydown", function (event) {
    // event.preventDefault();

    handlePieceMovement(event.code);
});

console.log(pieces.boxes);

/** Tarefa #1: implementar função para localizar uma caixa à partir de um
 * uma dada coordenada.
*/
function findBoxAtPosition(position) {

    return boxes.find((box) => box.x === position.x && box.y === position.y);
}

/** Tarefa #2: modificar a função abaixo de forma a tratar tanto a movimentação
 * do jogador quanto das caixas.
*/
function handlePieceMovement(keycode) {
    // Variável destinada ao pré-cálculo da posição do jogador
    const nextPlayerPosition = player.nextPosition(keycode);
    // (Modificar) Variável para detectar a "presença" de outra peça
    const foundBox = findBoxAtPosition(nextPlayerPosition);

    // Implementar lógica caso encontre uma outra peça no caminho.
    if (foundBox) {
        const nextBoxPosition = foundBox.nextPosition(keycode);
        const boxCanMove = verifyPosition(nextBoxPosition) && !findBoxAtPosition(nextBoxPosition);

        if (boxCanMove) {
            foundBox.moveTo(nextBoxPosition);
            player.moveTo(nextPlayerPosition);
        }
    }
    // E caso não encontre outra peça...
    else {
        // Faça as modificações que forem necessárias para manter o
        // funcionamento do jogo.
        const playerCanMove = verifyPosition(nextPlayerPosition);

        if (playerCanMove) {
            player.moveTo(nextPlayerPosition);
        }
    }
}

function createBoardPiece(piecePosition, className) {
    const piece = new Piece(piecePosition.x, piecePosition.y);
    piece.insertElementInto(className, board)

    return piece;
}

function handleKeydownEvent(keycode) {
    const next = player.nextPosition(keycode);

    if (verifyPosition(next)) {
        player.moveTo(next);
    }
}

function verifyPosition(position) {
    let { x: j, y: i } = position;
    return boardMap[i][j] !== "#";
}