import { useTranslation } from 'react-i18next';

function home() {
  const {t} = useTranslation();

	return (
		<>
			<h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
		</>
	);
}

export default home;
