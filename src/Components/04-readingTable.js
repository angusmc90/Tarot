import React from "react";

function ReadingTable(props) {
  const spreadLength = 3;

  const cardsDealt = props.deck.slice(0, spreadLength);

  const readingSpread = cardsDealt.map((d, i) => {
    return (
      //make col-# divisible by 12?
      <div className="col-4">
        <img src={props.deck[i].pic} alt={props.deck[i].cardName} />
        <br />
        {props.deck[i].cardName}
      </div>
    );
  });

  return (
    <div id="readingTable" className="container-sm">
      Your Reading:
      <br />
      <div className="row">{readingSpread}</div>
    </div>
  );
}

export default ReadingTable;
