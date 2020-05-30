import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { StudentGrabber } from "components/Typography/StudentText";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  subheader: {
    marginTop: "25px",
    marginBottom: "15px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  padding1: {
    padding: theme.spacing(1, 0, 0),
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
}));

export default function StudentBody() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <StudentGrabber />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar
              alt="Jake"
              src="/images/students/jake.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Jake B.</Typography>
            <Typography varaint="subtitle1">
              Hey everyone! I'm Jake and I am a rising junior studying Computer
              Science at the University of Massachusetts Boston. Last Summer I
              was a web development intern at a company that offered me a role
              as a software development intern this Summer. Unfortunately that
              was rescinded due to COVID-19, so I am looking to put my skills to
              good work. I have experience with web development and this year I
              was one of fifteen people selected to take a course offered at
              Google's Cambridge offices in Android development
            </Typography>
            <Typography varaint="subtitle1">
              (you can see my final project
              <Link href="https://github.com/jpbates13/ubored"> here!</Link>
              ).
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar align="center" className={classes.large}>
              A
            </Avatar>
            <Typography variant="h6">Aaron</Typography>
            <Typography varaint="subtitle1">
              Hi everyone, I am Aaron, and I am going to be a senior in the fall
              at Rutgers University New Brunswick majoring in Computer Science.
              Back in November 2019 I was accepted into an internship for the
              summer but due to COVID-19, it was rescinded. I am most
              experienced in Java, but I know a fair amount of C#, Python, and
              C++, having worked in C# with Unity in class, and having made
              simple games in C++ and Python too. I hope that through this
              progam I can help create something meaningful over the summer and
              build up my programming ability
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar align="center" className={classes.large}>
              G
            </Avatar>
            <Typography variant="h6">Gabriel</Typography>
            <Typography varaint="subtitle1">
              Hi guys, my name is Gabriel and I’m a rising junior studying
              Information Science on a cybersecurity track and minoring in
              cybersecurity. I’ve worked with HTML/CSS/JavaScript but it was
              rudimentary. I just finished my second semester working with
              Python and I love it. I am also starting to familiarize myself
              with Linux, Kalilinux and violent python. I am mostly here because
              my internship got cancelled and I want to keep learning but it’s
              harder to learn alone so this is a perfect environment.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar align="center" className={classes.large}>
              A.S.
            </Avatar>
            <Typography variant="h6">Ashim Sedhain</Typography>
            <Typography varaint="subtitle1">
              Hey everyone, my name is Ashim Sedhain. I am an international
              student at the University of Texas. I am a rising junior
              interesting in web development and machine learning. I had a
              software engineering internship for the summer in which I was
              hoping to work with a team and solve real-world problems. But
              unfortunately, it was canceled. I am hoping I will still be able
              to do that while meeting new people and learning cool new
              technologies. HYO seems like a great place to start. Talking to
              people who share the same passion as me will be a good way to stay
              motivated and accountable. And at the end of the day, I want a
              cool story of how I spent my summer and what I did when faced with
              a challenge. I am currently working on a black and white
              colorization web application that you can see
              <Link href="https://github.com/asimsedhain/Color-This">
                {" "}
                here!
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
