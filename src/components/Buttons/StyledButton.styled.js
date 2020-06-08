import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledButton = ({ icon, href, color, text }) => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<FontAwesomeIcon icon={icon} />}
    target="_blank noopener noreferrer"
    href={href}
    style={{ backgroundColor: color }}
  >
    {text}
  </Button>
);

StyledButton.propTypes = {
  icon: PropTypes.any.isRequired, // Dunno can't find instance of icon.
  href: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export const SectionButton = ({ text, url }) => (
  <Button
    size="small"
    color="primary"
    target="_blank noopener noreferrer"
    href={url}
    variant="outlined"
  >
    {text}
  </Button>
);

SectionButton.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
