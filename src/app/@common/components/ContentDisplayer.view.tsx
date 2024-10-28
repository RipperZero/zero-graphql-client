import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";

type ContentDisplayerViewProps = {
  index: any;
  value: any;
};

export const ContentDisplayerView: FC<
  PropsWithChildren<ContentDisplayerViewProps>
> = ({ index, value, children }) => {
  // hooks start
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  // return <Box hidden={value !== index}>{children}</Box>;
  return value === index ? <Box>{children}</Box> : null;
  // render functions end
};
