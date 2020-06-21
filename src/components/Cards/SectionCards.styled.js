import React from "react";
import { styled, withTheme } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";

// eslint-disable-next-line import/prefer-default-export
export const SectionCard = withTheme(
  styled(({ children, title, body, theme, ...other }) => (
    <Card {...other}>
      <SectionCardContent>
        <Typography style={{ fontWeight: 700, margin: theme.spacing(0, 0, 3, 0) }} gutterBottom variant="h5" component="h2" align="center">
          {title}
        </Typography>
        <Typography align="center" color="textSecondary" paragraph>
          {body}
        </Typography>
      </SectionCardContent>
      {React.Children.map(children, (child) => <CardActions>{child}</CardActions>)}
    </Card>
  ))({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
    "&:hover": { boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" },
  }),
);

const SectionCardContent = styled(CardContent)({ flexGrow: 1 });
