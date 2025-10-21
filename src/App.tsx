import { useEffect, useState } from "react";
import { useActions } from "@neynar/react";

const App = () => {
  const [tokens, setTokens] = useState<number>(() => {
    const saved = localStorage.getItem("token_count");
    return saved ? parseInt(saved) : 0;
  });

  const [startTime, setStartTime] = useState<number | null>(null);
  const [remainingTime, setRemainingTime] = useState<number>(10);
  const [isActive, setIsActive] = useState(false);

  const { ready } = useActions();

  // Signal ready to Farcaster Mini App SDK
  useEffect(() => {
    ready();
  }, []);

  useEffect(() => {
    document.title = `Tokens: ${tokens}`;
  }, [tokens]);

  // Handle countdown
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive && startTime !== null) {
      timer = setInterval(() => {
        const secondsElapsed = Math.floor((Date.now() - startTime) / 1000);
        const timeLeft = 10 - secondsElapsed;
        if (timeLeft > 0) {
          setRemainingTime(timeLeft);
        } else {
          setIsActive(false);
          setRemainingTime(0);
        }
      }, 500);
    }
    return () => clearInterval(timer);
  }, [isActive, startTime]);

  const handleTap = () => {
    if (!isActive) {
      setStartTime(Date.now());
      setRemainingTime(10);
      setIsActive(true);
    }
    if (isActive) {
      const newCount = tokens + 1;
      setTokens(newCount);
      localStorage.setItem("to
