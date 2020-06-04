import Grid from "@material-ui/core/Grid";
import { ResponsiveAvatarCards } from "components/Cards/AvatarCards.styled";

export function MentorsCards() {
  return (
    <Grid container spacing={3}>
      <Kevin />
      <Rykuno />
      <Lyndon />
    </Grid>
  )
}

const Kevin = () => (
  <ResponsiveAvatarCards lg={4} src="/images/staff/kevin.png" name="Kevin">
    Mentor
  </ResponsiveAvatarCards>
);

const Rykuno = () => (
  <ResponsiveAvatarCards lg={4} src="/images/staff/rykuno.jpg" name="Rykuno">
    Mentor
  </ResponsiveAvatarCards>
);

const Lyndon = () => (
  <ResponsiveAvatarCards lg={4} src="/images/staff/lyndon.jpg" name="Lyndon">
    Cohort Advisor, Mentor
  </ResponsiveAvatarCards>
);