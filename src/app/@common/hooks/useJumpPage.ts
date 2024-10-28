import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "../config";

type AppPath = keyof typeof APP_PATHS;

export const useNextPage = () => {
  const navigate = useNavigate();
  const goNextPage = (path: AppPath) => {
    navigate(APP_PATHS[path]);
  };
  return goNextPage;
};

export const useBackPage = (callBackFn: () => void = () => {}) => {
  const navigate = useNavigate();
  const goBack = () => {
    callBackFn();
    navigate(-1);
  };
  return goBack;
};

export const useForwardPage = (callBackFn: () => void = () => {}) => {
  const navigate = useNavigate();
  const goForward = () => {
    callBackFn();
    navigate(1);
  };
  return goForward;
};
