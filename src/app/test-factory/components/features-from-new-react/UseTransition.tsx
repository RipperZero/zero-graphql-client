import { FC, useState, useTransition, ChangeEvent, useEffect } from "react";

type UseTransitionProps = {};

const str =
  "科・グループ名が重複しています。\n科・グループ名を変更してください。";

export const UseTransition: FC<UseTransitionProps> = () => {
  // #region hooks start
  // const [isPending, startTransition] = useTransition();

  // const [inputValue, setInputValue] = useState("");
  // const [count, setCount] = useState(0);
  // #endregion hooks end

  // #region useEffect functions start
  // useEffect(() => {
  //   let ignore = false;

  //   setInterval(() => {
  //     if (!ignore) {
  //       setCount((pre) => {
  //         return pre + 1;
  //       });
  //     }
  //   }, 1000);

  //   return () => {
  //     ignore = true;
  //   };
  // }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   startTransition(() => {
  //     setInputValue(event.target.value);
  //   });
  // };
  // #endregion logic functions end

  // #region render functions start
  return (
    // <>
    //   <div>Test useTransition</div>
    //   <div>{`isPending-----${isPending}`}</div>
    //   <div>{`count-----${count}`}</div>

    //   <input value={inputValue} onChange={handleInputChange} />
    // </>
    <div>
      <div style={{ whiteSpace: "pre-wrap" }}>{str}</div>
      <div>
        <pre>{str}</pre>
      </div>
    </div>
  );
  // #endregion render functions end
};
