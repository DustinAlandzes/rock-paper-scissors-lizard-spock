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
        [Choice.Spock]: false
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
export function winner(player1: Choice, player2: Choice): Player | null {
    const did_player_1_win = choice_mapping[player1][player2];
    if (did_player_1_win === true) {
        return Player.Player1
    } else if (did_player_1_win === false) {
        return Player.Player2
    } else {
        return null;
    }
}