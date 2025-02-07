'use client';

import styles from "./page.module.css";
import {Choice, choices, Player, winner} from "@/app/rpslizardspock";
import {useState} from "react";
import {randomChoice} from "@/utils";

export default function Home() {

  const [started, setStarted] = useState<boolean>(false);
  const [player1, setPlayer1] = useState<Choice | null>(null);
  const [player2, setPlayer2] = useState<Choice | null>(null);
  const [winningPlayer, setWinner] = useState<Player | null>(null);
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);

  const choice_to_emoji = {
    [Choice.Rock]: "🪨",
    [Choice.Paper]: "🧻",
    [Choice.Scissors]: "✂️",
    [Choice.Lizard]: "🦎",
    [Choice.Spock]: "🖖",
  }

  function play() {
    const player1_choice = randomChoice(choices)
    const player2_choice = randomChoice(choices)

    setPlayer1(player1_choice);
    setPlayer2(player2_choice);

    if (player1_choice == null || player2_choice == null) {
      throw Error("There was a problem choosing for the players");
    }
    const the_winner = winner(player1_choice, player2_choice);

    if (the_winner == null) {
      // Nothing happens
    } else if (the_winner === Player.Player1) {
      setPlayer1Score((prevState) => prevState + 1);

    } else if (the_winner === Player.Player2) {
      setPlayer2Score((prevState) => prevState + 1);
    }
    setWinner(winner(player1_choice, player2_choice))

    if (started === false) {
      setStarted(true);
    }
  }

  let winningPlayerMessage = "";
  if (started) {
    if (winningPlayer === null) {
      winningPlayerMessage = "It's a Tie!"
    } else if (winningPlayer === Player.Player1) {
      winningPlayerMessage = "Player 1 Wins!"
    } else if (winningPlayer === Player.Player2) {
      winningPlayerMessage = "Player 2 Wins!"
    }
  }

  return (
    <div className={styles.page}>
      <h1 className={"title"}>{"Rock Paper Scissors"}</h1>

      <div className={"button"}><button id="new-round-button" onClick={() => play()}>New round</button></div>

      <span className={"player1"}>{player1 && `Player 1: ${choice_to_emoji[player1]}`}</span>
      <span className={"player2"}>{player2 && `Player 2: ${choice_to_emoji[player2]}`}</span>

      <div className={"winner"}>
        {(started && winningPlayerMessage) ? winningPlayerMessage : "Game has not started."}
      </div>

      <div className={"score"}>
        <div><h1>{`Score`}</h1></div>
        <div>{`Player 1: ${player1Score}`}</div>
        <div>{`Player 2: ${player2Score}`}</div>
      </div>
    </div>
  );
}
