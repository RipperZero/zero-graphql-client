import { FC, useState, useEffect } from "react";
import { produce } from "immer";
import { makeStyles, createStyles } from "@mui/styles";
import { DragIndicator as DragIndicatorIcon } from "@mui/icons-material";
import { Divider } from "@mui/material";
import type { SortEndHandler } from "react-sortable-hoc";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";

const ITEMS = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
] as const;

const useStyles = makeStyles(() => {
  return createStyles({
    sortHandlerContainer: {
      zIndex: 99999,
      cursor: "move",
    },
    sortHandlerInfo: {
      display: "flex",
      alignItems: "center",
    },
    sortHandlerIcon: {
      color: "#1890ff",
      fontSize: "1.5em",
    },
    sortHandlerText: {
      marginLeft: "10px",
      fontSize: "1.5em",
    },
    sortHandlerDivider: {
      margin: "12px 0",
    },
  });
});

type HandlerProps = {
  displayText: string;
  showDivider: boolean;
};

const Handler: FC<HandlerProps> = SortableHandle(
  ({ displayText, showDivider }: HandlerProps) => {
    const classes = useStyles();

    return (
      <div className={classes.sortHandlerContainer}>
        <div className={classes.sortHandlerInfo}>
          <DragIndicatorIcon className={classes.sortHandlerIcon} />
          <div className={classes.sortHandlerText}>{displayText}</div>
        </div>
        {showDivider && <Divider className={classes.sortHandlerDivider} />}
      </div>
    );
  },
) as any;

type SortableItemProps = {
  // react-sortable-hoc <SortableElement /> 必传项
  // 通过index标记item位置
  index: number;
  value: string;
  showDivider: boolean;
};

const SortableItem: FC<SortableItemProps> = SortableElement(
  ({ value, showDivider }: SortableItemProps) => {
    return <Handler displayText={value} showDivider={showDivider} />;
  },
) as any;

const Container: any = SortableContainer(({ children }: any) => {
  return <div>{children}</div>;
});

type SortItem = {
  id: number | string;
  title: string;
};

type DragHandleProps = {};

export const DragHandle: FC<DragHandleProps> = ({}) => {
  // #region hooks start
  const [items, setItems] = useState<SortItem[]>([]);
  // #endregion hooks end

  // #region useEffect functions start
  useEffect(() => {
    const sortItems = ITEMS.map<SortItem>((item, index) => {
      return {
        id: index,
        title: item,
      };
    });

    setItems(sortItems);
  }, []);
  // #endregion useEffect functions end

  // #region logic functions start
  const handleOnSortEnd: SortEndHandler = ({ oldIndex, newIndex }) => {
    setItems(
      produce((draft) => {
        const _temp = draft[oldIndex];
        // delete by index
        draft.splice(oldIndex, 1);
        // insert at index
        draft.splice(newIndex, 0, _temp);
      }),
    );
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <Container onSortEnd={handleOnSortEnd} useDragHandle>
      {items.map((item, index) => (
        <SortableItem
          // react-sortable-hoc <SortableElement /> 必传项
          // 通过index标记item位置
          index={index}
          key={`item-${item.id}`}
          value={item.title}
          // 最后一项不添加分割线
          showDivider={index !== items.length - 1}
        />
      ))}
    </Container>
  );
  // #endregion render functions end
};
