import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Components/01-Header";
import Cosmos from "./Components/02-Cosmos";
import Shuffle from "./Components/03-Shuffle";
import ReadingTable from "./Components/04-readingTable";
import ReadingExplain from "./Components/05-readingExplain";
import Footer from "./Components/06-Footer";
import Spacer from "./Components/99-Spacer";

export default function App() {
  const [deck, setDeck] = useState([
    {
      arcana: "Major",
      cardNum: "00",
      suit: "Major Arcana",
      cardName: "The Fool",
      pic: "imgURL",
      keyWords: "keyWords",
      meaning: "meaning",
      past: "past",
      present: "present",
      future: "future",
      yesno: "yes or no"
    }
  ]);

  // CALL ON GOOGLE SHEET
  useEffect(() => {
    let url =
      "https://spreadsheets.google.com/feeds/list/1XL4dzpq_l5geNq7nPvIcmnPd9V_4cr8Te4RMbwfTHhY/1/public/values?alt=json";

    fetch(url)
      .then(res => res.json())
      .then(data => formatData(data));

    function formatData(data) {
      //pull cards in order of sheet list
      let cardsArr = [];
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
          yesno: data.feed.entry[i].gsx$yesno.$t
        };
        cardsArr.push(card);
      }
      setDeck(cardsArr);
    }
  }, []);

  const spreadLength = 3;
  // will need to lift this up

  const cardsDealt = deck.slice(0, spreadLength);
  // will need to lift this up

  return (
    <div className="App">
      <Header />
      <Spacer />
      <Cosmos />
      <Spacer />
      <Shuffle />
      <Spacer />
      <ReadingTable cardsDealt={cardsDealt} />
      <Spacer />
      <ReadingExplain cardsDealt={cardsDealt} />
      <Spacer />
      <Footer />
    </div>
  );
}
