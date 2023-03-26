import { ReactNode } from "react";
import {
  Assignment as AssignmentIcon,
  Build as BuildIcon,
} from "@mui/icons-material";

type MenuInfo = {
  menuIndex: number;
  text: string;
  tip: string;
};

export type ExpandRootMenuProps = {
  rootMenuIndex: number;
  title: string;
  list: MenuInfo[];
  icon: ReactNode;
};

// 用户管理
const userConfigMenuList: MenuInfo[] = [
  {
    menuIndex: 0,
    text: "添加",
    tip: "Add",
  },
  {
    menuIndex: 1,
    text: "删除",
    tip: "Delete",
  },
];

// 系统管理
const systemConfigMenuList: MenuInfo[] = [
  {
    menuIndex: 0,
    text: "TestFactory",
    tip: "Test",
  },
  {
    menuIndex: 1,
    text: "Counter",
    tip: "Counter",
  },
];

export const zeroLeftMenu: ExpandRootMenuProps[] = [
  {
    rootMenuIndex: 0,
    title: "用户管理",
    list: userConfigMenuList,
    icon: <AssignmentIcon />,
  },
  {
    rootMenuIndex: 1,
    title: "系统管理",
    list: systemConfigMenuList,
    icon: <BuildIcon />,
  },
];
