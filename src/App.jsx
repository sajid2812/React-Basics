import { useEffect, useState } from "react";
import { useFetch } from "./useFetch.js";
import { usePrev } from "./usePrev.js";
import { useDebounce } from "./useDebounce.js";

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useDebounce(inputVal, 300);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("expensive operation");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change} />
    </>
  );
}

export default App;
