import { FC } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { Theme, Box } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    example: {},
  });
});

type _TemplateViewProps = {};

export const _TemplateView: FC<_TemplateViewProps> = ({}) => {
  // hooks start
  const classes = useStyles();
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <Box>111</Box>
    </>
  );
  // render functions end
};
