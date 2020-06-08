import { TimelineList } from "components/List/ProgramList";
import {
  Body,
  BodyEnd,
  BodyParagraph,
  Heading,
} from "components/Typography/StyledTypography.styled";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export function ProjectSection() {
  return (
    <>
      <Heading fontWeight={700} variant="h3" text="Project Track" />
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
      <Heading fontWeight={700} variant="h3" text="Learner Track" />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Body>
            The Learner Track for Hack Your Own will focus on teaching
            full-stack web development using the MERN stack (MongoDB, Express,
            React, and Node.js). Over the next 12 weeks, our goal is to get you
            familiar with front-end and back-end web development through{" "}
            <b> practical coding lessons </b>
            and a capstone project. The Learner track program will run from
            Monday, June 1st, 2020 to Friday, August 21st, 2020.
          </Body>
        </Grid>
        <Grid justify="center" item container md={6}>
          <img style={{ maxWidth: "100%" }} src="/images/react.png" />
        </Grid>
        <Grid justify="center" item container md={6}>
          <img style={{ maxWidth: "100%" }} src="/images/experts.png" />
        </Grid>
        <Grid item xs={12} md={6}>
          <BodyParagraph>
            These projects will be <b>mentored by industry professionals</b> to
            ensure and give feedback on code quality, best practices, design,
            and so on. Mentors and volunteers will also help you pick projects
            that will match your professional goals and look the best on your
            resume.
          </BodyParagraph>
        </Grid>
      </Grid>
      <div
        style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}
      >
        <Typography variant="h4" component="h4">Learn</Typography>
        <Typography style={{ marginTop: "15px" }}>
          The first 8 weeks will be focused on learning the basics of web
          development from course material that we will distribute weekly over
          Discord and video. Small projects will also be assigned to help you
          build your skills.
        </Typography>
      </div>
      <TimelineList />
    </>
  );
}

export function LearnerBody() {
  return (
    <>
      <BodyParagraph>
        <i>
          *Note: there may be a small cost for course materials for weeks 5–8
          (maximum of $20) due to the use of outside materials for our
          curriculum.
        </i>
      </BodyParagraph>
      <div
        style={{ maxWidth: "500px", margin: "20px auto", textAlign: "center" }}
      >
        <Typography variant="h4" component="h4">
          Create
        </Typography>
        <Typography style={{ marginTop: "15px" }}>
          The last 4 weeks will be focused on using what you’ve learned over the
          summer to create and showcase a final project in groups of 4-6
          Learners, which can be put in your portfolio and resume.
        </Typography>
      </div>
    </>
  );
}