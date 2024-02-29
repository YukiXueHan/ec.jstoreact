import React, { useEffect } from 'react';
import './App.css';

function handleClick(elmt) {
  if (elmt.classList.contains('selected')) {
    elmt.className = 'box'
  } else {
    elmt.className = 'box selected'
  }
}

function App() {
  useEffect(() => {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box, index) => {
      box.addEventListener('click', () => {
        handleClick(box);

        const rowIndex = Math.floor(index / 3);
        const colIndex = index % 3;
        const adjacentIndices = [
          [rowIndex - 1, colIndex], // Up
          [rowIndex + 1, colIndex], // Down
          [rowIndex, colIndex - 1], // Left
          [rowIndex, colIndex + 1], // Right
        ];

        adjacentIndices.forEach((indices) => {
          const [row, col] = indices;
          const adjIndex = row * 3 + col;
          if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            handleClick(boxes[adjIndex]);
          }
        });
      });
    });
  }, []);

  return (
    <div className="container">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="box"></div>
      ))}
    </div>
  );
}

export default App;
