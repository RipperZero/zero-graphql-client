import { FC, useState, useEffect, useRef } from "react";

// @see https://codesandbox.io/s/105x531vkq?file=/src/index.js:355-387
// @see https://github1s.com/alibaba/hooks/blob/master/packages/hooks/src/useInterval/index.ts

const useInterval = (callBack: () => void, delay: number | null) => {
  const savedCallBack = useRef<() => void>();

  // Remember the latest function.
  useEffect(() => {
    savedCallBack.current = callBack;
  }, [callBack]);

  useEffect(() => {
    if (delay) {
      const tiker = () => {
        savedCallBack.current?.();
      };

      // const timer = setInterval(() => {
      //   savedCallBack.current?.();
      // }, delay);
      const timer = setInterval(tiker, delay);

      return () => clearInterval(timer);
    }
  }, [delay]);
};

export const IntervalByRefView: FC = () => {
  // hooks start
  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(true);

  useInterval(() => setCount(count + 1), isRunning ? delay : null);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <div>useRef</div>
      <div>{count}</div>
      <br />
      <div>
        <input
          type="checkbox"
          checked={isRunning}
          onChange={(event) => {
            setIsRunning(event.target.checked);
          }}
        />
        Running
      </div>
      <input
        value={delay}
        onChange={(event) => setDelay(Number(event.target.value))}
      />
    </>
  );
  // render functions end
};
