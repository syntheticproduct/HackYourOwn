import { ResponsiveAvatarCards } from "components/Cards/AvatarCards.styled";
import { SubHeading } from "components/Typography/StyledTypography.styled";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

export function StaffCards() {
  return (
    <>  
      <Grid container spacing={3}>
        <Alli />
        <Kenny />
        <Mahad />
        <Tye />
        <Johnathan />
        <Kevin />
        <Rykuno />
        <Hendrix />
        <Lyndon />
        <David />
        <Fabian />
        <Jae />
      </Grid>
      <SubHeading text="The HackYourOwn Leadership Team" />
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed eu sem facilisis, auctor arcu nec, dictum dui. 
        Etiam ultrices interdum accumsan. Aenean eu ligula ex. 
        In ac diam tristique, sagittis ipsum nec, aliquam metus. 
        Sed et rutrum ex, eget dictum odio. Vivamus pharetra justo urna, 
        a convallis magna accumsan ac. Nunc pharetra diam ac nibh 
        sollicitudin, sit amet bibendum augue iaculis.
      </Typography>
      <SubHeading text="Leadership Team Members" />
      <Grid container spacing={3}>
        <Camille />
        <Aryan />
        <Isabella />
        <Paul />
        <Binvant />
        <Josh />
        <Coleman />
        <Leo />
        <Jenn />
        <Sabrina />
      </Grid>
    </>  
  );
}

// Step 1: In the future when we organize by names, I want them to be functions exported from here using the functions of each person.
// Step 2: Check staff.js when you export.

const Camille = () => (
  <ResponsiveAvatarCards src="/images/staff/camille.png" name="Camille">
    Founder, Director
  </ResponsiveAvatarCards>
);

const Aryan = () => (
  <ResponsiveAvatarCards src="/images/staff/aryan.png" name="Aryan">
    Community Lead (USA)
  </ResponsiveAvatarCards>
);

const Jae = () => (
  <ResponsiveAvatarCards src="/images/staff/jae.jpg" name="Jae">
    Community Associate
  </ResponsiveAvatarCards>
);

const Hendrix = () => (
  <ResponsiveAvatarCards src="/images/staff/hendrix.png" name="Hendrix">
    Engineer
  </ResponsiveAvatarCards>
);

const Isabella = () => (
  <ResponsiveAvatarCards src="/images/staff/isabella.jpg" name="Isabella">
    Communications
  </ResponsiveAvatarCards>
);

const Paul = () => (
  <ResponsiveAvatarCards src="/images/staff/paul.jpg" name="Paul">
    Community Lead (EMEA)
  </ResponsiveAvatarCards>
);

const Binvant = () => (
  <ResponsiveAvatarCards src="/images/staff/binvant.jpg" name="Binvant">
    Community Lead (Asia-Pacific)
  </ResponsiveAvatarCards>
);

const Josh = () => (
  <ResponsiveAvatarCards src="/images/staff/josh.png" name="Josh">
    Community Lead (Support)
  </ResponsiveAvatarCards>
);

const Coleman = () => (
  <ResponsiveAvatarCards src="/images/staff/coleman.jpg" name="Coleman">
    Community Lead (PoD)
  </ResponsiveAvatarCards>
);

const Leo = () => (
  <ResponsiveAvatarCards src="/images/staff/leo.jpg" name="Leo">
    Project Lead (Website)
  </ResponsiveAvatarCards>
);

const Jenn = () => (
  <ResponsiveAvatarCards src="/images/staff/jenn.jpg" name="Jenn">
    Project Lead (NPO Filing)
  </ResponsiveAvatarCards>
);

const Lyndon = () => (
  <ResponsiveAvatarCards src="/images/staff/lyndon.jpg" name="Lyndon">
    Cohort Advisor, Mentor
  </ResponsiveAvatarCards>
);

const David = () => (
  <ResponsiveAvatarCards src="/images/staff/david.jpg" name="David">
    Cohort Associate, Mentor
  </ResponsiveAvatarCards>
);

const Fabian = () => (
  <ResponsiveAvatarCards src="/images/staff/fabian.png" name="Fabian">
    Cohort Associate
  </ResponsiveAvatarCards>
);

const Kevin = () => (
  <ResponsiveAvatarCards src="/images/staff/kevin.png" name="Kevin">
    Mentor
  </ResponsiveAvatarCards>
);

const Rykuno = () => (
  <ResponsiveAvatarCards src="/images/staff/rykuno.jpg" name="Rykuno">
    Mentor
  </ResponsiveAvatarCards>
);

const Alli = () => (
  <ResponsiveAvatarCards src="/images/staff/alli.jpg" name="Alli">
    Volunteer
  </ResponsiveAvatarCards>
);

const Kenny = () => (
  <ResponsiveAvatarCards src="/images/staff/kenny.jpg" name="Kenny">
    Volunteer
  </ResponsiveAvatarCards>
);

const Mahad = () => (
  <ResponsiveAvatarCards src="/images/staff/mahad.jpg" name="Mahad">
    Volunteer
  </ResponsiveAvatarCards>
);

const Tye = () => (
  <ResponsiveAvatarCards src="/images/staff/tye.png" name="Tye">
    Volunteer
  </ResponsiveAvatarCards>
);

const Johnathan = () => (
  <ResponsiveAvatarCards src="/images/staff/johnathan.png" name="Johnathan">
    Volunteer, Engineer
  </ResponsiveAvatarCards>
);

const Sabrina = () => (
  <ResponsiveAvatarCards src="/images/staff/sabrina.png" name="Sabrina">
    Project Lead (Cohort)
  </ResponsiveAvatarCards>
);
