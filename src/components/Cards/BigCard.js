import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4),
    paddingLeft: theme.spacing(0),
    paddingRight: theme.spacing(0),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
}));

export default function BigCard({ children }) {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <Card className={classes.card} raised>
        <CardContent className={classes.cardContent}>{children}</CardContent>
      </Card>
    </Container>
  );
}