import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../componets/cards";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faCcStripe } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
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
  orange: {
    backgroundColor: "#5433FF",
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
        align="center"
      >
        Due to COVID-19, tens of thousands of Computer Science internships have
        been canceled, leaving students stranded. While many have turned to
        developing their own projects to fill the void, self-study lacks a few
        crucial components of the internship experience - mentoring and feedback
        from professionals. Hack Your Own aims to add this extra dimension. By
        participating, you'll join a community of like-minded peers to design
        and build high-impact open source projects while receiving mentorship
        and guidance from experienced developers. Think of it as an intensive
        summer senior design course supported by industry advisors.
      </Typography>
      <Typography variant="h4" align="center">
        Who we are
      </Typography>
      <Divider />
      <Typography
        variant="body1"
        color="textSecondary"
        paragraph
        
        className={classes.padding1}
        align="center"
      >
        We are senior developers and tech leads from major US companies. Bios will be added to this site soon.
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
        align="center"
      >
        We are welcoming CS students and early-career professionals interested
        in developing their skills by scoping, building and refining original
        open source projects during a time where there is a critical gap in
        internship opportunities. Our mission is to vet and connect high-quality
        emerging tech talent through a team-based, three month intensive program
        that provides peer-learning, professional development, mentorships and
        smartly-scoped projects.
      </Typography>
      <Typography variant="h4" align="center">
        Support Us
      </Typography>
      <Divider />
      <Cards />
      <Typography variant="h4" align="center">
        Contact Us
      </Typography>
      <Divider />
      <div className={classes.padding1} />
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
        direction="row"
        className={classes.padding1}
      >
        <Grid item xs={12} sm={6} className={classes.right}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faDiscord} />}
            target="_blank"
            href="https://discord.gg/KNKdGGe"
          >
            Join our Discord!
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.left}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faCcStripe} />}
            target="_blank"
            href="https://paypal.me/hackyourown"
            className={classes.orange}
          >
            Donate
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
