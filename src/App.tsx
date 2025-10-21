import { useEffect, useState } from "react";

function App() {
  const [tokens, setTokens] = useState(() => {
    const saved = localStorage.getItem("token_count");
    return saved ? parseInt(saved) : 0;
  });

  const [timeLeft, setTimeLeft] = useState(10);
  const [isGameActive, setIsGameActive] = useState(false);

  const handleTap = () => {
    if (isGameActive) {
      const newCount = tokens + 1;
      setTokens(newCount);
      localStorage.setItem("token_count", newCount.toString());
    }
  };

  const startGame = () => {
    setTimeLeft(10);
    setIsGameActive(true);
    setTokens(0);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isGameActive && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }

    return () => clearTimeout(timer);
  }, [timeLeft, isGameActive]);

  useEffect(() => {
    document.title = `Tokens: ${tokens}`;
  }, [tokens]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🎯 Tap to Earn Tokens</h1>
      <p style={styles.tokens}>You have earned {tokens} tokens</p>

      {isGameActive ? (
        <>
          <p style={styles.timer}>⏱️ Time left: {timeLeft}s</p>
          <button style={styles.tap} onClick={handleTap}>
            🚀 Tap
          </button>
        </>
      ) : (
        <button style={styles.start} onClick={startGame}>
          ▶️ Start Game
        </button>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    marginTop: "10%",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  tokens: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  timer: {
    fontSize: "1.3rem",
    marginBottom: "20px",
    color: "#ff6600",
  },
  tap: {
    padding: "15px 40px",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  },
  start: {
    padding: "15px 40px",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  },
};

export default App;
