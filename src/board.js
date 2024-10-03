function string2BoardMap(level) {
    const lines = level.trim().split('\n');
    console.log(lines);

    return lines;
}

export function createGameElement(elementName, className, parentNode) {
    const element = document.createElement(elementName)
    element.classList.add(className);
    parentNode.append(element);

    return element;
}

export function buildGameBoard(mapa) {
    const boardMap = string2BoardMap(mapa);
    const pieces = {
        boxes: []
    };

    let numberOfGoals = 0;

    const game = document.getElementById('game');
    const board = createGameElement('div', 'board', game);
    const NUM_ROWS = boardMap.length;

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