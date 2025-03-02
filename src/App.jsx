import { useState } from "react";
import { useFetch } from "./useFetch.js";
import { usePrev } from "./usePrev.js";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((curr) => curr + 1);
        }}
      >
        Click me
      </button>
      <p>The prev value was {prev}</p>
    </>
  );
}

export default App;
