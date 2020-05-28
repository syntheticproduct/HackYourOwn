import React from "react";
import { styled, withTheme } from "@material-ui/core/styles";
import { Card, CardContent, CardActions, Typography } from "@material-ui/core";

export const SectionCard = withTheme(
  styled(({ children, title, body, ...other }) => (
    <Card {...other}>
      <SectionCardContent>
        <Typography gutterBottom variant="h5" component="h2" align="center">
          {title}
        </Typography>
        <Typography align="center" color="textSecondary" paragraph>
          {body}
        </Typography>
      </SectionCardContent>
      {React.Children.map(children, (child) => {
        return <CardActions>{child}</CardActions>;
      })}
    </Card>
  ))({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  })
);

const SectionCardContent = styled(CardContent)({
  flexGrow: 1,
});
