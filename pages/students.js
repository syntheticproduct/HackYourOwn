import RootLayout from "layouts/RootLayout";
import React from "react";
import StudentBody from "body/StudentBody";

export default function Index() {
  return (
    <RootLayout title="Students | HYO" student>
      <StudentBody />
    </RootLayout>
  );
}
