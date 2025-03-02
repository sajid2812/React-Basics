import { useState } from "react";
import { useFetch } from "./useFetch.js";
import { usePrev } from "./usePrev.js";
import { useDebounce } from "./useDebounce.js";

function App() {
  function getData() {
    fetch("https://jsonplaceholder.typicode.com/todos/1");
  }
  const debouncedFn = useDebounce(getData);

  return (
    <>
      <input type="text" onChange={debouncedFn} />
    </>
  );
}

export default App;
