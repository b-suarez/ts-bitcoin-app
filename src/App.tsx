import React from "react";
import { Grid } from "@material-ui/core";
import "./App.css";
import "./components/LoadingCard";
import { getBitcoinJson } from "./api/Bitcoin";
import LoadingCard from "./components/LoadingCard";
import BitcoinValueCard from "./components/BitcoinValueCard";
import bitcoinLogo from "./components/assets/bitcoinLogo.png";

type CoindeskCurrency = {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
};
type CoindeskDictionary = {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: CoindeskCurrency;
    GBP: CoindeskCurrency;
    EUR: CoindeskCurrency;
  };
};

class App extends React.Component {
  state = {
    bitcoinInfo: {} as CoindeskDictionary,
    isLoading: true,
    cardmessage: ""
  };

  async componentDidMount() {
    const bitcoinInfo = await getBitcoinJson();
    this.setState({
      bitcoinInfo,
      isLoading: false,
      cardmessage: bitcoinInfo.time.updated
    });
  }

  async componentDidUpdate() {
    const bitcoinInfo = await getBitcoinJson();
    this.setState({
      bitcoinInfo,
      isLoading: false,
      cardmessage: bitcoinInfo.time.updated
    });
  }

  render() {
    let ValueCards;

    if (this.state.isLoading === false) {
      ValueCards = Object.values(this.state.bitcoinInfo.bpi).map(card => (
        <BitcoinValueCard
          key={card.code}
          code={card.code}
          rate_float={card.rate_float}
        />
      ));
    } else {
      ValueCards = <LoadingCard />;
    }

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className="fill-viewport gradient-background"
      >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className="card standard-shadow"
        >
          <Grid item>
            <img width="200px" src={bitcoinLogo} alt="icon" />
          </Grid>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
          >
            {ValueCards}
          </Grid>
          <Grid item className="card-footer">
            <span className="card-footer-text">
              Updated on: {this.state.cardmessage}
            </span>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
