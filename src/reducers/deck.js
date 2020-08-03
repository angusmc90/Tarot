import { useEffect } from "react";

const deck = [];

// CALL ON GOOGLE SHEET
useEffect(() => {
  let url =
    "https://spreadsheets.google.com/feeds/list/1XL4dzpq_l5geNq7nPvIcmnPd9V_4cr8Te4RMbwfTHhY/1/public/values?alt=json";

  fetch(url)
    .then(res => res.json())
    .then(data => formatData(data));

  function formatData(data) {
    //pull cards in order of sheet list
    for (let i = 0; i < data.feed.entry.length; i += 1) {
      let card = {
        arcana: data.feed.entry[i].title.$t,
        cardNum: data.feed.entry[i].gsx$num.$t,
        suit: data.feed.entry[i].gsx$suit.$t,
        cardName: data.feed.entry[i].gsx$cardname.$t,
        pic: data.feed.entry[i].gsx$imgurl.$t,
        keyWords: data.feed.entry[i].gsx$keywords.$t,
        meaning: data.feed.entry[i].gsx$meaning.$t,
        past: data.feed.entry[i].gsx$past.$t,
        present: data.feed.entry[i].gsx$present.$t,
        future: data.feed.entry[i].gsx$future.t,
        yesno: data.feed.entry[i].gsx$yesno.$t,
        inverted: false
      };
      deck.push(card);
    }
  }
}, []);

const shuffleFN = arr => {
  // https://javascript.info/task/shuffle
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle

  //map the deck into a new faux-array
  let shuffleArr = arr.map(d => d);
  // starting from the end of the arr...
  for (let i = shuffleArr.length - 1; i > 0; i--) {
    // ...pick a random position / card in front of i...
    let j = Math.floor(Math.random() * (i + 1));
    // ... and swap those two cards / reassign the positions
    [shuffleArr[i], shuffleArr[j]] = [shuffleArr[j], shuffleArr[i]];
    // make sure to add a line that might invert the card
  }
  // update deck state
  return shuffleArr;
};

const deckShuffler = (state = deck, action) => {
  switch (action.type) {
    case "SHUFFLE":
      return shuffleFN(state);
    // case "CUT":
    //   return cutFN(state);
    default:
      return state;
  }
};

export default deckShuffler;
