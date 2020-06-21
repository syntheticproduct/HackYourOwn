import React from "react";
import RootLayout from "layouts/RootLayout";
import {
  ProjectSection,
  LearnerSection,
  LearnerBody,
} from "Pages/PageProgram/ProgramText";

export default function Staff() {
  return (
    <RootLayout title="Program | HYO">
      <ProjectSection />
      <LearnerSection />
      <LearnerBody />
    </RootLayout>
  );
}
