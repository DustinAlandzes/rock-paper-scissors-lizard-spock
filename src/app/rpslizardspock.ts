export enum Choice {
    Rock = "Rock",
    Paper = "Paper",
    Scissors = "Scissors",
    Lizard = "Lizard",
    Spock = "Spock",
}

export const choices = [Choice.Rock, Choice.Paper, Choice.Scissors, Choice.Lizard, Choice.Spock];

export enum Player {
    Player1 = 1,
    Player2 = 2,
}

type ChoiceMap = {
    [key in Choice]: {[key in Choice]: boolean | null}
}

const choice_mapping: ChoiceMap = {
    [Choice.Rock]: {
        [Choice.Rock]: null,
        [Choice.Paper]: false,
        [Choice.Scissors]: true,
        [Choice.Lizard]: true,
        [Choice.Spock]: false
    },
    [Choice.Paper]: {
        [Choice.Rock]: true,
        [Choice.Paper]: null,
        [Choice.Scissors]: false,
        [Choice.Lizard]: false,
        [Choice.Spock]: true
    },
    [Choice.Scissors]: {
        [Choice.Rock]: false,
        [Choice.Paper]: true,
        [Choice.Scissors]: null,
        [Choice.Lizard]: true,
        [Choice.Spock]: true
    },
    [Choice.Lizard]: {
        [Choice.Rock]: false,
        [Choice.Paper]: true,
        [Choice.Scissors]: false,
        [Choice.Lizard]: null,
        [Choice.Spock]: true
    },
    [Choice.Spock]: {
        [Choice.Rock]: true,
        [Choice.Paper]: false,
        [Choice.Scissors]: true,
        [Choice.Lizard]: false,
        [Choice.Spock]: null
    }
}

/**

 *
 * // Rock crushes lizard
 * // Rock crushes scissors
 * // Paper overs rock
 * // Spock vaporizes rock
 *
 * // Paper disproves Spock
 * // Scissors cuts paper
 *
 * // Scissors decapitates lizard
 * // Spock smashes scissors
 * // Lizard eats paper
 *
 * // Lizard poisons Spock
 * @param player1
 * @param player2
 */
export function winner(player1: Choice, player2: Choice): string {
    let winner: Player | null = null

    // const player_1_wins = choice_mapping[player1][player2]


    if (player1 === Choice.Rock) {
        switch (player2) {
            case Choice.Rock:
                winner = null;
                break;
            case Choice.Paper:
                winner = Player.Player2;
                break;
            case Choice.Scissors:
                winner = Player.Player1;
                break;
            case Choice.Lizard:
                winner = Player.Player1;
                break;
            case Choice.Spock:
                winner = Player.Player2;
                break;
            default:
                throw Error(`Unknown choice: ${player2}`);
        }
    } else if (player1 === Choice.Paper) {
        switch (player2) {
            case Choice.Rock:
                winner = Player.Player1;
                break;
            case Choice.Paper:
                winner = null;
                break;
            case Choice.Scissors:
                winner = Player.Player2;
                break;
            case Choice.Lizard:
                winner = Player.Player2;
                break;
            case Choice.Spock:
                winner = Player.Player1;
                break;
            default:
                throw Error(`Unknown choice: ${player2}`);
        }
    } else if (player1 === Choice.Scissors) {
        switch (player2) {
            case Choice.Rock:
                winner = Player.Player2;
                break;
            case Choice.Paper:
                winner = Player.Player1;
                break;
            case Choice.Scissors:
                winner = null;
                break;
            case Choice.Lizard:
                winner = Player.Player1;
                break;
            case Choice.Spock:
                winner = Player.Player2;
                break;
            default:
                throw Error(`Unknown choice: ${player2}`);
        }
    } else if (player1 === Choice.Lizard) {
        switch (player2) {
            case Choice.Rock:
                winner = Player.Player2;
                break;
            case Choice.Paper:
                winner = Player.Player1;
                break;
            case Choice.Scissors:
                winner = Player.Player2;
                break;
            case Choice.Lizard:
                winner = null;
                break;
            case Choice.Spock:
                winner = Player.Player1;
                break;
            default:
                throw Error(`Unknown choice: ${player2}`);
        }
    } else if (player1 === Choice.Spock) {
        switch (player2) {
            case Choice.Rock:
                winner = Player.Player1;
                break;
            case Choice.Paper:
                winner = Player.Player2;
                break;
            case Choice.Scissors:
                winner = Player.Player1;
                break;
            case Choice.Lizard:
                winner = Player.Player2;
                break;
            case Choice.Spock:
                winner = null;
                break;
            default:
                throw Error(`Unknown choice: ${player2}`);
        }
    } else {
        throw Error(`Unknown choice: ${player1}`);
    }

    if (winner === null) {
        return "It's a tie"
    }
    return `Player ${winner} Wins!`
}