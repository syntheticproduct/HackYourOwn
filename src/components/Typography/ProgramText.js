import {
  Heading,
  Body,
  BodyParagraph,
  BodyEnd,
} from "components/Typography/StyledTypography.styled";

export function ProjectSection() {
  return (
    <>
      <Heading text="Project Track" />
      <Body>
        This track is meant for <b>intermediate developers</b> or above. Based
        on your answers to our questionnaire, we match you up in groups of
        similar experience and interests, and have you code two projects, one
        orientation project (will allow you to get to know your group members
        through a small one-week project) and a <b>capstone</b> project (1 week
        of planning, 9 weeks of coding, one presentation).
      </Body>
      <BodyEnd>
        These projects will be <b>mentored by industry professionals</b> to
        ensure and give feedback on code quality, best practices, design, and so
        on. Mentors and volunteers will also help you pick projects that will
        match your professional goals and look the best on your resume.
      </BodyEnd>
    </>
  );
}

export function LearnerSection() {
  return (
    <>
      <Heading text="Learner Track" />
      <Body>
        The Learner Track for Hack Your Own will focus on teaching full-stack
        web development using the MERN stack (MongoDB, Express, React, and
        Node.js). Over the next 12 weeks, our goal is to get you familiar with
        front-end and back-end web development through{" "}
        <b> practical coding lessons </b>
        and a capstone project. The Learner track program will run from Monday,
        June 1st, 2020 to Friday, August 21st, 2020, according to the following
        structure:
      </Body>
      <BodyParagraph>
        These projects will be <b>mentored by industry professionals</b> to
        ensure and give feedback on code quality, best practices, design, and so
        on. Mentors and volunteers will also help you pick projects that will
        match your professional goals and look the best on your resume.
      </BodyParagraph>
      
    </>
  );
}
