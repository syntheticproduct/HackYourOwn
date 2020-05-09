import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { BigCard } from '../componets/cards';
import Copyright from '../src/Copyright';
import Hero from '../componets/hero';
import Body from '../src/body';

export default function Index() {
  return (
    <div>
      <Container maxWidth="xl">
        <Hero />
        <Box my={4}>
          <BigCard>
            <Body />
          </BigCard>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
