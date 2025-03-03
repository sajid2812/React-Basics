import { useEffect } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  notifications,
  totalNotificationSelector,
} from "../src/store/atoms/counter.js";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    axios.get("https://google.com").then((res) => {
      setNetworkCount(res.data);
    });
  }, []);

  return (
    <>
      <button>Home</button>
      <button>
        My network (
        {networkCount.networks >= 100 ? "99+" : networkCount.networks})
      </button>
      <button>Jobs ({networkCount.jobs})</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
