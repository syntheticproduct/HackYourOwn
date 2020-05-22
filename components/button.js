import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPaypal } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  donateColor: {
    backgroundColor: "#00457C",
  },
}));

export function PayPalButton() {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FontAwesomeIcon icon={faPaypal} />}
      target="_blank"
      href="https://paypal.me/hackyourown"
      className={classes.donateColor}
    >
      Donate
    </Button>
  );
};

export function DiscordButton() {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<FontAwesomeIcon icon={faDiscord} />}
      target="_blank"
      href="https://discord.gg/KNKdGGe"
    >
      Join our Discord!
    </Button>
  );
};