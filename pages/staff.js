import RootLayout from "layouts/RootLayout";
import { StaffCards, LeadershipStaffCards } from "Pages/PageStaff/StaffCards";
import {
  StaffGrabber,
  StaffLeadershipPurpose,
  StaffLeadershipTeam,
  StaffLeadershipText,
  VolunteerTeam,
} from "Pages/PageStaff/StaffText";
import React from "react";

export default function Staff() {
  return (
    <RootLayout title="Staff | HYO">
      <StaffGrabber />
      <StaffLeadershipPurpose />
      <StaffLeadershipText />
      <StaffLeadershipTeam />
      <LeadershipStaffCards />
      <VolunteerTeam />
      <StaffCards />
    </RootLayout>
  );
}
