import RootLayout from "layouts/RootLayout";
import {
  AboutSection,
  GoalSection,
  WhoWeAreSection,
} from "Pages/PageIndex/IndexText";
import React from "react";

export default function Index() {
  return (
    <RootLayout>
      <AboutSection />
      <GoalSection />
      <WhoWeAreSection />
    </RootLayout>
  );
}
