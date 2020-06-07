import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

export const TitleStyledList = ({ title, text }) => (
  <List style={{ paddingTop: 0, paddingBottom: 0 }}>
    <ListItem style={{ paddingTop: 0, paddingBottom: 0 }}>
      <ListItemText
        disableTypography
        primary={(
          <>
            <Typography
              variant="h6"
              align="center"
              style={{ textDecoration: "underline" }}
            >
              {title}
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              {text}
            </Typography>
          </>
          )}
      />
    </ListItem>
  </List>
);
