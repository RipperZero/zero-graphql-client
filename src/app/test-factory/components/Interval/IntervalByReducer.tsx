import { FC, useReducer, useEffect, Reducer } from "react";

type State = {
  count: number;
  step: number;
};
// action → string
// payload → diapatch激发action时 携带的数据(closure)
type Action = { type: "tick" } | { type: "step"; payload: State };

const initialState: State = {
  count: 0,
  step: 1,
};

const reducer: Reducer<State, Action> = (preState, action) => {
  const { count, step } = preState;

  if (action.type === "tick") {
    return { count: count + step, step };
    // return { ...preState, count: preState.count + preState.step };
  }

  if (action.type === "step") {
    return { count, step: action.payload.step };
    // return { ...preState, step: action.step };
  }

  throw new Error();
};

export const IntervalByReducerView: FC = () => {
  // hooks start
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState,
  );
  const { count, step } = state;
  // hooks end

  // useEffect functions start
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <div>useReducer</div>
      <div>{count}</div>
      <input
        value={step}
        onChange={(event) => {
          dispatch({
            type: "step",
            payload: { count: count, step: Number(event.target.value) },
          });
        }}
      />
    </>
  );
  // render functions end
};
