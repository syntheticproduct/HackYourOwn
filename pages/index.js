import RootLayout from "layouts/RootLayout";
import Container from "@material-ui/core/Container";
import {
  AboutSection,
  GoalSection,
  WhoWeAreSection,
} from "components/Typography/IndexText";
import React from 'react';

export default function Index() {
  return (
    <RootLayout>
      <Container maxWidth="md">
        <AboutSection />
        <GoalSection />
        <WhoWeAreSection />
      </Container>
    </RootLayout>
  );
}
