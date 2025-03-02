import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "../src/store/atoms/counter.js";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

function Counter() {
  return (
    <div>
      <CurrentCount />
      <Increase />
      <Decrease />
    </div>
  );
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);
  return <div>{count}</div>;
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((count) => count + 1);
  }
  return <button onClick={increase}>+</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((count) => count - 1);
  }
  return <button onClick={decrease}>-</button>;
}

export default App;
