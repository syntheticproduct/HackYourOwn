import {
  SubHeading,
  Body,
} from "components/Typography/StyledTypography.styled";

export function MentorsGrabber() {
  return <SubHeading text="Meet The Mentors" />;
}

export function MentorsPurpose() {
  return <SubHeading text="Why mentors?" />;
}

export function MentorsText() {
  return (
    <Body>
      At Hack Your Own, we strive to give our students the opportunity to obtain
      the experience of an internship without actually being in one. We know
      that mentors are vital not only to the internship experience but also for
      the growth and development of our students. That is why we are seeking
      assistance from industry professionals to help mentor our students. This
      have this page as a thank you for all our mentors but to also show their
      qualifications. If you think you are qualified to mentor our students
      please reach out!
    </Body>
  );
}
