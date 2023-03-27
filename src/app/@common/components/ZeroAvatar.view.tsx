import { FC } from "react";
import { withStyles, makeStyles, createStyles } from "@mui/styles";
import { Theme, Avatar, Badge } from "@mui/material";
import AvatarImg from "../assets/img/桜木花道.jpg";

const StyleBadge = withStyles((theme: Theme) => {
  return createStyles({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  });
})(Badge);

const useStyles = makeStyles((_theme: Theme) => {
  return createStyles({
    avatarSize: {
      width: "50px",
      height: "50px",
    },
  });
});

type ZeroAvatarViewProps = {};

export const ZeroAvatarView: FC<ZeroAvatarViewProps> = () => {
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
      <StyleBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          alt="personal photo"
          src={AvatarImg}
          className={classes.avatarSize}
        />
      </StyleBadge>
    </>
  );
  // render functions end
};
