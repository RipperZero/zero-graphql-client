import { FC, useState } from "react";

export const BatchUpdateView: FC = () => {
  // hooks start
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  const handleClickBtnA = () => {
    setCountA(countA + 1);
    console.log(countA);
    setCountA(countA + 1);
    console.log(countA);
    setCountA(countA + 1);
    console.log(countA);
  };

  const handleClickBtnB = () => {
    setCountB((pre) => pre + 1);
    console.log(countB);
    setCountB((pre) => pre + 1);
    console.log(countB);
    setCountB((pre) => pre + 1);
    console.log(countB);
  };
  // logic functions end

  // render functions start
  return (
    <div>
      <div>
        <p>{countA}</p>
        <button onClick={handleClickBtnA}>BtnA</button>
      </div>
      <div>
        <p>{countB}</p>
        <button onClick={handleClickBtnB}>BtnB</button>
      </div>
    </div>
  );
  // render functions end
};
