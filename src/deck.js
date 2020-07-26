export const Deck = () => {
  let url =
    "https://spreadsheets.google.com/feeds/list/1XL4dzpq_l5geNq7nPvIcmnPd9V_4cr8Te4RMbwfTHhY/1/public/values?alt=json";
  fetch(url)
    .then(res => res.json())
    .then(data => formatData(data));

  function formatData(data) {
    let unshuffledDeck = [];
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
      unshuffledDeck.push(card);
    }
    return unshuffledDeck;
  }
};
