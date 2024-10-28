import { FC } from "react";
import { Box, Button } from "@mui/material";

export const EventCaptureView: FC = () => {
  // hooks start
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  // logic functions end

  // render functions start

  // Each event propagates in three phases:
  // 1.It travels down, calling all onClickCapture handlers.
  // 2.It runs the clicked element’s onClick handler.
  // 3.It travels upwards, calling all onClick handlers.
  return (
    <>
      <Box
        onClick={() => {
          console.log("Parent Div");
        }}
      >
        <Box
          onClick={() => {
            console.log("Div");
          }}
          onClickCapture={() => {
            console.log("onClickCapture");
          }}
        >
          <Button
            variant="outlined"
            onClick={(event) => {
              console.log("Button AAA");
              event.stopPropagation();
            }}
          >
            A
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              console.log("Button BBB");
            }}
          >
            B
          </Button>
        </Box>
      </Box>
    </>
  );
  // render functions end
};
