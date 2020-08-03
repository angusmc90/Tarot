import React from "react";

function ThreeCardTable(props) {
  const cardsDealt = props.cardsDealt;

  const readingSpread = cardsDealt.map((d, i) => {
    return (
      //make col-# divisible by 12?
      <div className="col-4" key={i}>
        <img src={cardsDealt[i].pic} alt={cardsDealt[i].cardName} />
        <br />
        {cardsDealt[i].cardName}
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

export default ThreeCardTable;
