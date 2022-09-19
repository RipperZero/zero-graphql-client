import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../config";

type AppPath = keyof typeof APP_PATHS;

/**
 * useNextPage
 * 指定のページへジャンプする
 * @returns goNextPage()
 * @example
 * const goNextPage = useNextPage();
 * // ...
 * goNextPage("XX")  // jump
 * @author FXS)zhang.puming
 */
export const useNextPage = () => {
  const navigate = useNavigate();
  const goNextPage = (path: AppPath) => {
    navigate(APP_PATHS[path]);
  };
  return goNextPage;
};

/**
 * useBackPage
 * 前のページへ戻る
 * @returns goBack()
 * @example
 * const goBack = useBackPage();
 * // ...
 * goBack()  // jump
 * @author FXS)zhang.puming
 */
export const useBackPage = (callBackFn: () => void = () => {}) => {
  const navigate = useNavigate();
  const goBack = () => {
    callBackFn();
    navigate(-1);
  };
  return goBack;
};

/**
 * useForwardPage
 * 次のページへジャンプする
 * @returns goForward()
 * @example
 * const goForward = useForwardPage();
 * // ...
 * goForward()
 * @author FXS)zhang.puming
 */
export const useForwardPage = (callBackFn: () => void = () => {}) => {
  const navigate = useNavigate();
  const goForward = () => {
    callBackFn();
    navigate(1);
  };
  return goForward;
};
