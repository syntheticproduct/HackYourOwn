import { SubHeading, Body } from "components/Typography/StyledTypography.styled";

export function StaffGrabber() {
  return <SubHeading text="Meet The Team" />;
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sem
      facilisis, auctor arcu nec, dictum dui. Etiam ultrices interdum accumsan.
      Aenean eu ligula ex. In ac diam tristique, sagittis ipsum nec, aliquam
      metus. Sed et rutrum ex, eget dictum odio. Vivamus pharetra justo urna, a
      convallis magna accumsan ac. Nunc pharetra diam ac nibh sollicitudin, sit
      amet bibendum augue iaculis.
    </Body>
  );
}
