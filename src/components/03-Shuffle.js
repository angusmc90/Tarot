import React from "react";

function Shuffle(props) {
  return (
    <div id="shuffle" className="container-sm">
      Take a chance of Fate / Shuffle the Deck:
      <br />[ deck.gif ]
      <div className="row">
        <div className="col-sm-3" />
        <div className="col-sm-3">
          <button onClick={props.shuffleDeck}>Shuffle</button>
        </div>
        <div className="col-sm-3">
          <button>Cut Deck</button>
        </div>
        <div className="col-sm-3" />
      </div>
      <div className="row">
        <div className="col-sm-4" />
        <div className="col-sm-4">
          <button>Deal (New Reading)</button>
        </div>
        <div className="col-sm-4" />
      </div>
    </div>
  );
}

export default Shuffle;
