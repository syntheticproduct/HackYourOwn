import React from "react";
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
