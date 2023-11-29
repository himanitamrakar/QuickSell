// Column.js

// Inside Column.js
import React from "react";
import Card from "./Card";

const Column = ({ title, cards }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="cards">
        {/* Render cards based on the 'cards' prop */}
        {cards.map((card) => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;
