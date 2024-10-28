import { FC, SyntheticEvent } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  Box,
  Snackbar,
  Alert,
  AlertColor,
  SnackbarCloseReason,
} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    rootBox: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2),
      },
    },
  });
});

type ZeroSnackBarViewProps = {
  openSnackBar: boolean;
  alertMessage: string;
  alertSeverity: AlertColor;
  onCloseSnackbar: (
    event: SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason,
  ) => void;
};

export const ZeroSnackBarView: FC<ZeroSnackBarViewProps> = ({
  openSnackBar,
  alertMessage,
  alertSeverity,
  onCloseSnackbar,
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
    <Box className={classes.rootBox}>
      <Snackbar
        open={openSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        // TransitionComponent={TransitionA}
        onClose={onCloseSnackbar}
      >
        <Alert severity={alertSeverity}>{`${alertMessage}`}</Alert>
      </Snackbar>
    </Box>
  );
  // render functions end
};
