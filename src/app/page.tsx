'use client';

import Image from "next/image";
import styles from "./page.module.css";
import {Player, Choice, choices, winner} from "@/app/rpslizardspock";
import {useState} from "react";

export function randomChoice(choices: Choice[] = [Choice.Rock, Choice.Paper, Choice.Scissors]) {
  const randomIndex = Math.floor(Math.random() * choices.length)
  return choices[randomIndex]
}

const choice_to_emoji = {
  [Choice.Rock]: "🪨",
  [Choice.Paper]: "🧻",
  [Choice.Scissors]: "✂️",
  [Choice.Lizard]: "🦎",
  [Choice.Spock]: "🖖",
}

// TODO: Build visual of what beats what


export default function Home() {

  const [player1, setPlayer1] = useState<Choice | null>(null);
  const [player2, setPlayer2] = useState<Choice | null>(null);
  const [winningPlayer, setWinner] = useState<string>(null);

  function play() {
    const player1_choice = randomChoice(choices)
    const player2_choice = randomChoice(choices)

    setPlayer1(player1_choice);
    setPlayer2(player2_choice);

    if (player1_choice == null || player2_choice == null) {
      throw Error("There was a problem choosing for the players");
    }
    setWinner(winner(player1_choice, player2_choice))
  }

  return (
    <div className={styles.page}>
      <h1 className={"title"}>{"Rock Paper Scissors"}</h1>

      <div className={"button"}><button onClick={() => play()}>New round</button></div>

      <span className={"player1"}>{player1 && `Player 1: ${choice_to_emoji[player1]}`}</span>
      <span className={"player2"}>{player2 && `Player 2: ${choice_to_emoji[player2]}`}</span>

      <div className={"winner"}>{winningPlayer && `Winner: ${winningPlayer}`}</div>
    </div>
  );
}
