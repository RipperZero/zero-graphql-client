import { FC, useState, useEffect, useCallback, SyntheticEvent } from "react";
import { AlertColor } from "@mui/material/Alert";
import { useNextPage } from "app/@common/hooks";
import { SignUpView } from "./SignUp.view";
import { useLQueryUserInfo } from "../../operations/queries/signUpQueries";
import { useInsertUserMutation } from "../../operations/mutations/signUpMutations";
import { SnackbarCloseReason } from "@mui/material";

const SignUpContainer: FC = () => {
  // hooks start
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [email, setEmail] = useState("");

  // progress states
  const [showProgress, setShowProgress] = useState(false);
  const [progressVariant, setProgressVariant] = useState<
    "determinate" | "indeterminate"
  >("determinate");
  // progress states
  // snackbar states
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("info");
  const [alertMessage, setAlertMessage] = useState("");
  // snackbar states

  // Apollo
  const [queryUserInfo, queryInfo] = useLQueryUserInfo();
  const [insertUser, insertUserInfo] = useInsertUserMutation();
  // Apollo

  const nextPage = useNextPage();
  // hooks end

  // useEffect functions start
  useEffect(() => {
    if (!queryInfo.loading && queryInfo.data) {
      if (queryInfo.data.userInfo.id === "-1") {
        setOpenSnackBar(true);
        setAlertSeverity("error");
        setAlertMessage("用户名已存在");
      } else {
        setOpenSnackBar(true);
        setAlertSeverity("success");
        setAlertMessage("用户名可以注册");
      }

      setShowProgress(false);
      setProgressVariant("determinate");
    }
  }, [queryInfo.data, queryInfo.loading]);

  useEffect(() => {
    if (!insertUserInfo.loading && insertUserInfo.data?.insertUser) {
      nextPage("SIGNIN");
    }
  }, [insertUserInfo.data?.insertUser, insertUserInfo.loading, nextPage]);
  // useEffect functions end

  // logic functions start
  const jumpToSignIn = useCallback(() => {
    nextPage("COUNTER");
  }, [nextPage]);

  const onClickSignUpBtn = useCallback(() => {
    if (!userName) {
      setOpenSnackBar(true);
      setAlertSeverity("warning");
      setAlertMessage("请输入用户名QAQ");
      return;
    }

    insertUser({
      variables: {
        insertUserInput: {
          username: userName,
          password: passWord,
          email: email,
        },
      },
    });
  }, [email, insertUser, passWord, userName]);

  const handleOnBlur = useCallback(() => {
    if (!userName) {
      console.log("---------------");
      setOpenSnackBar(true);
      setAlertSeverity("warning");
      setAlertMessage("请输入用户名QAQ");
      return;
    }

    if (userName.length > 0) {
      queryUserInfo({
        variables: { username: userName },
      });

      // show progress
      setShowProgress(true);
      setProgressVariant("indeterminate");
    }
  }, [queryUserInfo, userName]);

  const checkCurrentPassWord = useCallback(
    (confirmPassWord: string) => {
      if (confirmPassWord !== passWord) {
        setOpenSnackBar(true);
        setAlertMessage("Need Confirm PassWord");
      }
    },
    [passWord],
  );

  const handleOnCloseSnackbar = useCallback(
    (_event: SyntheticEvent<any> | Event, reason: SnackbarCloseReason) => {
      if (reason === "clickaway") {
        console.log("handleOnCloseSnackbar");
        return;
      }
      setOpenSnackBar(false);
      // setAlertMessage("");
    },
    [],
  );
  // logic functions end

  // render functions start
  return (
    <SignUpView
      showProgress={showProgress}
      progressVariant={progressVariant}
      alertMessage={alertMessage}
      openSnackBar={openSnackBar}
      alertSeverity={alertSeverity}
      handleOnCloseSnackbar={handleOnCloseSnackbar}
      userName={userName}
      setUserName={setUserName}
      handleOnBlur={handleOnBlur}
      passWord={passWord}
      setPassWord={setPassWord}
      email={email}
      setEmail={setEmail}
      checkCurrentPassWord={checkCurrentPassWord}
      onClickSignUpBtn={onClickSignUpBtn}
      jumpToSignIn={jumpToSignIn}
    />
  );
  // render functions end
};

export { SignUpContainer as SignUp };
