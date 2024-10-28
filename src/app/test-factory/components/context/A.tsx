import { Box } from "@mui/material";
import { FC, useEffect } from "react";

export const A: FC = () => {
  // #region hooks start
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    console.log("A render");
  });
  // #endregion useEffect functions end

  // #region logic functions start
  // #endregion logic functions end

  // #region render functions start
  return <Box>AAAAAA</Box>;
  // #endregion render functions end
};
