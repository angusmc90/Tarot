import Deck from "../deck";
import { SHUFFLE_DECK, CUT_DECK } from "./types";

const shuffleArr = arr => {
  // https://javascript.info/task/shuffle
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

  //map the deck into a new faux-array
  let fauxShuffArr = arr.map(d => d);
  // starting from the end of the arr...
  for (let i = fauxShuffArr.length - 1; i > 0; i--) {
    // ...pick a random position / card in front of i...
    let j = Math.floor(Math.random() * (i + 1));
    // ... and swap those two cards / reassign the positions
    [fauxShuffArr[i], fauxShuffArr[j]] = [fauxShuffArr[j], shuffleArr[i]];
    // make sure to add a line that might invert the card
  }
  // update deck state
  return fauxShuffArr;
};

export const shuffleDeck = content => ({
  type: SHUFFLE_DECK,
  payload: {
    shuffledDeck: shuffleArr(Deck),
    // can i pass state into shuffleArr()?
    isShuffled: true
  }
});

export const cutDeck = content => ({
  type: CUT_DECK,
  payload: {}
});
