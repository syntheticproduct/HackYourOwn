import Grid from "@material-ui/core/Grid";
import { ResponsiveAvatarCards, AvatarCards } from "components/Cards/AvatarCards.styled";

export function StaffCards() {
  return (
    <Grid container spacing={3}>
      <Alli />
      <Kenny />
      <Mahad />
      <Tye />
      <Johnathan />
      <Hendrix />
      <David />
      <Fabian />
      <Jae />
      <Catie />
    </Grid>
  );
}

export function LeadershipStaffCards() {
  return (
    <Grid container spacing={3}>
      <Camille />
      <Sabrina />
      <Aryan />
      <Leo />
      <Isabella />
      <Paul />
      <Binvant />
      <Josh />
      <Coleman />
      <Jenn />
    </Grid>
  );
}

const Camille = () => (
  <ResponsiveAvatarCards src="/images/staff/camille.png" name="Camille">
    Founder, Director
  </ResponsiveAvatarCards>
);

const Aryan = () => (
  <ResponsiveAvatarCards src="/images/staff/aryan.png" name="Aryan">
    Cohort Manager
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
    Website Lead
  </ResponsiveAvatarCards>
);

const Jenn = () => (
  <ResponsiveAvatarCards src="/images/staff/jenn.jpg" name="Jenn">
    Project Lead (NPO Filing)
  </ResponsiveAvatarCards>
);

const David = () => (
  <ResponsiveAvatarCards src="/images/staff/david.jpg" name="David">
    Cohort Associate
  </ResponsiveAvatarCards>
);

const Fabian = () => (
  <ResponsiveAvatarCards src="/images/staff/fabian.png" name="Fabian">
    Cohort Associate
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
    Learner Track Lead
  </ResponsiveAvatarCards>
);

const Catie = () => (
  <ResponsiveAvatarCards src="/images/staff/catie.jpg" name="Catie">
    Social Media
  </ResponsiveAvatarCards>
);