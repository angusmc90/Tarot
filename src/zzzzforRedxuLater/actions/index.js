import { SHUFFLE_DECK } from "../constants/action-types";

export function shuffleDeck(payload) {
  return { type: SHUFFLE_DECK, payload };
}
