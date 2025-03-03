import { useEffect } from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
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
  const networkCount = useRecoilValue(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

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
