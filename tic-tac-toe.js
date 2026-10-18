document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");
    let status = document.getElementById("status");
    let newGameButton = document.querySelector(".btn");
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner() {
        for (let i = 0; i < winningCombos.length; i++) {
            let a = winningCombos[i][0];
            let b = winningCombos[i][1];
            let c = winningCombos[i][2];

            if (gameState[a] !== "" && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return "";
    }

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function () {
            squares[i].textContent = currentPlayer;
            squares[i].classList.add(currentPlayer);
            gameState[i] = currentPlayer;

            let winner = checkWinner();
            if (winner !== "") {
                status.textContent = "Congratulations! " + winner + " is the Winner!";
                status.classList.add("you-won");
            }

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        squares[i].addEventListener("mouseover", function () {
            squares[i].classList.add("hover");
        });

        squares[i].addEventListener("mouseout", function () {
            squares[i].classList.remove("hover");
        });
    }

    newGameButton.addEventListener("click", function () {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = "";
            squares[i].classList.remove("X");
            squares[i].classList.remove("O");
            gameState[i] = "";
        }

        currentPlayer = "X";
        status.textContent = "Move your mouse over a square and click to play an X or an O.";
        status.classList.remove("you-won");
    });
});