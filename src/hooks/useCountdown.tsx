import { getTimeInUnit } from "@/lib/utils";
import { useEffect, useState } from "react";

const useCountdown = (
  initialValue: number,
  updateIn: number = 1000 * 60 * 60
) => {
  const [data, setData] = useState(getTimeInUnit(Date.now() - initialValue));

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = Date.now() - initialValue;
      setData(getTimeInUnit(remainingTime));
    }, updateIn);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
  };
};

export default useCountdown;
