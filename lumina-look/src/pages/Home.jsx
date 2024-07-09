import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero'

function home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<Hero />
		</>
	);
}

export default home;
