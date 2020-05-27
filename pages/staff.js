import React from "react";
import StaffBody from "body/StaffBody";
import RootLayout from 'layouts/RootLayout';

export default function Staff() {
  return (
    <RootLayout title="Staff | HYO">
      <StaffInfo />
    </RootLayout>
  );
}