#!/bin/node
import {randomChoice} from './page'
import {afterEach, beforeEach, describe, test} from "node:test";
import {expect, jest, describe, test} from "@jest/globals";
import {Choice, winner} from "@/app/rpslizardspock";

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
        expect(winner(Choice.Paper, Choice.Rock)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Rock, Choice.Scissors)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Scissors, Choice.Paper)).toEqual("Player 1 Wins!");

        expect(winner(Choice.Rock, Choice.Lizard)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Rock, Choice.Scissors)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Spock, Choice.Rock)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Paper, Choice.Spock)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Scissors, Choice.Lizard)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Spock, Choice.Scissors)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Lizard, Choice.Paper)).toEqual("Player 1 Wins!");
        expect(winner(Choice.Lizard, Choice.Spock)).toEqual("Player 1 Wins!");

    });

    test("When both arguments are the same value 'It's a tie' is returned", () => {
        expect(winner(Choice.Paper, Choice.Paper)).toEqual("It's a tie");
        expect(winner(Choice.Scissors, Choice.Scissors)).toEqual("It's a tie");
        expect(winner(Choice.Rock, Choice.Rock)).toEqual("It's a tie");

        expect(winner(Choice.Lizard, Choice.Lizard)).toEqual("It's a tie");
        expect(winner(Choice.Spock, Choice.Spock)).toEqual("It's a tie");
    });

    test("player2 is the winner for the correct combinations based on the rules", () => {
        expect(winner(Choice.Scissors, Choice.Rock)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Paper, Choice.Scissors)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Rock, Choice.Paper)).toEqual("Player 2 Wins!");

        expect(winner(Choice.Lizard, Choice.Rock)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Scissors, Choice.Rock)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Rock, Choice.Spock)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Spock, Choice.Paper)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Lizard, Choice.Scissors)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Scissors, Choice.Spock)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Paper, Choice.Lizard)).toEqual("Player 2 Wins!");
        expect(winner(Choice.Spock, Choice.Lizard)).toEqual("Player 2 Wins!");
    });
})