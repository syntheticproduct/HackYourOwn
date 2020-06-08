import { Typography, Grid, Avatar, Paper } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import PropTypes from "prop-types";

export const AvatarCards = ({ src, name, children }) => (
  <Grid item xs={12}>
    <StyledPaper>
      <StyledAvatar alt={name.charAt(0)} src={src} align="center" />
      <Typography variant="h6">{name}</Typography>
      <Typography varaint="subtitle1">{children}</Typography>
    </StyledPaper>
  </Grid>
);

AvatarCards.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export const ResponsiveAvatarCards = ({ src, name, children, lg }) => (
  <Grid item xs={12} sm={6} lg={lg || 3}>
    <StyledHeightPaper>
      <StyledAvatar alt={name.charAt(0)} src={src} align="center" />
      <Typography variant="h6">{name}</Typography>
      <Typography varaint="subtitle1">{children}</Typography>
    </StyledHeightPaper>
  </Grid>
);

ResponsiveAvatarCards.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  lg: PropTypes.number,
};

ResponsiveAvatarCards.defaultProps = { lg: 3 };

export const NoPictureAvatarCards = ({ name, children }) => (
  <Grid item xs={12}>
    <StyledPaper>
      <StyledAvatar align="center">{name.charAt(0)}</StyledAvatar>
      <Typography variant="h6">{name}</Typography>
      <Typography varaint="subtitle1">{children}</Typography>
    </StyledPaper>
  </Grid>
);

NoPictureAvatarCards.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" },
}));

const StyledHeightPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "230px",
  "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  margin: "auto",
}));
