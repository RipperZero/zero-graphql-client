import { FC, useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  useTheme,
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExitToApp as ExitToAppIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useNextPage } from "app/@common/hooks";
import { ContentDisplayerView as ContentDisplayer } from "app/@common/components";
import { Counter } from "app/counter";
import { TestComponent } from "app/test-factory";
import { ZeroAvatarView as ZeroAvatar } from "./ZeroAvatar.view";
import { ExpandMenuView as ExpandMenu } from "./ExpandMenu.view";
// import { UsersDisplayTableContainer as UsersDisplayTable } from "./UsersDisplayTable/UsersDisplayTable.container";
import { Demo } from "./UsersDisplayTable/Demo";
import { zeroLeftMenu } from "../config";

const DRAWER_WIDTH = 240;

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      marginLeft: DRAWER_WIDTH,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: DRAWER_WIDTH,
      flexShrink: 0,
    },
    drawerPaper: {
      width: DRAWER_WIDTH,
      backgroundColor: "rgb(13, 207, 241)",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -DRAWER_WIDTH,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    userInfo: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  });
});

export const MainMenuView: FC = () => {
  // hooks start
  const classes = useStyles();
  const theme = useTheme();

  const nextPage = useNextPage();

  const [isDraweropen, setIsDraweropen] = useState(false);
  // secondaryMenuItemId 用于切换画面主要显示的内容
  const [tabPanelId, setTabPanelId] = useState(`0-0`);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <Box className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isDraweropen,
        })}
      >
        <Toolbar>
          <IconButton
            className={clsx(classes.menuButton, isDraweropen && classes.hide)}
            color="inherit"
            onClick={() => {
              setIsDraweropen(true);
            }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {"Personal File"}
          </Typography>
          <IconButton
            onClick={() => {
              nextPage("SIGNIN");
            }}
            color="inherit"
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="persistent"
        anchor="left"
        open={isDraweropen}
      >
        <Box className={classes.drawerHeader}>
          <Box className={classes.userInfo}>
            <ZeroAvatar />
            <Typography align="center">{`桜木花道`}</Typography>
          </Box>
          <IconButton
            onClick={() => {
              // 切换TabPanel
              setIsDraweropen(false);
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {zeroLeftMenu.map((menuInfo, index) => {
            return (
              <ExpandMenu
                key={index}
                menuInfo={menuInfo}
                onChangeMenuItem={(secondaryMenuItemId) => {
                  setTabPanelId(secondaryMenuItemId);
                }}
              />
            );
          })}
        </List>
      </Drawer>
      <Box
        className={clsx(classes.content, {
          [classes.contentShift]: isDraweropen,
        })}
      >
        <Box className={classes.drawerHeader} />
        <ContentDisplayer index={"0-0"} value={tabPanelId}>
          {/* <UsersDisplayTable /> */}
          <Demo />
        </ContentDisplayer>
        <ContentDisplayer index={"0-1"} value={tabPanelId}>
          <Box>{"0-1"}</Box>
        </ContentDisplayer>
        <ContentDisplayer index={"1-0"} value={tabPanelId}>
          <TestComponent />
        </ContentDisplayer>
        <ContentDisplayer index={"1-1"} value={tabPanelId}>
          <Counter />
        </ContentDisplayer>
      </Box>
    </Box>
  );
  // render functions end
};
