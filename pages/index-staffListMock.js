import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { BigCard } from '../components/cards';
import Copyright from '../src/Copyright';
import Hero from '../components/hero';
import Body from '../src/body';
import { makeStyles } from "@material-ui/core/styles";
import StaffList from '../src/staffList';

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
      <Container maxWidth="xl">
        <Hero />
        <Box my={4}>
          <BigCard>
            <StaffList />
          
          </BigCard>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}