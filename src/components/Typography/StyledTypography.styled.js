import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";

export const Heading = ({ text }) => (
  <>
    <Typography variant="h4" align="center">
      {text}
    </Typography>
    <Divider />
  </>
);

export function Body({ children }) {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      paragraph
      style={{ padding: theme.spacing(1, 0, 1) }}
      align="center"
    >
      {children}
    </Typography>
  );
}
