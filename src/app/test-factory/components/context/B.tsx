import { Box, Button } from "@mui/material";
import { FC, useContext } from "react";
import { TestContextContext } from "./TestContextContext";
// import { useTestContext } from "./TestContextContext";

export const B: FC = () => {
  // #region hooks start
  const { count, setCount } = useContext(TestContextContext);
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <Button
        onClick={() => {
          setCount((pre) => {
            return pre + 1;
          });
        }}
      >
        Add count in context
      </Button>
      <Box>{`Count from Context --- ${count}`}</Box>
    </>
  );
  // #endregion render functions end
};
