import {Choice} from "@/app/rpslizardspock";

export function randomChoice(choices: Choice[] = [Choice.Rock, Choice.Paper, Choice.Scissors]) {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}
