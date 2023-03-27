import { FC, useCallback, useEffect } from "react";
import { useQueryUsers } from "app/main-menu/operations/queries/mainMenuQueries";
import { UsersDisplayTableView } from "./UsersDisplayTable.view";
import { Skeleton } from "@mui/material";
import { axiosInstance } from "utils";

const queryUsers = () => {
  return axiosInstance.get("/findAll");
};

const Demo: FC = () => {
  // #region hooks start
  const { data, loading } = useQueryUsers();
  const usersInfo = data?.users;
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    let ignore = false;

    queryUsers().then((res) => {
      if (!ignore && res.success) {
        console.log(res.data);
      }
    });

    return () => {
      ignore = true;
    };
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  const selectAllCheckBoxOnChange = useCallback(() => {}, []);

  const fetchMoreBtnOnClick = useCallback(() => {}, []);
  // #endregion logic functions end

  // #region render functions start
  return !loading && usersInfo ? (
    <UsersDisplayTableView
      usersInfo={usersInfo}
      selectAllCheckBoxOnChange={selectAllCheckBoxOnChange}
      fetchMoreBtnOnClick={fetchMoreBtnOnClick}
    />
  ) : (
    <Skeleton variant="rectangular" height={460} width={"100%"} />
  );
  // #endregion render functions end
};

export { Demo };
