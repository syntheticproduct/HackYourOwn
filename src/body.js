import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../componets/cards";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  padding1: {
    padding: theme.spacing(1, 0, 0),
  },
}));

export default function Body() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center">
        About
      </Typography>
      <Divider />
      <Typography
        variant="body1"
        color="textSecondary"
        paragraph
        className={classes.padding1}
      >
        Due to Covid-19, tens of thousands of Computer Science internships have
        been canceled, leaving students stranded. Many have turned to developing
        side projects to fill the void, but this lacks a few crucial components
        of the internship experience - mentoring and feedback from
        professionals. Our program aims to add this extra dimension to your side
        projects. By participating, you'll connect with like-minded peers to
        learn and collaborate with and form teams to design and build projects,
        all while receiving mentorship and guidance from experienced developers.
        Think of this as a summer senior design course with industry advisors.
      </Typography>
      <Typography variant="h4" align="center">
        Our Goal
      </Typography>
      <Divider />
      <Typography
        variant="body1"
        color="textSecondary"
        paragraph
        className={classes.padding1}
      >
        For everyone who is looking for a 2020 internship, we want high-quality
        tech talent to produce tech projects during a time where there is a
        critical gap in opportunity. Our mission is to vet and connect
        high-quality emerging tech talent through a three month intensive
        program that provide peer-learning, professional development mentorships
        and smartly-scoped projects
      </Typography>
      <Typography variant="h4" align="center">
        Join Us
      </Typography>
      <Divider />
      <Cards />
      <Typography variant="h4" align="center">
        Contact Us
      </Typography>
      <Divider />
      <Grid container justify="center" className={classes.padding1}>
        <Button variant="contained" color="primary">
          Join our Discord!
        </Button>
      </Grid>
    </Container>
  );
}
