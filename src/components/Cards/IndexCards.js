import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { DiscordButton, DonateButton } from "components/Buttons/Buttons";
import { SectionButton } from "components/Buttons/StyledButton.styled";
import { SectionCard } from "components/Cards/SectionCards.styled";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(4),
  },
}));

export function IndexCards() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={2} justify={"center"}>
        <Grid item xs={12} sm={6} md={4}>
          <SectionCard
            title="Students"
            body="Apply as a student to get paired with a team of peers and a
            mentor. Our platform of choice for collaboration is Discord. You
            will need to join our discord server to start the process."
          >
            <SectionButton text="Join" url="https://discord.gg/KNKdGGe" />
          </SectionCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SectionCard
            title="Mentors"
            body="Can you spend an hour or two a week to mentor a small team of
                interns over summer? If yes, we would love to hear from you. We
                expect the stack to be mainly javascript-based
                (react/node/express) but we welcome any developer one who wants
                to give guidance regardless of language."
          >
            <SectionButton
              text="Apply"
              url="mailto:camille@hackyourown.org"
            />
          </SectionCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SectionCard
            title="Submit a project"
            body="Support our initiative by sending us open source project ideas."
          >
            <SectionButton
              text="Submit"
              url="mailto:project-idea@hackyourown.org"
            />
          </SectionCard>
        </Grid>
        <Grid item xs={12}>
          <SectionCard
            title="Donate"
            body="All donations will go strictly to supporting students - e.g.
                cloud server credits, training material, and an end-of-summer
                pizza event. Any and all excess funds will be donated to a
                code-related 501.c.3 non-profit. We are also looking for
                donations of cloud credits (e.g. AWS) for our build servers and
                compute instances. Vouchers for training platfoms (e.g Udemy)"
          >
            <DonateButton />
            <DiscordButton />
          </SectionCard>
        </Grid>
      </Grid>
    </Container>
  );
}
