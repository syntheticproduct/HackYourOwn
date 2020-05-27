import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import { BigCard } from 'components/cards';
import Hero from 'components/hero';
import TopBar from "appbar";
import Body from 'body';
import Copyright from 'Copyright';

const useStyles = makeStyles((theme) => ({
  background: {
    background: "url('./images/image1.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "75vh",
  },
}));

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <TopBar />
      <Container maxWidth="xl">
        <Hero />
        <Box my={4}>
          <BigCard>
            <Body />
          </BigCard>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
