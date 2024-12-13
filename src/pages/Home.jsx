import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Lumina from '../components/Lumina';
import ContactForm from '../components/ContactForm';
import Booking from '../components/Booking';
import Footer from '../components/Footer';

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<Hero />
			<Lumina />
			<Booking />
			<ContactForm />
			<Footer />
		</>
	);
}

export default Home;
