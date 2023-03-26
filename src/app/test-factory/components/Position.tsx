import { FC, useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import classnames from "classnames";

const useStyles = makeStyles(() => {
  return createStyles({
    div1: {
      width: "100px",
      height: "100px",
      background: "#ffff00",
    },
    div2: {
      width: "100px",
      // height: "100px",
      background: "#00ff00",
    },
    div3: {
      width: "100px",
      height: "100px",
      background: "#0000ff",
    },
    extra: {
      position: "relative",
      top: "40px",
      left: "40px",
    },
  });
});

type PositionProps = {};

export const Position: FC<PositionProps> = ({}) => {
  // hooks start
  const classes = useStyles();
  const [isShowExtra, setIsShowExtra] = useState(false);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <div>
      <div className={classes.div1}>
        <div>div1</div>
      </div>
      <div
        className={classnames(classes.div2, { [classes.extra]: isShowExtra })}
        onMouseEnter={() => {
          setIsShowExtra(true);
        }}
        onMouseLeave={() => {
          setIsShowExtra(false);
        }}
      >
        <div>div2</div>
        {isShowExtra && (
          <div>
            <div>extra</div>
            <div>extra</div>
            <div>extra</div>
            <div>extra</div>
            <div>extra</div>
            <div>extra</div>
          </div>
        )}
      </div>
      <div className={classes.div3}>
        <div>div3</div>
      </div>
    </div>
  );
  // render functions end
};
