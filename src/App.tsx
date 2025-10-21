import { useState, useEffect } from "react";

function App() {
  const [tokens, setTokens] = useState(() => {
    const saved = localStorage.getItem("token_count");
    return saved ? parseInt(saved) : 0;
  });

  const handleTap = () => {
    const newCount = tokens + 1;
    setTokens(newCount);
    localStorage.setItem("token_count", newCount.toString());
  };

  useEffect(() => {
    document.title = `Tokens: ${tokens}`;
  }, [tokens]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 Tap to Earn Tokens</h1>
      <p style={styles.tokens}>
        You have earned <strong>{tokens}</strong> tokens
      </p>
      <button style={styles.button} onClick={handleTap}>
        🌕 Tap
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center" as const,
    marginTop: "10%",
    fontFamily: "sans-serif",
  },
  heading: {
    fontSize: "2.5rem",
  },
  tokens: {
    fontSize: "1.5rem",
    marginBottom: "20px",
  },
  button: {
    padding: "15px 40px",
    fontSize: "1.2rem",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  },
};

export default App;
