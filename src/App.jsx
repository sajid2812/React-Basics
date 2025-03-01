import { useState } from "react";
import { useFetch } from "./useFetch.js";

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/" + currentPost
  );
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  );
}

export default App;
