export enum Choice {
    Rock,
    Paper,
    Scissors,
}

export function randomChoice(choices: Choice[] = [Choice.Rock, Choice.Paper, Choice.Scissors]) {
    const randomIndex = Math.floor(Math.random() * choices.length )
    return choices[randomIndex]
}

export function winner(player1: Choice, player2: Choice): string {

    // rock beats scissors
    // paper beats rock
    // scissors beats paper

    let winner = null

    if (player1 === Choice.Rock) {
        if (player2 === Choice.Paper) {
            winner = 2
        } else if (player2 == Choice.Scissors) {
            winner = 1
        }
    } else if (player1 === Choice.Paper) {
        if (player2 === Choice.Rock) {
            winner = 1
        } else if (player2 == Choice.Scissors) {
            winner = 2
        }
    } else if (player1 === Choice.Scissors) {
        if (player2 === Choice.Paper) {
            winner = 1
        } else if (player2 == Choice.Rock) {
            winner = 2
        }
    }

    if (winner === null) {
        return "It's a tie"
    }
    return `Player ${winner} Wins!`
}