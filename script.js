document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('chessboard');
    const squares = [];

    // Create the chessboard
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        squares.push(square);
        board.appendChild(square);
    }

    // Set up initial board positions (for testing purposes)
    const initialSetup = [
        'rnbqkbnr',
        'pppppppp',
        '........',
        '........',
        '........',
        '........',
        'PPPPPPPP',
        'RNBQKBNR'
    ];

    function renderBoard() {
        squares.forEach((square, index) => {
            const row = Math.floor(index / 8);
            const col = index % 8;
            const piece = initialSetup[row][col];
            square.textContent = piece === '.' ? '' : piece;
        });
    }

    renderBoard();
});
