import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const StyledList = ({ text, icon }) => {
  return (
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
};

const useStyles = makeStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0,
    margin: 0
  },
  left: {
    textAlign: "right"
  }
});

export const TitleStyledList = ({ title, text, icon, left }) => {
  const classes = useStyles();
  return (
      <ListItem className={classes.root} >
        <ListItemText
          className={useMediaQuery(theme => theme.breakpoints.down('sm')) ? "" : (left ? classes.left : "")}
          disableTypography
          primary={
            <>
              <Typography
                variant="h6"
              >
                {title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {text}
              </Typography>
            </>
          }
        />
      </ListItem>
  );
};
