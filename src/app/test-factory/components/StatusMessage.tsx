import { FC, useState, useEffect } from "react";

const useSubscription = (
  subscribe: (handler: () => void) => void,
  unsubscribe: (handler: () => void) => void,
  getValue: () => number | boolean,
) => {
  const [state, setState] = useState(getValue());

  useEffect(() => {
    const handleChange = () => {
      setState(getValue());
      return 123;
    };

    subscribe(handleChange);

    return () => {
      unsubscribe(handleChange);
    };
  });

  return state;
};

const useWindowWidth = () => {
  const width = useSubscription(
    (handler) => window.addEventListener("resize", handler),
    (handler) => window.removeEventListener("resize", handler),
    () => window.innerWidth,
  );

  return width;
};

const useNetworkStatus = () => {
  const isOnline = useSubscription(
    (handler) => {
      window.addEventListener("online", handler);
      window.addEventListener("offline", handler);
    },
    (handler) => {
      window.removeEventListener("online", handler);
      window.removeEventListener("offline", handler);
    },
    () => navigator.onLine,
  );

  return isOnline;
};

export const StatusMessageView: FC = () => {
  // hooks start
  const width = useWindowWidth();
  const isOnline = useNetworkStatus();
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start

  // logic functions end

  // render functions start
  return (
    <div>
      <p style={{ color: "red" }}>{"StatusMessage"}</p>
      <p>{`Window width is ${width}`}</p>
      <p>{`You are ${isOnline ? "online" : "offline"}`}</p>
    </div>
  );
  // render functions end
};
