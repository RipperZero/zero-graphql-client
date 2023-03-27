import { makeVar } from "@apollo/client";

export type CounterVars = {
  counterNum: number;
};

export const counterVars = makeVar<CounterVars>({
  // default value
  counterNum: 0,
});
