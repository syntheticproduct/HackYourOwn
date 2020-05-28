import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Version 2, Copyright © Hack Your Own '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
