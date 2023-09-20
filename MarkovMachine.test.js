/** Command-line tool to generate Markov text. */

const MarkovMachine = require("./markov.js");

describe("MarkovMachine", () => {
  test("constructor sets up words correctly", () => {
    const text = "the cat in the hat";
    const markovMachine = new MarkovMachine(text);

    expect(markovMachine.words).toEqual(["the", "cat", "in", "the", "hat"]);
  });
});
