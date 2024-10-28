import { FC, useState } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import {
  Theme,
  List,
  ListItem,
  Tooltip,
  Collapse,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { ExpandRootMenuProps } from "../config";

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  });
});

type ExpandMenuViewProps = {
  menuInfo: ExpandRootMenuProps;
  onChangeMenuItem: (secondaryMenuItemId: string) => void;
};

export const ExpandMenuView: FC<ExpandMenuViewProps> = ({
  menuInfo,
  onChangeMenuItem,
}) => {
  // hooks start
  const classes = useStyles();
  const [isExpand, setIsExpand] = useState(true);

  const onClickListItem = () => {
    setIsExpand((preIsExpand) => !preIsExpand);
  };
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start
  return (
    <>
      <ListItem button onClick={onClickListItem}>
        <ListItemIcon>{menuInfo.icon}</ListItemIcon>
        <ListItemText primary={menuInfo.title} />
        {isExpand ? <ExpandMoreIcon /> : <ChevronRightIcon />}
      </ListItem>
      <Collapse in={isExpand} timeout="auto" unmountOnExit>
        <List>
          {menuInfo.list.map((menu, index) => (
            <Tooltip key={index} title={menu.tip}>
              <ListItem
                key={index}
                className={classes.nested}
                button
                onClick={() => {
                  // used to select
                  onChangeMenuItem(
                    `${menuInfo.rootMenuIndex}-${menu.menuIndex}`,
                  );
                }}
              >
                <ListItemText primary={menu.text} />
              </ListItem>
            </Tooltip>
          ))}
        </List>
      </Collapse>
      <Divider />
    </>
  );
  // render functions end
};
