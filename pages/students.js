import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { BigCard } from "../components/cards";
import Copyright from "../src/Copyright";
import Hero from "../components/hero";
import { makeStyles } from "@material-ui/core/styles";
import StudentList from "../src/studentList";
import TopBar from "../src/appbar";
import Head from "next/head";

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
    <>
      <Head>
        <title>Students | HYO</title>
      </Head>
      <div className={classes.background}>
        <TopBar student={true}/>
        <Container maxWidth="xl">
          <Hero />
          <Box my={4}>
            <BigCard>
              <StudentList />
            </BigCard>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  );
}
