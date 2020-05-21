import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

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

export default function StudentList() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center" className={classes.subheader}>
        Students
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar align="center" className={classes.large}>
              J.B.
            </Avatar>
            <Typography variant="h6">Jake B</Typography>
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
              H
            </Avatar>
            <Typography variant="h6">person -</Typography>
            <Typography varaint="subtitle1">CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar align="center" className={classes.large}>
              H
            </Avatar>
            <Typography variant="h6">person -</Typography>
            <Typography varaint="subtitle1">CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Avatar align="center" className={classes.large}>
              H
            </Avatar>
            <Typography variant="h6">person -</Typography>
            <Typography varaint="subtitle1">CEO</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
