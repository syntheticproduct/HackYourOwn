import RootLayout from 'layouts/RootLayout';
import React from 'react';
import { SupportSection } from '../src/components/Typography/IndexText';
import { Container } from '@material-ui/core';

export default function GetInvolved() {
	return (
		<RootLayout title='Get Involved | HYO'>
			<Container maxWidth='md'>
				<SupportSection />
			</Container>
		</RootLayout>
	);
}