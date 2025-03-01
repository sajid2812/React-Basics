import { useState, createContext, useContext } from "react";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider
        value={{
          bulbOn: bulbOn,
          setBulbOn: setBulbOn,
        }}
      >
        <LightBulb />
      </BulbContext.Provider>
    </div>
  );
}

function LightBulb() {
  return (
    <div>
      <BulbState></BulbState>
      <ToggleBulbState></ToggleBulbState>
    </div>
  );
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);
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
