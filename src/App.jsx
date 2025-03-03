import { RecoilRoot, useRecoilValue } from "recoil";
import { todosAtomFamily } from "../src/store/atoms/counter.js";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Todo id={1} />
        <Todo id={2} />
        <Todo id={2} />
      </RecoilRoot>
    </div>
  );
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  return (
    <>
      {currentTodo.title}
      {currentTodo.description}
      <br />
    </>
  );
}

export default App;
