import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MobileDrawer, { Menu } from "./drawers";

const useStyles = makeStyles((theme) => ({
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

export default function Dropdown() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return Menus(matches);
}

function Menus(matches) {

  if (matches) {
    return <Menu match={true} />;
  } else {
    return <MobileDrawer />
  }
}
