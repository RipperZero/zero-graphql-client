import { FC, useState, useCallback } from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import styles from "../../assets/css/Counter.module.css";

type CounterViewProps = {
  counterNum: number;
  onClickIncrement: () => void;
  onClickDecrement: () => void;
  onClickAddAmount: (amount: number) => void;
  onClickAddAsync: (amount: number) => void;
  onClickAlertBtn: () => void;
};

export const CounterView: FC<CounterViewProps> = ({
  counterNum,
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
            className={styles.button}
            aria-label="Increment value"
            onClick={onClickIncrement}
            variant="outlined"
          >
            {`+`}
          </Button>
          <Typography component="span" className={styles.value}>
            {counterNum}
          </Typography>
          <Button
            className={styles.button}
            aria-label="Decrement value"
            onClick={onClickDecrement}
            variant="outlined"
          >
            {`-`}
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
          <Button
            variant="contained"
            className={styles.button}
            onClick={onClickAddAmountBtn}
          >
            {`Add Amount`}
          </Button>
          <Button
            variant="contained"
            className={styles.asyncButton}
            onClick={onClickAddAsyncBtn}
          >
            {`Add Async`}
          </Button>
        </Box>
        <Box className={styles.row}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={onClickAlertBtn}
          >
            {"Alert"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
  // render functions end
};
