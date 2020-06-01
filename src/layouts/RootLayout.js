import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "components/Appbar/Appbar";
import BigCard from "components/Cards/BigCard";
import Copyright from "components/Copyright/Copyright";
import Hero from "components/Hero/Hero";
import Head from "next/head";
import React from "react";

const useStyles = makeStyles((theme) => ({
  background: {
    background: "url('./images/image1.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "75vh",
  },
}));

export default function RootLayout({ children, title = "Home | HYO" }) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.background}>
        <TopBar />
        <Container maxWidth="xl">
          <Hero />
          <Box my={4}>
            <BigCard>
              <Container maxWidth="md">{children}</Container>
            </BigCard>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  );
}
