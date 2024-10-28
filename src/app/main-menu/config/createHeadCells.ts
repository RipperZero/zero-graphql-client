import { UserInfoFragment } from "@common.models.mainMenu";

export type TableColumn = keyof Omit<UserInfoFragment, "__typename">;

type TableHeadCell = {
  id: TableColumn;
  numeric: boolean;
  label: string;
  disablePadding: boolean;
};

export const TABLEHEAD_CELLS: TableHeadCell[] = [
  { id: "id", numeric: false, disablePadding: false, label: "Id" },
  {
    id: "username",
    numeric: false,
    disablePadding: false,
    label: "UserName",
  },
  { id: "idcard", numeric: false, disablePadding: false, label: "IdCard" },
  { id: "email", numeric: false, disablePadding: false, label: "Email" },
  { id: "mobile", numeric: false, disablePadding: false, label: "Mobile" },
  // {
  //   id: "createdUser",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "CreatedUser",
  // },
  // {
  //   id: "modifiedUser",
  //   numeric: false,
  //   disablePadding: false,
  //   label: "ModifiedUser",
  // },
];
