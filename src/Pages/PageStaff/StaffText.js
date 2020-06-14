import { Heading, SubHeading, Body } from "components/Typography/StyledTypography.styled";

export function StaffGrabber() {
  return <Heading text="Meet The Team" />;
}

export function StaffLeadershipPurpose() {
  return <SubHeading text="The HackYourOwn Leadership Team" />;
}

export function StaffLeadershipTeam() {
  return <SubHeading text="Leadership Team Members" />;
}

export function StaffLeadershipText() {
  return (
    <Body>
      Meet our leadership team! Our leadership team oversees the program's
      efforts and affirms that the program is running smoothly.
    </Body>
  );
}
