import React from "react";

function ReadingExplain(props) {
  const cardsDealt = props.cardsDealt;

  const explainReading = cardsDealt.map((d, i) => {
    return (
      <div className="row" key={i}>
        <div className="col-sm-1" />
        <div className="col-sm-1"> Placement Title </div>
        <div className="col-sm-5 readingDescPic">
          <img src={cardsDealt[i].pic} alt={cardsDealt[i].cardName} />
        </div>
        <div className="col-sm-4 readingDesc">
          {cardsDealt[i].cardName}
          <br />
          {cardsDealt[i].meaning}
          <br />
          <br />
          Placed at position {i}
          <br />
          Placement Desc
        </div>
        <div className="col-sm-1" />
      </div>
    );
  });

  return (
    <div id="readingExplain" className="container-sm">
      What your reading means:
      <br />
      {explainReading}
    </div>
  );
}

export default ReadingExplain;
