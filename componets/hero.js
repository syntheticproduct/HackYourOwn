import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 0),
  },
  white: {
    color: "#FFFFFF",
  },
  orange: {
    color: "#ff9900"
  },
}));

export default function Hero() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          className={classes.orange}
        >
          Hack Your Own
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          className={classes.white}
          paragraph
        >
          Computer Science Internship!
        </Typography>
      </Container>
    </div>
  );
}
