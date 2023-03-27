import { useReactiveVar } from "@apollo/client";
import { produce } from "immer";
import { Recipe } from "@common.global";
import { useCallback } from "react";
import {
  medelikaruSettoVars,
  MedelikaruSettoVars,
} from "../makeVar/medelikaruSettoVars";

export const useMedelikaruSettoState = () => {
  /**  メディカルセットのグローバル状態 */
  const medelikaruSettoState = useReactiveVar(medelikaruSettoVars);
  /**  メディカルセットのグローバル状態 修正メソッド*/
  const setMedelikaruSettoState = useCallback(
    (recipe: Recipe<MedelikaruSettoVars>) => {
      medelikaruSettoVars(produce(medelikaruSettoVars(), recipe));
    },
    [],
  );

  return { medelikaruSettoState, setMedelikaruSettoState } as const;
};

export type MedelikaruSettoState = ReturnType<
  typeof useMedelikaruSettoState
>["medelikaruSettoState"];
export type SetMedelikaruSettoState = ReturnType<
  typeof useMedelikaruSettoState
>["setMedelikaruSettoState"];
