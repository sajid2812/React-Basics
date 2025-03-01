import { useState, createContext, useContext } from "react";

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

function App() {
  return (
    <div>
      <CountContextProvider>
        <Value />
        <Increase />
        <Decrease />
      </CountContextProvider>
    </div>
  );
}

function Increase() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount((count) => count + 1)}>+</button>;
}

function Decrease() {
  const { setCount } = useContext(CountContext);
  return <button onClick={() => setCount((count) => count - 1)}>-</button>;
}

function Value() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

export default App;
