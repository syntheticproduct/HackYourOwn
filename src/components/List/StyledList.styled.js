import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import PropTypes from "prop-types";

export const StyledList = ({ text, icon }) => (
  <List style={{ paddingTop: 0, paddingBottom: 0 }}>
    <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
      <ListItemIcon style={{ minWidth: "30px" }}>
        <FontAwesomeIcon icon={icon} />
      </ListItemIcon>
      <ListItemText
        disableTypography
        primary={<Typography type="body2">{text}</Typography>}
      />
    </ListItem>
  </List>
);

StyledList.propTypes = {
  icon: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0,
  },
  left: { textAlign: "right" },
  header: { fontWeight: "lighter" },
});

export const TitleStyledList = ({ title, text, left }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemText
        className={useMediaQuery((theme) => theme.breakpoints.down("sm")) ? "" : (left ? classes.left : "")}
        disableTypography
        primary={(
          <>
            <Typography
              className={classes.header}
              variant="h6"
            >
              {title}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {text}
            </Typography>
          </>
          )}
      />
    </ListItem>
  );
};

TitleStyledList.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
