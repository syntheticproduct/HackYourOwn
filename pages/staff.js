import Grid from "@material-ui/core/Grid";
import RootLayout from 'layouts/RootLayout';
import { StaffCards } from "Pages/PageStaff/StaffCards";
import { StaffGrabber } from "Pages/PageStaff/StaffText";
import React from "react";

export default function Staff() {
  return (
    <RootLayout title="Staff | HYO">
        <StaffGrabber />
        <Grid container spacing={3}>
          <StaffCards />
        </Grid>
    </RootLayout>
  );
}