import { FC, useState } from "react";
import { Box, Button } from "@mui/material";
import { Hello } from "./Hello";
import { useRerender } from "./useRerender";

type RerenderProps = {};

export const Rerender: FC<RerenderProps> = () => {
  console.log("RerenderRerenderRerender");
  // hooks start
  const [count, setCount] = useState(0);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  useRerender(count);

  // render functions start
  return (
    <>
      <Box>
        <Hello name="React" />
        <Box>{count}</Box>
        <Button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Add
        </Button>
      </Box>
    </>
  );
  // render functions end
};
