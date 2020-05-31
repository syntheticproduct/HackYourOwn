import RootLayout from "layouts/RootLayout";
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  FirstStudent,
  FourthStudent,
  SecondStudent,
  ThirdStudent,
} from "Pages/PageStudent/StudentCards";
import { StudentGrabber } from "Pages/PageStudent/StudentText";

export default function Index() {
  return (
    <RootLayout title="Students | HYO">
      <Container maxWidth="lg">
        <StudentGrabber />
        <Grid container spacing={3}>
          <FirstStudent />
          <SecondStudent />
          <ThirdStudent />
          <FourthStudent />
        </Grid>
      </Container>
    </RootLayout>
  );
}
