import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "appbar";
import { BigCard } from "components/cards";
import Hero from "components/hero";
import Copyright from "Copyright";
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

export default function RootLayout({children, title}) {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.background}>
        <TopBar staff={true}/>
        <Container maxWidth="xl">
          <Hero />
          <Box my={4}>
            <BigCard>
              {children}
            </BigCard>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  );
}