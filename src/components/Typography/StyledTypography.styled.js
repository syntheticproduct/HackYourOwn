import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";

export const Heading = ({ text }) => (
  <>
    <Typography style={{margin: '30px 0'}} variant="h4" align="center">
      {text}
    </Typography>
    <Divider style={{margin: '30px 0'}} />
  </>
);

export function Body({ children }) {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      style={{ padding: theme.spacing(1, 0, 0) }}
      align="center"
    >
      {children}
    </Typography>
  );
}

export function BodyParagraph({ children }) {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      style={{
        padding: theme.spacing(0, 0, 0),
      }}
      align="center"
    >
      {children}
    </Typography>
  );
}

export function BodyEnd({ children }) {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      style={{
        padding: theme.spacing(0, 0, 1),
      }}
      align="center"
    >
      {children}
    </Typography>
  );
}
