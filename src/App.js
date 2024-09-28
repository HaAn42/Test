import React, { useState } from 'react';

function GameBoard() {
  const generatePoints = () => {
    const pointsArray = [];
    for (let i = 1; i <= 10; i++) {
      pointsArray.push({
        id: i,
        number: i,
        x: Math.floor(Math.random() * 85),
        y: Math.floor(Math.random() * 85),
      });
    }
    return pointsArray;
  };

  const [points, setPoints] = useState(generatePoints());
  const [allCleared, setAllCleared] = useState(false);

  const removePoint = (id, event) => {
    event.stopPropagation();
    const updatedPoints = points.filter(point => point.id !== id);
    setPoints(updatedPoints);
    if (updatedPoints.length === 0) {
      setAllCleared(true);
    }
  };

  const restartGame = () => {
    setPoints(generatePoints());
    setAllCleared(false);
  };

  return (
    <div className="game-board" style={{ textAlign: 'center' }}>
      <h1>Test</h1>
      <div className="points-container" style={{ position: 'relative', height: '400px', width: '400px', margin: '0 auto', border: '2px solid black' }}>
        {points.map(point => (
          <div
            key={point.id}
            className="point-wrapper"
            style={{
              position: 'absolute',
              left: `${point.x}%`,
              top: `${point.y}%`,
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)',
              transition: 'transform 0.2s ease'
            }}
            onClick={(event) => removePoint(point.id, event)}
          >
            <div className="point" style={{ width: '40px', height: '40px', backgroundColor: 'blue', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
              {point.number}
            </div>
          </div>
        ))}
      </div>
      <div className="status">
        {allCleared ? (
          <h2>ALL CLEARED</h2>
        ) : (
          <h2>Điểm: {points.length}</h2>
        )}
      </div>
      <button onClick={restartGame} className="restart-button" style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
        Restart
      </button>
    </div>
  );
}

export default GameBoard;