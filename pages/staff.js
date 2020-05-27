import React from "react";
import StaffList from "staffList";
import RootLayout from 'layouts/RootLayout';

export default function Staff() {
  return (
    <RootLayout title="Staff | HYO">
      <StaffList/>
    </RootLayout>
  );
}