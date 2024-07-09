import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Lumina from '../components/Lumina';

function home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<Hero />
			<Lumina />
		</>
	);
}

export default home;
