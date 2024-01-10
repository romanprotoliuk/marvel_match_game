import React from "react";
import GameCard from "./GameCard";

const GameGrid = ({ level, characters }) => {
  const isEasy = level === "easy";
  const gridSize = isEasy ? 16 : 36;
  const gridClass = isEasy ? "easy-grid" : "grid";

  const handleCardClick = (id) => {
    console.log(`Card clicked: ${id}`);
  };

  console.log("character", characters);

  // Example contents for each card - replace with content
  const cardContents = new Array(gridSize)
    .fill(null)
    .map((_, i) => `Content ${i + 1}`);

  return (
    <div className={gridClass}>
      {[...Array(gridSize)].map((_, index) => (
        <GameCard
          key={index}
          id={`${level}-${index}`}
          content={cardContents[index]}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default GameGrid;