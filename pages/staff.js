import RootLayout from "layouts/RootLayout";
import { StaffCards } from "Pages/PageStaff/StaffCards";
import { StaffGrabber } from "Pages/PageStaff/StaffText";
import React from "react";

export default function Staff() {
  return (
    <RootLayout title="Staff | HYO">
      <StaffGrabber />
      <StaffCards />
      {/* Step 3: Make a subheading then use the cards. */}
    </RootLayout>
  );
}
