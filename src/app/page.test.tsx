#!/bin/node
import {expect, jest, describe, test, afterEach, beforeEach} from "@jest/globals";
import {Choice, Player, winner} from "@/app/rpslizardspock";
import {randomChoice} from "@/utils";

// Sets the value of Math.random() to a value that will output rock
beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
})

describe("randomChoice", () => {
    test("returns a string", () => {
        expect(typeof randomChoice()).toBe("string")
    })

    test("returns 'rock' when the random number is 0", () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0);
        expect(randomChoice()).toBe(Choice.Rock)

    })

    // Mock a value of 0.5
    test("returns 'paper' when the random number is 1'", () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
        expect(randomChoice()).toBe(Choice.Paper)
    })

    // Mock a value of 0.9
    test("returns 'scissors' when the random number is 2'", () => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
        expect(randomChoice()).toBe(Choice.Scissors)
    })
})

describe("winner", () =>{
    test("player1 is the winner for the correct combinations based on the rules", () => {
        expect(winner(Choice.Paper, Choice.Rock)).toEqual(Player.Player1);
        expect(winner(Choice.Rock, Choice.Scissors)).toEqual(Player.Player1);
        expect(winner(Choice.Scissors, Choice.Paper)).toEqual(Player.Player1);

        expect(winner(Choice.Rock, Choice.Lizard)).toEqual(Player.Player1);
        expect(winner(Choice.Rock, Choice.Scissors)).toEqual(Player.Player1);
        expect(winner(Choice.Spock, Choice.Rock)).toEqual(Player.Player1);
        expect(winner(Choice.Paper, Choice.Spock)).toEqual(Player.Player1);
        expect(winner(Choice.Scissors, Choice.Lizard)).toEqual(Player.Player1);
        expect(winner(Choice.Spock, Choice.Scissors)).toEqual(Player.Player1);
        expect(winner(Choice.Lizard, Choice.Paper)).toEqual(Player.Player1);
        expect(winner(Choice.Lizard, Choice.Spock)).toEqual(Player.Player1);

    });

    test("When both arguments are the same value 'It's a tie' is returned", () => {
        expect(winner(Choice.Paper, Choice.Paper)).toEqual(null);
        expect(winner(Choice.Scissors, Choice.Scissors)).toEqual(null);
        expect(winner(Choice.Rock, Choice.Rock)).toEqual(null);

        expect(winner(Choice.Lizard, Choice.Lizard)).toEqual(null);
        expect(winner(Choice.Spock, Choice.Spock)).toEqual(null);
    });

    test("player2 is the winner for the correct combinations based on the rules", () => {
        expect(winner(Choice.Scissors, Choice.Rock)).toEqual(Player.Player2);
        expect(winner(Choice.Paper, Choice.Scissors)).toEqual(Player.Player2);
        expect(winner(Choice.Rock, Choice.Paper)).toEqual(Player.Player2);

        expect(winner(Choice.Lizard, Choice.Rock)).toEqual(Player.Player2);
        expect(winner(Choice.Scissors, Choice.Rock)).toEqual(Player.Player2);
        expect(winner(Choice.Rock, Choice.Spock)).toEqual(Player.Player2);
        expect(winner(Choice.Spock, Choice.Paper)).toEqual(Player.Player2);
        expect(winner(Choice.Lizard, Choice.Scissors)).toEqual(Player.Player2);
        expect(winner(Choice.Scissors, Choice.Spock)).toEqual(Player.Player2);
        expect(winner(Choice.Paper, Choice.Lizard)).toEqual(Player.Player2);
        expect(winner(Choice.Spock, Choice.Lizard)).toEqual(Player.Player2);
    });
})