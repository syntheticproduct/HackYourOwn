import { Heading, Body } from "components/Typography/StyledTypography.styled";
import { Link } from "next/link"

export function AboutSection() {
  return (
    <>
      <Heading text="About" />
      <Body>
        Due to COVID-19, tens of thousands of Computer Science internships have
        been canceled, leaving students stranded. While many have turned to
        developing their own projects to fill the void, self-study lacks a few
        crucial components of the internship experience - mentoring and feedback
        from professionals. Hack Your Own aims to add this extra dimension. By
        participating, you'll join a community of like-minded peers to design
        and build high-impact open source projects while receiving mentorship
        and guidance from experienced developers. Think of it as an intensive
        summer senior design course supported by industry advisors.
      </Body>
    </>
  );
}

export function GoalSection() {
  return (
    <>
      <Heading text="Our Goal" />
      <Body>
        We are welcoming CS students and early-career professionals interested
        in developing their skills by scoping, building and refining original
        open source projects during a time where there is a critical gap in
        internship opportunities. Our mission is to vet and connect high-quality
        emerging tech talent through a team-based, three month intensive program
        that provides peer-learning, professional development, mentorships and
        smartly-scoped projects.
      </Body>
    </>
  );
}

export function WhoWeAreSection() {
  return (
    <>
      <Heading text="Who we are" />
      <Body>
        We are senior developers and tech leads from major US companies. Bios
        will be added to this site soon. For now, view our staff page{" "}
        <Link href="/staff">here</Link>.
      </Body>
    </>
  );
}
