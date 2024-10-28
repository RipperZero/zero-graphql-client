import { FC, useEffect, useCallback, ChangeEvent } from "react";
import { Skeleton } from "@mui/material";
// import { usePersistFn } from "hope-react-hooks";
import { UsersDisplayTableView } from "./UsersDisplayTable.view";
import {
  // useQueryUsers,
  useQueryUsersPagination,
} from "../../operations/queries/mainMenuQueries";

const PAGE_SIZE = 20;

const UsersDisplayTableContainer: FC = () => {
  // hooks start
  // const queryUsersResult = useQueryUsers();

  const { fetchMore, data, loading } = useQueryUsersPagination(PAGE_SIZE);
  // hooks end

  // useEffect functions start
  useEffect(() => {
    if (
      data?.usersPagination.page &&
      // data?.usersPagination.rows.length < data?.usersPagination.total
      data?.usersPagination.rows.length -
        (data?.usersPagination.page - 1) * PAGE_SIZE ===
        PAGE_SIZE
    ) {
      fetchMore({
        variables: {
          page: data?.usersPagination.page + 1,
          size: PAGE_SIZE,
        },
      });
    }
  }, [
    data?.usersPagination.page,
    data?.usersPagination.rows.length,
    fetchMore,
  ]);

  // useEffect functions end

  // logic functions start
  const selectAllCheckBoxOnChange = useCallback(
    (_event: ChangeEvent<HTMLInputElement>) => {
      console.log("selectAllCheckBoxOnChange");
    },
    [],
  );

  const fetchMoreBtnOnClick = useCallback(() => {
    // fetchMore({
    //   variables: {
    //     page: 2,
    //     size: 3,
    //   },
    // });
  }, []);
  // logic functions end

  // render functions start
  return !loading && data?.usersPagination.rows ? (
    <UsersDisplayTableView
      usersInfo={data.usersPagination.rows}
      selectAllCheckBoxOnChange={selectAllCheckBoxOnChange}
      fetchMoreBtnOnClick={fetchMoreBtnOnClick}
    />
  ) : (
    <Skeleton variant="rectangular" height={460} width={"100%"} />
  );
  // return !loading &&
  //   data?.usersPagination.rows &&
  //   data?.usersPagination.rows.length === data?.usersPagination.total ? (
  //   <UsersDisplayTableView
  //     usersInfo={data?.usersPagination.rows}
  //     selectAllCheckBoxOnChange={selectAllCheckBoxOnChange}
  //     fetchMoreBtnOnClick={fetchMoreBtnOnClick}
  //   />
  // ) : (
  //   <Skeleton variant="rectangular" height={460} width={"100%"} />
  // );
  // render functions end
};

export { UsersDisplayTableContainer };
