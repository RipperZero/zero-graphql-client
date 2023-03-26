import { FC, useState } from "react";
import { Box, Button } from "@mui/material";

const getRes = async () => {
  // @ts-ignore:next-line
  const versions = window.versions;

  if (!versions) {
    console.log("no versions");
    return;
  }

  const res = await versions.ping();

  console.log("handleOnClickBtn res ----- " + res);
  return res;
};

type IpcRendererProps = {};

export const IpcRenderer: FC<IpcRendererProps> = ({}) => {
  // #region hooks start
  const [res, setRes] = useState("");
  // #endregion hooks end

  // #region useEffect functions start
  // #endregion useEffect functions end

  // #region logic functions start
  const handleOnClick = () => {
    getRes().then((res) => {
      if (typeof res === "string") {
        setRes(res);
      }
    });
  };
  // #endregion logic functions end

  // #region render functions start
  return (
    <>
      <Box>
        <Button variant="contained" onClick={handleOnClick}>
          Ping
        </Button>
      </Box>
      <Box>{`IpcRenderer Res is ${res}`}</Box>
    </>
  );
  // #endregion render functions end
};
