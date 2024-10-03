const lvl0 = `
 __#####
###P..#_
#..B#.##
#.#GB..#
#..G.#.#
#..#...#
_#...###
_#####
`

function string2BoardMap(Level) {
    const lines = Level.trim().split('\n');
    console.log(lines);

    return lines;
}

export const boardMap = string2BoardMap(lvl0);

// export const boardMap = [
//     [" ", " ", "#", "#", "#", "#", "#",],
//     ["#", "#", "#", "P", ".", ".", "#",],
//     ["#", ".", ".", "B", "#", ".", "#", "#"],
//     ["#", ".", "#", "G", "B", ".", ".", "#"],
//     ["#", ".", ".", "G", ".", "#", ".", "#"],
//     ["#", ".", ".", "#", ".", ".", ".", "#"],
//     [" ", "#", ".", ".", ".", "#", "#", "#"],
//     [" ", "#", "#", "#", "#", "#",]
// ];

const NUM_ROWS = boardMap.length;

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

export function buildGameBoard() {
    const pieces = {
        boxes: []
    };

    let numberOfGoals = 0;

    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);

    for (let i = 0; i < NUM_ROWS; i++) {
        const linha = createGameElement('div', 'row', board);
        const NUM_COLS = boardMap[i].length;

        for (let j = 0; j < NUM_COLS; j++) {
            const celula = createGameElement('div', 'cell', linha);

            const char = boardMap[i][j];
            const position = { x: j, y: i };

            if (char === '#') celula.classList.add('wall');
            if (char === ' ') celula.classList.add('empty');
            if (char === '_') celula.classList.add('empty');
            if (char === 'P') pieces.player = position;
            if (char === 'B') pieces.boxes.push(position);
            if (char === 'G') {
                numberOfGoals++;
                celula.classList.add('goal')
            };
        }
    }

    return { boardMap, pieces, numberOfGoals };
}