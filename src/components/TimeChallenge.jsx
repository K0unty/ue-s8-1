import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {}

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>Fucked!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? "😡Stop" : "✅Start"}
        </button>
      </p>
      <p className={timerStarted ? "▶️active" : undefined}>
        {timerStarted ? "🔢Timeis running" : "❌Timer Inactive"}
      </p>
    </section>
  );
}
