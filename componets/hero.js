import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0),
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
          color="textPrimary"
          gutterBottom
        >
          Hack Your Own
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="textSecondary"
          paragraph
        >
          Computer Science Internship!
        </Typography>
      </Container>
    </div>
  );
}
