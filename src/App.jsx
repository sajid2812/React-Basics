import { useState, useEffect } from "react";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setCounterVisible((counterVisible) => !counterVisible);
    }, 5000);
  }, []);
  return <div>hi {counterVisible ? <Counter></Counter> : null} hello</div>;
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(function () {
    const counter = setInterval(function () {
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
    return function () {
      clearInterval(counter);
    };
  }, []);

  return (
    <div>
      <h1 id="text">{count}</h1>
    </div>
  );
}

export default App;
