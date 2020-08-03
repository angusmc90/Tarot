import Deck from "../deck";
import { SHUFFLE_DECK, CUT_DECK } from "./types";

const initialState = {
  deck: Deck,
  isShuffled: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHUFFLE_DECK:
      return {
        ...state,
        deck: action.payload.shuffledDeck,
        // is this changing the deck value or adding onto it?
        isShuffled: action.payload.isShuffled
      };
    default:
      return state;
  }
}
