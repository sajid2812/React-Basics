import { useState, useRef } from "react";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbState bulbOn={bulbOn}></BulbState>
      <ToggleBulbState setBulbOn={setBulbOn}></ToggleBulbState>
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
  function toggleBulb() {
    setBulbOn((currState) => !currState);
  }
  return (
    <div>
      <button onClick={toggleBulb}>Toggle</button>
    </div>
  );
}

export default App;
