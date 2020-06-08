import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";

export const Heading = ({ text, variant, fontWeight }) => {
  const theme = useTheme();

  return (
    <>
      <Typography style={{ margin: theme.spacing(4, 0), fontWeight: fontWeight || 400 }} variant={variant || "h4"} align="center">
        {text}
      </Typography>
      <HeadDivider />
    </>
  );
}

export const SubHeading = ({ text }) => {
  const theme = useTheme();

  return (
    <>
      <Typography style={{ margin: theme.spacing(4, 0) }} variant="h5" align="center">
        {text}
      </Typography>
      <HeadDivider />
    </>
  );
}

const HeadDivider = () => <Divider style={{ margin: "30px 0" }} />;

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
