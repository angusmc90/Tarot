import React from "react";

function ReadingTable() {
  return (
    <div id="readingTable" className="container-sm">
      Your Reading:
      <br />
      <div className="row">
        <div className="col-4">
          <img
            src="https://www.trustedtarot.com/img/cards/the-magician.png"
            alt="card"
          />
          <br />
          Card Name
        </div>
        <div className="col-4">
          <img
            src="https://www.trustedtarot.com/img/cards/the-magician.png"
            alt="card"
          />
          <br />
          Card Name
        </div>
        <div className="col-4">
          <img
            src="https://www.trustedtarot.com/img/cards/the-magician.png"
            alt="card"
          />
          <br />
          Card Name
        </div>
      </div>
    </div>
  );
}

export default ReadingTable;
