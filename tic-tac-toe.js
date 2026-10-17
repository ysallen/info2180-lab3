document.addEventListener("DOMContentLoaded", function () {
    let squares = document.querySelectorAll("#board div");
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";

    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function () {
            squares[i].textContent = currentPlayer;
            squares[i].classList.add(currentPlayer);
            gameState[i] = currentPlayer;

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    }
});