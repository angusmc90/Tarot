import React from "react";

function DeckActions(props) {
  return (
    <div id="shuffle" className="container-sm">
      Take a chance of Fate / Shuffle the Deck:
      <br />[ deck.gif ]
      <br />
      {/* deck select */}
      <div className="row">
        <div className="col-sm-12">
          <select>
            <option>Select</option>
            <option>Two Card</option>
            <option>three card</option>
            <option>other</option>
          </select>
        </div>
      </div>
      {/* card spread desc. */}
      <p>
        ADD A READ MORE EXPAND LINK.... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Feugiat in fermentum posuere urna nec. A lacus vestibulum
        sed arcu non odio. Lorem dolor sed viverra ipsum nunc aliquet bibendum
        enim. Id consectetur purus ut faucibus pulvinar elementum integer enim
        neque. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh.
        Quis blandit turpis cursus in hac habitasse platea dictumst quisque.
        <br />
        <br />
        Placerat in egestas erat imperdiet sed euismod nisi porta. Phasellus
        vestibulum lorem sed risus ultricies tristique. Gravida in fermentum et
        sollicitudin ac orci phasellus. Dolor morbi non arcu risus quis varius
        quam quisque id. At elementum eu facilisis sed odio morbi quis commodo
        odio. Scelerisque felis imperdiet proin fermentum leo vel orci porta
        non. Turpis egestas integer eget aliquet nibh praesent. Semper feugiat
        nibh sed pulvinar proin gravida hendrerit lectus. Nulla aliquet enim
        tortor at auctor urna nunc. Pellentesque id nibh tortor id aliquet
        lectus. Interdum consectetur libero id faucibus nisl tincidunt eget
        nullam. Neque viverra justo nec ultrices dui sapien. Vitae tortor
        condimentum lacinia quis vel. Semper auctor neque vitae tempus quam
        pellentesque nec nam. Vitae suscipit tellus mauris a diam maecenas sed.
        Risus in hendrerit gravida rutrum quisque non tellus orci.
      </p>
      {/* shuffle & cut deck */}
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
      {/* deal cards / new deck */}
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

export default DeckActions;
