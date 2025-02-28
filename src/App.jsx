import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(1);
  const timer = useRef();

  function startClock() {
    timer.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }
  function endClock() {
    clearInterval(timer.current);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={endClock}>Stop</button>
    </div>
  );
}

export default App;
