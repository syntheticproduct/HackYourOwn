import RootLayout from "layouts/RootLayout";
import React from "react";
import { SupportSection } from "Pages/PageInvolved/InvolvedText";
import { InvolvedCards } from "Pages/PageInvolved/InvolvedCards";

export default function GetInvolved() {
  return (
    <RootLayout title="Get Involved | HYO">
      <SupportSection />
      <InvolvedCards />
    </RootLayout>
  );
}
