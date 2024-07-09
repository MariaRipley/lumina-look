import { useTranslation } from 'react-i18next';
import Header from '../components/Header';

function home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
		</>
	);
}

export default home;
