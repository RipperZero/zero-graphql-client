import { FC, useCallback, useEffect } from "react";
import { useCounterState } from "app/@common/apollo";
import { CounterView } from "./Counter.view";

// @see https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/
export const CounterContainer: FC = () => {
  // hooks start
  const { counterState, setCounterState } = useCounterState();
  // hooks end

  // useEffect functions start
  useEffect(() => {
    setTimeout(() => {
      console.log("Func component counterNum---" + counterState.counterNum);
    }, 3000);
  }, [counterState.counterNum]);
  // useEffect functions end

  // logic functions start
  const onClickIncrement = useCallback(() => {
    setCounterState((draftState) => {
      draftState.counterNum += 1;
    });
  }, [setCounterState]);

  const onClickDecrement = useCallback(() => {
    setCounterState((draftState) => {
      draftState.counterNum -= 1;
    });
  }, [setCounterState]);

  const onClickAddAmount = useCallback(
    (amount: number = 0) => {
      setCounterState((draftState) => {
        draftState.counterNum += amount;
      });
    },
    [setCounterState],
  );

  const onClickAddAsync = useCallback(
    (amount: number = 0) => {
      setTimeout(() => {
        setCounterState((draftState) => {
          draftState.counterNum += amount;
        });
      }, 1000);
    },
    [setCounterState],
  );
  console.log("render");

  const onClickAlertBtn = useCallback(() => {
    setTimeout(() => {
      alert(
        "Func component render the counterNum is " + counterState.counterNum,
      );
    }, 3000);
  }, [counterState.counterNum]);
  // logic functions end

  // render functions start
  return (
    <CounterView
      counterNum={counterState.counterNum}
      onClickIncrement={onClickIncrement}
      onClickDecrement={onClickDecrement}
      onClickAddAmount={onClickAddAmount}
      onClickAddAsync={onClickAddAsync}
      onClickAlertBtn={onClickAlertBtn}
    />
  );
  // render functions end
};
