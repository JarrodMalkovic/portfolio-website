import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Navbar from '@/components/Navbar';
import PageHeading from '@/components/PageHeading';
import Text from '@/components/Text';
import ContactForm from '@/features/contact/components/ContactForm';
import useSeo from '@/hooks/useSeo';
import type { NextPage } from 'next';
import * as React from 'react';

const Contact: NextPage = () => {
	useSeo({ title: 'Jarrod Malkovic | Contact' });

	return (
		<>
			<Navbar />
			<PageHeading>Contact me.</PageHeading>
			<Container>
				<div className="mb-10 space-y-4 md:space-y-10">
					<div className="space-y-2 md:space-y-4">
						<Heading headingType="h2" size="2xl" weight="medium" className="flex">
							Let&lsquo;s Connect <span className="ml-2 animate-flying-rocket">🚀</span>
						</Heading>
						<Text>
							Whether you have a project in mind, need assistance with a tech challenge, or just
							want to say hi, I&lsquo;m here to help. Drop me a line, and I&lsquo;ll get back to you
							soon.
						</Text>
					</div>
					<ContactForm />
				</div>
			</Container>
		</>
	);
};

export default Contact;
