import { FC } from "react";
import { A } from "./A";
import { B } from "./B";
import { TestContextProvider } from "./TestContextContext";

type TestContextProps = {};

export const TestContext: FC<TestContextProps> = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <TestContextProvider>
        <A />
        <B />
      </TestContextProvider>
    </>
  );
  // #endregion render functions end
};
