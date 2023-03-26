import { makeVar } from "@apollo/client";

export type MedelikaruSettoVars = {
  /** 画面表示するか否か */
  isViewOpen: boolean;
  selectedMedelikarusettoId: string;
};

export const medelikaruSettoVars = makeVar<MedelikaruSettoVars>({
  /** 初期値 表示しない */
  isViewOpen: false,
  selectedMedelikarusettoId: "planCode",
});
