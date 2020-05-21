import React from "react";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Cards from "../components/cards";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faPaypal } from "@fortawesome/free-brands-svg-icons";


const useStyles = makeStyles((theme) => ({
  header: {
marginTop: '15px',
marginBottom: '15px',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    margin: 'auto',
    
  },
}));

export default function StaffList() {
  const classes = useStyles();
 
  return (
    <Container maxWidth="md">
      <Typography variant='h3' align="center"  className={classes.header}>Meet The Team</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
         
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}> 
          <Avatar align='center' className={classes.large} >H</Avatar>
          <Typography variant='h6'>person -</Typography>
          <Typography varaint='subtitle1'>CEO</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}