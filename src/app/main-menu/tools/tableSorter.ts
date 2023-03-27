// another writing
// @see https://editor.csdn.net/md/?articleId=109072344
// const descendingComparator = <T extends unknown>() => {}
export const descendingComparator = <T>(
  elementA: T,
  elementB: T,
  orderBy: keyof T,
) => {
  // return elementB[orderBy] !== elementA[orderBy]
  //   ? elementB[orderBy] > elementA[orderBy]
  //     ? 1
  //     : -1
  //   : 0;
  if (elementB[orderBy] < elementA[orderBy]) {
    return -1;
  }
  if (elementB[orderBy] > elementA[orderBy]) {
    return 1;
  }
  return 0;
};

export type Order = "asc" | "desc";

// export const getComparator = <Key extends keyof any>(
//   order: Order,
//   orderBy: Key,
// ): ((
//   a: { [key in Key]: number | string },
//   b: { [key in Key]: number | string },
// ) => number) => {
//   return order === "desc"
//     ? (a, b) => descendingComparator(a, b, orderBy)
//     : (a, b) => -descendingComparator(a, b, orderBy);
// };

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export const stableSort = <T>(
  array: T[],
  comparator: (elementA: T, elementB: T) => number,
) => {
  // 组成二维数组[[element1,index1],[element2,index2]]
  const stabilizedTarget = array.map((element, index) => {
    return [element, index] as [T, number];
  });

  // 排序
  stabilizedTarget.sort((elementA, elementB) => {
    const order = comparator(elementA[0], elementB[0]);

    // 相等的时候比较index(argX[1] = 存入二维数组的index)
    // 操作目的猜测： 保证数据相等时多次排序 UI显示顺序不变
    return order !== 0 ? order : elementA[1] - elementB[1];
  });

  // 仅返回由element构成的新数组
  return stabilizedTarget.map((element) => element[0]);
};
