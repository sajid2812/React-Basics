import { useState } from "react";
import { useFetch } from "./useFetch.js";

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/" + currentPost
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      {JSON.stringify(finalData)}
    </div>
  );
}

export default App;
