import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";

export const TestContextContext = createContext<{
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}>({
  count: 0,
  setCount: () => 0,
});

export const TestContextProvider: PropsWithChildren<FC<any>> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const ctx = {
    count: count,
    setCount: setCount,
  };

  return (
    <TestContextContext.Provider value={ctx}>
      {children}
    </TestContextContext.Provider>
  );
};

// export const useTestContext = () => {
//   return useContext(TestContextContext);
// };
