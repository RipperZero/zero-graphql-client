import { FC, useEffect, useState } from "react";
import { Divider, Button } from "@mui/material";
import { CounterContainer as ClassCounter } from "./class/Counter.container";
import { CounterContainer as FuncCounter } from "./func/Counter.container";

export const Counter: FC = () => {
  // hooks start
  // const [numberA, setNumberA] = useState(0);
  // const [numberB, setNumberB] = useState(0);
  // hooks end

  // useEffect functions start
  useEffect(() => {
    console.log("renderrenderrenderrenderrenderrender");
  });
  // useEffect functions end

  // logic functions start
  // const handleOnClick = () => {
  //   setNumberA((pre) => {
  //     return pre + 1;
  //   });

  //   setNumberB((pre) => {
  //     return pre + 2;
  //   });
  // };

  // const handleOnClickAsync = () => {
  //   setTimeout(() => {
  //     setNumberA((pre) => {
  //       return pre + 1;
  //     });
  //     setNumberA((pre) => {
  //       return pre + 1;
  //     });

  //     setNumberB((pre) => {
  //       return pre + 2;
  //     });
  //     setNumberB((pre) => {
  //       return pre + 2;
  //     });
  //   }, 3000);
  // };
  // logic functions end

  // render functions start
  return (
    <>
      <ClassCounter />
      <Divider />
      <FuncCounter />
    </>
    // <div>
    //   <div>{`numberA---${numberA}`}</div>
    //   <div>{`numberB---${numberB}`}</div>
    //   <Button onClick={handleOnClick}>ADD</Button>
    //   <Button onClick={handleOnClickAsync}>ADD ASYNC</Button>
    // </div>
  );
  // render functions end
};
