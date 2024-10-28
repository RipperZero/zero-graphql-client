import { FC } from "react";
import { Divider } from "@mui/material";
import { IntervalView } from "./Interval";
import { IntervalByRefView } from "./IntervalByRef";
import { IntervalByClassView } from "./IntervalByClass";
import { IntervalByReducerView } from "./IntervalByReducer";
export const Interval: FC = () => {
  // hooks start
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <IntervalView />
      <Divider />
      <IntervalByRefView />
      <Divider />
      <IntervalByClassView />
      <Divider />
      <IntervalByReducerView />
    </>
  );
  // render functions end
};
