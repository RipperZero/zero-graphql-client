declare module "@common.global" {
  import { Nothing, WritableDraft } from "immer/dist/internal";
  export type Recipe<Vars> = (
    draft: WritableDraft<Vars>,
  ) =>
    | WritableDraft<Vars>
    | void
    | undefined
    | (WritableDraft<Vars> extends undefined ? Nothing : never);
}
