import { FC, memo } from "react";
import { Box } from "@mui/material";
import { useRerender } from "./useRerender";

type HelloProps = {
  name: string;
  //   onClick: () => void;
};

export const Hello: FC<HelloProps> = memo(({ name }) => {
  console.log("HelloHelloHelloHello");
  // hooks start
  const onClickHandler = useRerender(1);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return <Box>hello {name}</Box>;
  // render functions end
});
