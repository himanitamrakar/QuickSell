// Card.js
// Inside Card.js
// Inside Card.js
// Inside Card.js
import React from "react";

const priorityMap = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

const Card = ({ data }) => {
  const { id, tag, title } = data;
  const circleColor = getRandomColor(); // Function to get a random color for the circle

  return (
    <div className="card">
      <div className="card-header">
        <p
          className="card-id"
          style={{ backgroundColor: "white", color: "darkgray" }}
        >
          {id}
        </p>
        <div className="title-circle" style={{ backgroundColor: circleColor }}>
          {getTitleInitials(title)}
        </div>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {tag && (
          <p className="feature-request-text" style={{ color: "#777" }}>
            Feature Request
          </p>
        )}
        {/* Add more details if needed */}
      </div>
    </div>
  );
};

// Helper function to get random color
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Helper function to get the first and last letters of the title
const getTitleInitials = (title) => {
  const words = title.split(" ");
  const firstLetter = words[0].charAt(0).toUpperCase();
  const lastWord = words[words.length - 1];
  const lastLetter = lastWord.charAt(0).toUpperCase();
  return firstLetter + lastLetter;
};

export default Card;
