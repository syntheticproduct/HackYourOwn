import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  header: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  subheader: {
    marginTop: "25px",
    marginBottom: "15px",
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
    color: theme.palette.text.secondary,
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
    height: '230px'
  },
  padding1: {
    padding: theme.spacing(1, 0, 0),
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: "auto",
  },
}));

export default function StaffBody() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center" className={classes.header}>
        Meet The Team
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="C"
              src="/images/staff/camille.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Camille</Typography>
            <Typography varaint="subtitle1" align="center">
              Founder, Director
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="A"
              src="/images/staff/aryan.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Aryan</Typography>
            <Typography varaint="subtitle1">Community Lead (USA)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="J"
              src="/images/staff/jae.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Jae</Typography>
            <Typography varaint="subtitle1">Community Associate</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="P"
              src="/images/staff/paul.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Paul</Typography>
            <Typography varaint="subtitle1">Community Lead (EMEA)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="B"
              src="/images/staff/binvant.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Binvant</Typography>
            <Typography varaint="subtitle1">
              Community Lead (Asia-Pacific)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="J"
              src="/images/staff/josh.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Josh</Typography>
            <Typography varaint="subtitle1">
              Community Lead (Support)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="C"
              src="/images/staff/coleman.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Coleman</Typography>
            <Typography varaint="subtitle1">Community Lead (PoD)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="L"
              src="/images/staff/leo.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Leo</Typography>
            <Typography varaint="subtitle1">Project Lead (Website)</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="H"
              src="/images/staff/hendrix.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Hendrix</Typography>
            <Typography varaint="subtitle1">Engineer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="I"
              src="/images/staff/isabella.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Isabella</Typography>
            <Typography varaint="subtitle1">Communications</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="J"
              src="/images/staff/jenn.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Jenn</Typography>
            <Typography varaint="subtitle1">
              Project Lead (NPO Filing)
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="L"
              src="/images/staff/lyndon.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Lyndon</Typography>
            <Typography varaint="subtitle1">Cohort Advisor, Mentor</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="D"
              src="/images/staff/david.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">David</Typography>
            <Typography varaint="subtitle1">
              Cohort Associate, Mentor
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="F"
              src="/images/staff/fabian.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Fabian</Typography>
            <Typography varaint="subtitle1">Cohort Associate</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="K"
              src="/images/staff/kevin.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Kevin</Typography>
            <Typography varaint="subtitle1">Mentor</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="R"
              src="/images/staff/rykuno.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Rykuno</Typography>
            <Typography varaint="subtitle1">Mentor</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="A"
              src="/images/staff/alli.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Alli</Typography>
            <Typography varaint="subtitle1">Volunteer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="K"
              src="/images/staff/kenny.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Kenny</Typography>
            <Typography varaint="subtitle1">Volunteer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="M"
              src="/images/staff/mahad.jpg"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Mahad</Typography>
            <Typography varaint="subtitle1">Volunteer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="T"
              src="/images/staff/tye.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Tye</Typography>
            <Typography varaint="subtitle1">Volunteer</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Paper className={classes.paper}>
            <Avatar
              alt="J"
              src="/images/staff/johnathan.png"
              align="center"
              className={classes.large}
            />
            <Typography variant="h6">Johnathan</Typography>
            <Typography varaint="subtitle1">Volunteer, Engineer</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
