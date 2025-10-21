import React, { useState, useEffect } from 'react';

const App = () => {
  const [tokens, setTokens] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  const handleStart = () => {
    setTokens(0);
    setTimeLeft(10);
    setIsPlaying(true);
  };

  const handleTap = () => {
    if (isPlaying && timeLeft > 0) {
      setTokens((prev) => prev + 1);
    }
  };

  const handleReset = () => {
    setTokens(0);
    setTimeLeft(0);
    setIsPlaying(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Tap to Earn Tokens</h1>
      {isPlaying ? (
        <>
          <p style={styles.timer}>Time Left: {timeLeft}s</p>
          <p style={styles.tokens}>Tokens: <strong>{tokens}</strong></p>
          <button style={styles.tap} onClick={handleTap}>🟡 Tap</button>
        </>
      ) : (
        <>
          <p style={styles.tokens}>Your Score: <strong>{tokens}</strong></p>
          <button style={styles.start} onClick={handleStart}>▶️ Start Game</button>
          {tokens > 0 && (
            <button style={styles.reset} onClick={handleReset}>🔁 Reset</button>
          )}
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    marginTop: '10%',
    fontFamily: 'sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  timer: {
    fontSize: '1.4rem',
    marginBottom: '10px',
  },
  tokens: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  tap: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginRight: '10px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
  },
  start: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    marginRight: '10px',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
  },
  reset: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    boxShadow: '0px 4px 6px rgba(0,0,0,0.2)',
  },
};

export default App;
