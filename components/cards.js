import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { PayPalButton, DiscordButton } from "../components/button";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(0),
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
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
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
  donateColor: {
    backgroundColor: "#00457C",
  },
}));

export default function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2} justify={"center"}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.blankCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Students
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                Apply as a student to get paired with a team of peers and a
                mentor. Our platform of choice for collaboration is Discord. You
                will need to join our discord server to start the process.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank"
                href="https://discord.gg/KNKdGGe"
                variant="outlined"
              >
                Join
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.blankCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Mentors
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                Can you spend an hour or two a week to mentor a small team of
                interns over summer? If yes, we would love to hear from you. We
                expect the stack to be mainly javascript-based
                (react/node/express) but we welcome any developer one who wants
                to give guidance regardless of language.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank noopener noreferrer"
                href="mailto:camille@hackyourown.org"
                variant="outlined"
              >
                Apply
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.blankCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Submit a project
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                Support our initiative by sending us open source project ideas.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                target="_blank noopener noreferrer"
                href="mailto:project-idea@hackyourown.org"
                variant="outlined"
              >
                Submit
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.blankCard}>
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                align="center"
              >
                Donate
              </Typography>
              <Typography align="center" color="textSecondary" paragraph>
                All donations will go strictly to supporting students - e.g.
                cloud server credits, training material, and an end-of-summer
                pizza event. Any and all excess funds will be donated to a
                code-related 501.c.3 non-profit. We are also looking for
                donations of cloud credits (e.g. AWS) for our build servers and
                compute instances. Vouchers for training platfoms (e.g udemy)
                are also needed.
              </Typography>
            </CardContent>
            <CardActions>
              <PayPalButton />
            </CardActions>
            <CardActions>
              <DiscordButton />
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
      <Card className={classes.card} raised>
        <CardContent className={classes.cardContent}>{children}</CardContent>
      </Card>
    </Container>
  );
}
