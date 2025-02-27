import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      <Counter count={count}></Counter>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

function Counter(props) {
  useEffect(() => {
    console.log("mount");

    return function () {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    console.log("count has changed");
    return function (){
      console.log('umount running')
    }
  }, [props.count]);

  return <div>Counter {props.count}</div>;
}

export default App;
