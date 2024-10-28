import { FC, ChangeEvent, MouseEvent, useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableSortLabel,
  TableBody,
  TableFooter,
  TablePagination,
  Button,
} from "@mui/material";
import { UserInfoFragment } from "@common.models.mainMenu";
import { TableToolbarView as TableToolbar } from "./TableToolbar.view";
import { TablePaginationActionsView as TablePaginationActions } from "./TablePaginationActions.view";
import { TABLEHEAD_CELLS, TableColumn } from "../../config";
import { Order, stableSort, getComparator } from "../../tools/tableSorter";

const useStyles = makeStyles((_theme: Theme) => {
  return createStyles({
    table: {
      minWidth: 650,
    },
    pagination: {
      minWidth: 525,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  });
});

type UsersDisplayTableViewProps = {
  usersInfo: UserInfoFragment[];
  selectAllCheckBoxOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fetchMoreBtnOnClick: () => void;
};

export const UsersDisplayTableView: FC<UsersDisplayTableViewProps> = ({
  usersInfo,
  selectAllCheckBoxOnChange,
  fetchMoreBtnOnClick,
}) => {
  // hooks start
  const classes = useStyles();

  // sort
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<TableColumn>("id");
  // sort

  // pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // pagination
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, usersInfo.length - page * rowsPerPage);
  // render functions start
  return (
    <>
      <TableContainer component={Paper}>
        <TableToolbar numSelected={0} />
        <Table className={classes.table} aria-label="Zero-Table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  inputProps={{ "aria-label": "select all" }}
                  onChange={selectAllCheckBoxOnChange}
                />
              </TableCell>
              {TABLEHEAD_CELLS.map((headCell) => {
                return (
                  <TableCell
                    key={headCell.id}
                    align={headCell.numeric ? "right" : "left"}
                    padding={headCell.disablePadding ? "none" : "normal"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={() => {
                        setOrder((preOrder) =>
                          orderBy === headCell.id && preOrder === "asc"
                            ? "desc"
                            : "asc",
                        );
                        setOrderBy(headCell.id);
                      }}
                    >
                      {headCell.label}
                      {orderBy === headCell.id ? (
                        <span className={classes.visuallyHidden}>
                          {order === "desc"
                            ? "sorted descending"
                            : "sorted ascending"}
                        </span>
                      ) : null}
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(usersInfo, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((userInfo) => {
                const labelId = `zero-table-checkbox-${userInfo.id}`;

                return (
                  <TableRow key={userInfo.id} hover>
                    <TableCell padding="checkbox">
                      <Checkbox inputProps={{ "aria-labelledby": labelId }} />
                    </TableCell>
                    <TableCell component="th" id={labelId} scope="row">
                      {userInfo.id}
                    </TableCell>
                    <TableCell>{userInfo.username}</TableCell>
                    <TableCell>{userInfo.idcard}</TableCell>
                    <TableCell>{userInfo.email}</TableCell>
                    <TableCell>{userInfo.mobile}</TableCell>
                    {/* <TableCell>{userInfo.createdUser}</TableCell>
                    <TableCell>{userInfo.modifiedUser}</TableCell> */}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                className={classes.pagination}
                rowsPerPageOptions={[5, 10, 20, { label: "All", value: -1 }]}
                // @see https://www.runoob.com/tags/att-th-colspan.html
                // 不设置时默认值为1000（横跨1000列）
                // 此处设置为7是因为有7列
                // colSpan={7}
                count={usersInfo.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onPageChange={(
                  _event: MouseEvent<HTMLButtonElement> | null,
                  newPage: number,
                ) => {
                  setPage(newPage);
                }}
                onRowsPerPageChange={(
                  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
                ) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
                ActionsComponent={({
                  count,
                  page,
                  rowsPerPage,
                  onPageChange,
                }) => {
                  return (
                    <TablePaginationActions
                      count={count}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      onPageChange={onPageChange}
                    />
                  );
                }}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Button onClick={fetchMoreBtnOnClick}>More</Button>
    </>
  );
  // render functions end
};
