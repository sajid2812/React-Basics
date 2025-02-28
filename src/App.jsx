import { useRef } from "react";

function App() {
  const inputRef = useRef();
  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      Signup
      <input ref={inputRef} id="name" type="text" />
      <button onClick={focusInput}>Submit</button>
    </div>
  );
}

export default App;
