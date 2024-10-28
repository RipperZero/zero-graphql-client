import { FC, useState, Dispatch, SetStateAction, SyntheticEvent } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  CircularProgress,
  InputAdornment,
  SnackbarCloseReason,
} from "@mui/material";
import { AlertColor } from "@mui/material/Alert";
import { Check as CheckIcon, Close as CloseIcon } from "@mui/icons-material";
import { ZeroSnackBarView, CopyRightView } from "app/@common/components";
import avatarImg from "../../assets/img/outer-space.png";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });
});

type SignUpViewProps = {
  showProgress: boolean;
  progressVariant: "determinate" | "indeterminate";
  alertMessage: string;
  openSnackBar: boolean;
  alertSeverity: AlertColor;
  handleOnCloseSnackbar: (
    event: SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason,
  ) => void;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  handleOnBlur: () => void;
  passWord: string;
  setPassWord: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  checkCurrentPassWord: (confirmPassWord: string) => void;
  onClickSignUpBtn: () => void;
  jumpToSignIn: () => void;
};

const SignUpView: FC<SignUpViewProps> = ({
  showProgress,
  progressVariant,
  alertMessage,
  openSnackBar,
  alertSeverity,
  handleOnCloseSnackbar,
  userName,
  setUserName,
  handleOnBlur,
  passWord,
  setPassWord,
  email,
  setEmail,
  checkCurrentPassWord,
  onClickSignUpBtn,
  jumpToSignIn,
}) => {
  // hooks start
  const classes = useStyles();

  const [confirmPassWord, setConfirmPassWord] = useState("");
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  const renderUserNameInputProps = () => {
    return (
      alertMessage !== "" && (
        <InputAdornment position="end">
          {showProgress ? (
            // show progress
            <CircularProgress size={24} variant={progressVariant} />
          ) : // DoubleChexk (show confirm icon)
          alertMessage === "用户名可以注册" ? (
            <CheckIcon htmlColor="green" />
          ) : (
            <CloseIcon htmlColor="red" />
          )}
        </InputAdornment>
      )
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <ZeroSnackBarView
        openSnackBar={openSnackBar}
        alertMessage={alertMessage}
        alertSeverity={alertSeverity}
        onCloseSnackbar={handleOnCloseSnackbar}
      />
      <Box className={classes.paper}>
        <Avatar className={classes.avatar} src={avatarImg} />
        <Typography component="h1" variant="h5">
          {`Sign Up`}
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                required
                fullWidth
                label="UserName"
                autoFocus
                value={userName}
                InputProps={{
                  endAdornment: renderUserNameInputProps(),
                }}
                onChange={(event) => setUserName(event.target.value)}
                onBlur={handleOnBlur}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={passWord}
                onChange={(event) => setPassWord(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="ConfirmPassword"
                label="ConfirmPassword"
                type="password"
                id="ConfirmPassword"
                autoComplete="current-password"
                value={confirmPassWord}
                onChange={(event) => setConfirmPassWord(event.target.value)}
                onBlur={() => {
                  checkCurrentPassWord(confirmPassWord);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            // 不可以设置 type="submit"(默认为GET提交) 否非post提交时url会出现明文
            // type="submit"
            className={classes.submit}
            fullWidth
            variant="contained"
            onClick={onClickSignUpBtn}
          >
            {`Sign Up`}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link variant="body2" onClick={jumpToSignIn}>
                {`Already have an account? Sign in`}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box marginTop={5}>
        <CopyRightView />
      </Box>
    </Container>
  );
  // render functions end
};

export { SignUpView };
