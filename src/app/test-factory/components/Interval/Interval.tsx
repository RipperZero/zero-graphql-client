import { FC, useState, useEffect } from "react";

export const IntervalView: FC = () => {
  // hooks start
  const [count, setCount] = useState(0);
  // hooks end

  // useEffect functions start
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <div>函数式更新</div>
      <div>{count}</div>
    </>
  );
  // render functions end
};
