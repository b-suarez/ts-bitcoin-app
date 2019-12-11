import React, { FunctionComponent } from "react";
import { Grid } from "@material-ui/core";
import "./BitcoinValueCard.css";

interface BitcoinCardProps {
  code: string;
  rate_float: number;
}

export const BitcoinValueCard: FunctionComponent<BitcoinCardProps> = props => {
  return (
    <Grid item xs={12}>
      <div className="value-card standard-shadow">
        <span className="value-card-text">
          <span className="primary-color-text">{props.code}: </span>
          {props.rate_float}
        </span>
      </div>
    </Grid>
  );
};

export default BitcoinValueCard;
