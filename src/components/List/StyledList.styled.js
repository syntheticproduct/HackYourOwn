import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-ui/core";

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

export const TitleStyledList = ({ title, text, icon }) => {
  return (
      <ListItem style={{ paddingTop: 0, paddingBottom: 0, margin: 0, display: "list-item" }}>
        <ListItemText
          disableTypography
          primary={
            <>
              <Typography
                variant="h6"
                style={{ textDecoration: "underline" }}
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
