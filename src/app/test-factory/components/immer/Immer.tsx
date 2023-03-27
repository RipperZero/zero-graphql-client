import { Box, Button } from "@mui/material";
import { FC, useState } from "react";
import { produce } from "immer";

export const Immer: FC = () => {
  // #region hooks start
  const [count, setCount] = useState<{ a: number }>({ a: 0 });
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleOnClick = () => {
    setCount(
      produce((draft) => {
        console.log(draft.a);
        draft.a += 1;
        console.log(draft.a);
      }),
    );
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Box>
      <Box>{count.a}</Box>
      <Button onClick={handleOnClick}>Add</Button>
    </Box>
  );
  // #endregion render functions end
};
