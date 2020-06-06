import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MobileDrawer, { Menu } from "components/Appbar/Drawers";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  white: {
    backgroundColor: "white",
    color: "white",
  },
  icon: {
    marginRight: 5,
    "&:hover": {
      backgroundColor: "inherit",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  let menu;

  if (matches) {
    menu = <Menu match={true} />;
  } else {
    menu = <MobileDrawer />;
  }

  return (
    <AppBar position="sticky" color="inherit" className={classes.title}>
      {/* sticky doesn't work on IE 11, but who uses that anyways :) */}
      <Toolbar>
        <IconButton className={classes.icon} href="/" disableRipple>
          <img src="/images/appbarlogo.png" height={25} width={25} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Hack Your Own
        </Typography>
        {menu}
      </Toolbar>
    </AppBar>
  );
}
