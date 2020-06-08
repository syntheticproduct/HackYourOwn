import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

export const Heading = ({ text }) => (
  <>
    <Typography style={{ margin: "30px 0" }} variant="h4" align="center">
      {text}
    </Typography>
    <HeadDivider />
  </>
);

Heading.propTypes = { text: PropTypes.string.isRequired };

export const SubHeading = ({ text }) => (
  <>
    <Typography style={{ margin: "30px 0" }} variant="h5" align="center">
      {text}
    </Typography>
    <HeadDivider />
  </>
);

SubHeading.propTypes = { text: PropTypes.string.isRequired };

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

Body.propTypes = { children: PropTypes.any.isRequired };

export function BodyParagraph({ children }) {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      style={{ padding: theme.spacing(0, 0, 0) }}
      align="center"
    >
      {children}
    </Typography>
  );
}

BodyParagraph.propTypes = { children: PropTypes.any.isRequired };

export function BodyEnd({ children }) {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      color="textSecondary"
      style={{ padding: theme.spacing(0, 0, 1) }}
      align="center"
    >
      {children}
    </Typography>
  );
}

BodyEnd.propTypes = { children: PropTypes.any.isRequired };
