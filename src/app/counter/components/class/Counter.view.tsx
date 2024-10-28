import { Component } from "react";
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

type CounterViewState = {
  incrementAmount: number;
};

export class CounterView extends Component<CounterViewProps, CounterViewState> {
  state = { incrementAmount: 1 };

  onClickAddAmountBtn = () => {
    this.props.onClickAddAmount(this.state.incrementAmount);
  };

  onClickAddAsyncBtn = () => {
    this.props.onClickAddAsync(this.state.incrementAmount);
  };

  render() {
    return (
      <Container maxWidth="sm">
        <Typography align={"center"}>{"Class"}</Typography>
        <Box color="warning.main">
          <Box className={styles.row}>
            <Button
              aria-label="Increment value"
              onClick={this.props.onClickIncrement}
              variant="outlined"
            >
              +
            </Button>
            <Typography component="span" className={styles.value}>
              {this.props.counterNum}
            </Typography>
            <Button
              aria-label="Decrement value"
              onClick={this.props.onClickDecrement}
              variant="outlined"
            >
              -
            </Button>
          </Box>
          <Box className={styles.row}>
            <TextField
              label="input"
              className={styles.textbox}
              aria-label="Set increment amount"
              value={this.state.incrementAmount}
              onChange={(event) =>
                this.setState({
                  incrementAmount: Number(event.target.value) || 0,
                })
              }
            />
            <VerticalDivider />
            <Button variant="contained" onClick={this.onClickAddAmountBtn}>
              Add Amount
            </Button>
            <VerticalDivider />
            <LoadingButton
              variant="contained"
              loading={this.props.isLoading}
              loadingPosition="center"
              onClick={this.onClickAddAsyncBtn}
            >
              Add Async
            </LoadingButton>
          </Box>
          <Box className={styles.row}>
            <Button variant="contained" onClick={this.props.onClickAlertBtn}>
              Alert
            </Button>
          </Box>
        </Box>
      </Container>
    );
  }
}
