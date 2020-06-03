import React from "react";
import RootLayout from "layouts/RootLayout";
import { MentorsCards } from "Pages/PageMentors/MentorsCards";
import { MentorsGrabber, MentorsText, MentorsPurpose } from "Pages/PageMentors/MentorsText";

export default function Staff() {
  return (
    <RootLayout title="Mentors | HYO">
      <MentorsPurpose />
      <MentorsText />
      <MentorsGrabber />
      <MentorsCards />
    </RootLayout>
  );
}
