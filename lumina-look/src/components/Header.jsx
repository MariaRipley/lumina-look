import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialBar from './SocialBar';

function Header () {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<header className='p-4 flex flex-col items-center'>
			<button className='text-orange-600 text-3xl' onClick={() => setIsOpen(!isOpen)}>
				&#9776;
			</button>
			<h1 className='text-2xl text-orange-600'>LUMINA LOOK</h1>
			<p className='text-orange-600'>Makeup Artist</p>

			{isOpen && (
				<nav className='flex flex-col items-center mt-2'>
					<Link to='/' className='text-orange-600 py-1'>
						{t('home.title')}
					</Link>
					<Link to='/services' className='text-orange-600 py-1'>
						{t('services.title')}
					</Link>
					<Link to='/about' className='text-orange-600 py-1'>
						{t('about.title')}
					</Link>
					<Link to='/contact' className='text-orange-600 py-1'>
						{t('contact.title')}
					</Link>
					<div>
						<button onClick={() => changeLanguage('es')} className='mr-2'>
							ES
						</button>
						<button onClick={() => changeLanguage('en')}>EN</button>
					</div>
				</nav>
			)}
			<SocialBar />
		</header>
	);
};

export default Header;
