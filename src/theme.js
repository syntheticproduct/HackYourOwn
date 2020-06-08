import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
// eslint-disable-next-line import/no-mutable-exports
let theme = createMuiTheme({
  palette: {
    primary: { main: "#738ADB" },
    secondary: { main: "#19857b" },
    error: { main: red.A400 },
    background: { default: "#fff" },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
