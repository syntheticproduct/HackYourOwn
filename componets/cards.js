import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  blankCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3];

export default function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.blankCard}>
            <CardMedia
              className={classes.cardMedia}
              image=""
              title="Students"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Students
              </Typography>
              <Typography>
                Apply as a student to get paired with an mentor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Apply
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.blankCard}>
            <CardMedia
              className={classes.cardMedia}
              image=""
              title="Mentors"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Mentors
              </Typography>
              <Typography>
                Help raise the next generation of developer by applying to be an mentor!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Apply
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.blankCard}>
            <CardMedia
              className={classes.cardMedia}
              image=""
              title="Donors"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Donors
              </Typography>
              <Typography>
                Support our project by donating to us! We appreciate your donations.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Donate
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export function BigCard({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Card className={classes.card} raised="true">
        <CardContent className={classes.cardContent}>{children}</CardContent>
      </Card>
    </Container>
  );
}
