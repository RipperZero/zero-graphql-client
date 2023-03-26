import { FC } from "react";
import { Typography, Link } from "@mui/material";
// import { DayUtils } from "hope-react-utils";

export const CopyRightView: FC = () => {
  // hooks start
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {"Copyright © "}
      <Link color="error" href="https://www.baidu.com/">
        {`湖人总冠军`}
      </Link>{" "}
      {/* {DayUtils.now().toDate().toLocaleDateString()} */}
      {"QAQ"}
    </Typography>
  );
  // render functions end
};
