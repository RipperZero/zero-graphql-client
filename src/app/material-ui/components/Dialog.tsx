import { useState, useEffect, useRef } from "react";
import {
  Box,
  List,
  ListItem,
  Button,
  Dialog,
  DialogProps,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function ScrollDialog() {
  const [open, setOpen] = useState(false);
  const [secOpen, setSecOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <Box>
      <Box>
        <Button onClick={handleClickOpen("paper")}>scroll=paper</Button>
        <Button onClick={handleClickOpen("body")}>scroll=body</Button>

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {/* {[...new Array(1000)].map(() => `1111111`).join("\n")} */}
          {[...new Array(1000)].map((index) => {
            return (
              <ListItem key={index}>{`----------------${index}`}</ListItem>
            );
          })}
        </List>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
              )
              .join("\n")}
          </DialogContentText>
          <Dialog
            open={secOpen}
            onClose={() => {
              setSecOpen(false);
            }}
            scroll={scroll}
          >
            <DialogTitle>湖人总冠军</DialogTitle>
            <DialogContent>
              {" "}
              {[...new Array(50)]
                .map(
                  () => `FunctionComponent
          (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
          FunctionComponent
(props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
FunctionComponent
(props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
         `,
                )
                .join("\n")}
            </DialogContent>
          </Dialog>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setSecOpen(true);
            }}
          >
            Open Sec Dialog
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
