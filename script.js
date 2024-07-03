document.addEventListener("DOMContentLoaded", function() {
    const board = document.getElementById('chessboard');
    const squares = [];
    let selectedSquare = null;

    // Create the chessboard
    for (let i = 0; i < 64; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.dataset.index = i; // Store index as data attribute
        square.addEventListener('click', handleClick);
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

    function handleClick() {
        const clickedSquare = this;
        const clickedIndex = parseInt(clickedSquare.dataset.index);

        if (selectedSquare === null) {
            // No piece selected, select the clicked square if it has a piece
            if (clickedSquare.textContent !== '') {
                selectedSquare = clickedSquare;
                selectedSquare.classList.add('selected');
            }
        } else {
            // Move the selected piece to the clicked square
            const selectedIndex = parseInt(selectedSquare.dataset.index);

            // Swap pieces between selected square and clicked square
            const tempPiece = initialSetup[selectedIndex / 8][selectedIndex % 8];
            initialSetup[selectedIndex / 8][selectedIndex % 8] = initialSetup[clickedIndex / 8][clickedIndex % 8];
            initialSetup[clickedIndex / 8][clickedIndex % 8] = tempPiece;

            // Deselect the selected square
            selectedSquare.classList.remove('selected');
            selectedSquare = null;

            // Render updated board
            renderBoard();
        }
    }

    renderBoard();
});
