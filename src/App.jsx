import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "../src/store/atoms/counter.js";

function App() {
  const networkNotificationAtom = useRecoilValue(networkAtom);

  return (
    <div>
      <RecoilRoot>
        <Buttons />
        <Counter />
        <IsEven />
      </RecoilRoot>
    </div>
  );
}

export default App;
