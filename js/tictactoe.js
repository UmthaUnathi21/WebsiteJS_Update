// Tic-Tac-Toe game logic

let currentPlayer = 'X'; // 'X' starts the game
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

// Function to make a move
function makeMove(row, col) {
    if (board[row][col] === '') {
        board[row][col] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// Function to check for a winner
function checkWinner() {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            alert(`${board[i][0]} wins!`);
            return;
        }
    }
    // Check columns
    for (let j = 0; j < 3; j++) {
        if (board[0][j] !== '' && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
            alert(`${board[0][j]} wins!`);
            return;
        }
    }
    // Check diagonals
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        alert(`${board[0][0]} wins!`);
        return;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        alert(`${board[0][2]} wins!`);
        return;
    }
}

// Function to render the game board
function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    let index = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[index].innerText = board[i][j];
            index++;
        }
    }
}

// Function to reset the game
function resetGame() {
    // Clear the board
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X'; // Set 'X' to start the game again
    renderBoard(); // Render the cleared board
}
