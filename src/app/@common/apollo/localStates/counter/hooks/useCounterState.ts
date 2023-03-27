import { useCallback } from "react";
import { produce } from "immer";
import { useReactiveVar } from "@apollo/client";
import { Recipe } from "@common.global";
import { CounterVars, counterVars } from "../makeVar/counterVars";

export const useCounterState = () => {
  const counterState = useReactiveVar(counterVars);

  const setCounterState = useCallback((recipe: Recipe<CounterVars>) => {
    counterVars(produce(counterVars(), recipe));
  }, []);

  return { counterState, setCounterState } as const;
};

export type CounterState = ReturnType<typeof useCounterState>["counterState"];
export type SetCounterState = ReturnType<
  typeof useCounterState
>["setCounterState"];
