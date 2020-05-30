import {
  Typography,
  Grid,
  Avatar,
  Paper,
  Link,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";




const StyledPaper = styled(Paper)({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
  },
});

const StyledAvatar = styled(Avatar)({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: "auto",
});