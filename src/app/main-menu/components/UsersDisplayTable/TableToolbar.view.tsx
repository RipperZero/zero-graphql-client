import { FC } from "react";
import clsx from "clsx";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  lighten,
  Toolbar,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  AccountBox as AccountBoxIcon,
} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.mode === "light"
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: "1 1 100%",
    },
  });
});

type TableToolbarViewProps = {
  numSelected: number;
};

export const TableToolbarView: FC<TableToolbarViewProps> = ({
  numSelected,
}) => {
  // hooks start
  const classes = useStyles();
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {`${numSelected} selected`}
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {`ZeroTable`}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Account">
          <IconButton aria-label="account">
            <AccountBoxIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
  // render functions end
};
