import { FC, useState, memo } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  Box,
  Button,
  Slide,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  MoveToInbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    rootBox: {
      height: "20em",
      backgroundColor: "cyan",
    },
  });
});

type MobileListViewProps = {};

export const MobileListView: FC<MobileListViewProps> = ({}) => {
  // hooks start
  const classes = useStyles();

  const [showDrawer, setShowDrawer] = useState(false);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <Slide direction="up" in mountOnEnter unmountOnExit>
        {/* {Icon} */}
        <Box className={classes.rootBox}>
          <Button
            variant="contained"
            onClick={() => {
              setShowDrawer(true);
            }}
          >
            Open Drawer
          </Button>
        </Box>
      </Slide>

      <SwipeableDrawer
        anchor="bottom"
        open={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        onOpen={() => {
          setShowDrawer(true);
        }}
      >
        <Box sx={{ width: "auto" }} role="presentation">
          <List>
            {["湖人总冠军", "Starred", "Send email", "Drafts"].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ),
            )}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
  // render functions end
};
