import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { useTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";

export const Heading = ({ text }) => {
  const theme = useTheme();

  return (
    <>
      <Typography
        style={{ margin: theme.spacing(5, 0, 2, 0), fontWeight: 700 }}
        variant="h4"
        align="center"
      >
        {text}
      </Typography>
    </>
  );
};

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string,
  fontWeight: PropTypes.number,
};

Heading.defaultProps = {
  variant: "h4",
  fontWeight: 400,
};

export const SubHeading = ({ text }) => {
  const theme = useTheme();
  return (
    <>
      <Typography style={{ margin: theme.spacing(5, 0, 2, 0), fontWeight: 700 }} variant="h5" align="center">
        {text}
      </Typography>
    </>
  )
};

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
      paragraph
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
      paragraph
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
      paragraph
    >
      {children}
    </Typography>
  );
}

BodyEnd.propTypes = { children: PropTypes.any.isRequired };
