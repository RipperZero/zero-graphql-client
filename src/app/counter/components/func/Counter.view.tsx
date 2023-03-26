import { FC, useState, useCallback } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { VerticalDivider } from "../VerticalDivider";
import styles from "../../assets/css/Counter.module.css";

type CounterViewProps = {
  counterNum: number;
  isLoading: boolean;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
  onClickAddAmount: (amount: number) => void;
  onClickAddAsync: (amount: number) => void;
  onClickAlertBtn: () => void;
};

export const CounterView: FC<CounterViewProps> = ({
  counterNum,
  isLoading = false,
  onClickIncrement,
  onClickDecrement,
  onClickAddAmount,
  onClickAddAsync,
  onClickAlertBtn,
}) => {
  // hooks start
  const [incrementAmount, setIncrementAmount] = useState(1);
  // hooks end

  // useEffect functions start
  // useEffect functions end

  // logic functions start
  const onClickAddAmountBtn = useCallback(() => {
    onClickAddAmount(incrementAmount);
  }, [incrementAmount, onClickAddAmount]);

  const onClickAddAsyncBtn = useCallback(() => {
    onClickAddAsync(incrementAmount);
  }, [incrementAmount, onClickAddAsync]);
  // logic functions end

  // render functions start
  return (
    <Container maxWidth="sm">
      <Typography align={"center"}>{"Function"}</Typography>
      <Box color="warning.main">
        <Box className={styles.row}>
          <Button
            variant="outlined"
            aria-label="Increment value"
            onClick={onClickIncrement}
          >
            +
          </Button>
          <Typography component="span" className={styles.value}>
            {counterNum}
          </Typography>
          <Button
            variant="outlined"
            aria-label="Decrement value"
            onClick={onClickDecrement}
          >
            -
          </Button>
        </Box>
        <Box className={styles.row}>
          <TextField
            label="input"
            className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={(event) =>
              setIncrementAmount(Number(event.target.value) || 0)
            }
          />
          <VerticalDivider />
          <Button variant="contained" onClick={onClickAddAmountBtn}>
            Add Amount
          </Button>
          <VerticalDivider />
          <LoadingButton
            variant="contained"
            loading={isLoading}
            loadingPosition="center"
            onClick={onClickAddAsyncBtn}
          >
            Add Async
          </LoadingButton>
        </Box>
        <Box className={styles.row}>
          <Button variant="contained" onClick={onClickAlertBtn}>
            Alert
          </Button>
        </Box>
      </Box>
    </Container>
  );
  // render functions end
};
