import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../components/cards";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPaypal } from "@fortawesome/free-brands-svg-icons";


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
}));

export default function AdvisoryBody() {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center">
        The HYO Adivsory Board
      </Typography>
      <Divider />
      <Typography
        variant="body1"
        color="textSecondary"
        paragraph
        className={classes.padding1}
        align="center"
      >
      HYO's Software Engineering Immersive programs are most successful when they push students to encounter the same technical challenges faced by some of the most significant companies in the country including Google, LinkedIn and Uber. The HYO Advisory Board members provide this ongoing insight and mentorship to ensure our coding bootcamp residents face these challenges and are always pushed to work on groundbreaking technology.
      </Typography>
      
    </Container>
  );
}
