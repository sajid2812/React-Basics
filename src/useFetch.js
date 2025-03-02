import { useEffect, useState } from "react";

export function useFetch(url) {
  const [finalData, setFinalData] = useState({});
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url]);

  useEffect(() => {
    const timer = setInterval(getDetails, 10 * 1000);
    setTimer(timer);

    return function () {
      clearInterval(timer);
    };
  }, []);

  return {
    finalData,
    loading,
  };
}
