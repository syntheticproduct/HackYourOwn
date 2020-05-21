import React from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  hide: {
    display: "none",
  },
  drawer: {
    position: "absolute",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    height: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function MobileDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        className={clsx(open && classes.hide)}
      >
        <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.125rem" }} />
      </IconButton>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={{ fontSize: "1.125rem" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronRight}
                style={{ fontSize: "1.125rem" }}
              />
            )}
          </IconButton>
        </div>
        <Divider />
        <Menu />
      </Drawer>
    </>
  );
}

// Note this is super ghetto, I plan on fixing this later.
// I had choosen the hard path instead of the easy one so fml
const useStyles2 = makeStyles((theme) => ({
  dropdown: {
    position: "relative",
    display: "inlineBlock",
    "&:hover": {
      "& a": {
        display: "block",
      },
    },
  },
  dropdownContent: {
    position: "absolute",
    backgroundColor: "#f1f1f1",
    minWidth: "100%",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    overflow: "auto",
    zIndex: 1,
    "& a": {
      color: "black",
      padding: "12px 16px",
      textDecoration: "none",
      display: "none",
      "&:hover": {
        backgroundColor: "#ddd",
      },
    },
  },
}));

export function Menu(match) {
  const classes = useStyles2();

  const menu1 = {
    menu: "OUR STORIES",
    topic1: { desc: "Meet our Staff", href: "/staff" },
    topic2: { desc: "Meet our Students", href: "/students" },
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  
  // Remove comments in code to revert back to old...
  return (
    <div>
      {(() => {
        if (match["match"]) {
          return (
            <div className={classes.dropdown}>
              {/*
              <Button>{menu1["menu"]}</Button>
              <div className={classes.dropdownContent}>
              */}
                <Button
                  className={classes.dropdownTesto}
                  href={menu1["topic1"]["href"]}
                >
                  {menu1["topic1"]["desc"]}
                </Button>
                {/*
                <Button
                  className={classes.dropdownTesto}
                  href={menu1["topic2"]["href"]}
                >
                  {menu1["topic2"]["desc"]}
                </Button>
              </div>
                */}
            </div>
          );
        } else {
          return (
            <List>
              <ListItem
                button
                onClick={handleClick}
                component="a"
                href={menu1["topic1"]["href"]}
              >
                <ListItemText
                  disableTypography
                  primary={
                    <Typography component="div">
                      <Box fontWeight="fontWeightMedium" m={1}>
                        {menu1["topic1"]["desc"]}
                        {/* menu1["menu"] */}
                      </Box>
                    </Typography>
                  }
                />
                {/*
                {open ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    style={{ fontSize: "1.125rem" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    style={{ fontSize: "1.125rem" }}
                  />
                )}*/}
              </ListItem>
              {/*
              <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                style={{ backgroundColor: "#f8f8f6" }}
              >
                <List component="div" disablePadding>
                  <ListItem
                    button
                    className={classes.nested}
                    component="a"
                    href={menu1["topic1"]["href"]}
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography component="div">
                          <Box fontWeight="fontWeightLight" m={1}>
                            {menu1["topic1"]["desc"]}
                          </Box>
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
                <List component="div" disablePadding>
                  <ListItem
                    button
                    className={classes.nested}
                    component="a"
                    href={menu1["topic2"]["href"]}
                  >
                    <ListItemText
                      disableTypography
                      primary={
                        <Typography component="div">
                          <Box fontWeight="fontWeightLight" m={1}>
                            {menu1["topic2"]["desc"]}
                          </Box>
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Collapse>
                    */}
            </List>
          );
        }
      })()}
    </div>
  );
}
