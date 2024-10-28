import { Routes, Route } from "react-router-dom";
import { APP_PATHS } from "./@common/config";

import Mui from "./material-ui";
import { Counter } from "./counter";
import { MainMenu } from "./main-menu";
import { SignIn, SignUp } from "./sign-up";
import { MobileList } from "./mobile";

export const Router = () => {
  return (
    <Routes>
      <Route path={APP_PATHS.ROOT} element={<MainMenu />} />
      <Route path={APP_PATHS.SIGNIN} element={<SignIn />} />
      <Route path={APP_PATHS.SIGNUP} element={<SignUp />} />
      <Route path={APP_PATHS.MATERIAL_UI} element={<Mui />} />
      <Route path={APP_PATHS.MAINMENU} element={<MainMenu />} />
      <Route path={APP_PATHS.COUNTER} element={<Counter />} />
      <Route path={APP_PATHS.MOBILE} element={<MobileList />} />
    </Routes>
  );
};
