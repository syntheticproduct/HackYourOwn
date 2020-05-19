import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  white: {
    backgroundColor: "white",
    color: "white",
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    marginRight: 5,
  },
}));

export default function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit" className={classes.title}>
      {/* sticky doesn't work on IE 11, but who uses that anyways :) */}
      <ToolBar>
        <Icon className={classes.icon}>
          {/* I didn't want to use the favicon, but there is no other choice, I need transparent of the logo only. This is only the placeholder.*/}
          <img src="/images/favicon2.ico" height={25} width={25} />
        </Icon>
        <Typography variant="h6">Hack Your Own</Typography>
        
      </ToolBar>
    </AppBar>
  );
}
