import { FC } from "react";
import { Divider } from "@mui/material";
import { ClassCounter } from "./class/Counter.container";
import { FCCounter } from "./func/Counter.container";

const Counter: FC = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <ClassCounter />
      <Divider style={{ margin: "10px 0" }} />
      <FCCounter />
    </>
  );
  // #endregion render functions end
};

export { Counter };
