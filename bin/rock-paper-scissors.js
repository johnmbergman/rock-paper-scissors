const moves = ["rock", "paper", "scissors"]
function getRandomMove() {
    const randomIndex = Math.floor(Math.random() * moves.length)
    return moves[randomIndex]
}

function assertValidMove(move) {
    if (!moves.includes(move)) {
        throw new Error("Invalid move: " + move)
    }
}

// todo hard-coded until command-line input is supported
const playerMove = getRandomMove()
const opponentMove = getRandomMove()

assertValidMove(playerMove)
assertValidMove(opponentMove)

console.log("Player: " + playerMove)
console.log("Oponnent: " + opponentMove)

if (playerMove === opponentMove) {
    console.log("Tie game!")
    return
}

if (playerMove === "rock" && opponentMove === "scissors" 
    || playerMove === "scissors" && opponentMove === "paper"
    || playerMove === "paper" && opponentMove === "rock") {
        console.log("Player wins!")
        return
}

console.log("Opponent wins!")