import React from "react";
import { Skeleton } from "@material-ui/lab";
import "./LoadingCard.css";
import { Box } from "@material-ui/core";

const LoadingCard: React.FC = props => {
  return (
    <Box width="200px" height="200px">
      <Skeleton
        variant="rect"
        width="100%"
        height="60%"
        style={{ marginBottom: "5%" }}
      />
      <Skeleton
        variant="rect"
        width="80%"
        height="10%"
        style={{ marginBottom: "5%" }}
      />
      <Skeleton variant="rect" width="80%" height="10%" />
    </Box>
  );
};

export default LoadingCard;
