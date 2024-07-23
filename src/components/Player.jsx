import { useState, useRef } from "react";

export default function Player() {
  // useref
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState("");

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome 💋 {enteredPlayerName ?? "👅PuusyLiqr"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
