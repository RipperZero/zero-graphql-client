import { FC, MouseEvent } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme, useTheme, Box, IconButton } from "@mui/material";
import {
  FirstPage as FirstPageIcon,
  LastPage as LastPageIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    pagination: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
      // @see https://developer.mozilla.org/docs/Web/CSS/direction
      // default value : "ltr"
      // direction: "rtl",
    },
  });
});

type TablePaginationActionsViewProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void;
};

export const TablePaginationActionsView: FC<
  TablePaginationActionsViewProps
> = ({ count, page, rowsPerPage, onPageChange }) => {
  // hooks start
  const classes = useStyles();
  const theme = useTheme();
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <Box className={classes.pagination}>
      <IconButton
        onClick={(event) => onPageChange(event, 0)}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={(event) => onPageChange(event, page - 1)}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRightIcon />
        ) : (
          <KeyboardArrowLeftIcon />
        )}
      </IconButton>
      <IconButton
        onClick={(event) => onPageChange(event, page + 1)}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeftIcon />
        ) : (
          <KeyboardArrowRightIcon />
        )}
      </IconButton>
      <IconButton
        onClick={(event) =>
          onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
        }
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
  // render functions end
};
