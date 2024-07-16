import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SocialBar from './SocialBar';

function Header() {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<header className='p-4'>
			<div className='flex justify-between items-center w-full'>
				<button className='text-orange-600 text-3xl md:hidden' onClick={() => setIsOpen(!isOpen)}>
					&#9776;
				</button>
				<div className='flex flex-col items-center'>
					<Link to='/' className='text-orange-600 text-center'>
						<h1 className='text-2xl text-orange-600'>LUMINA LOOK</h1>
						<p className='text-orange-600'>Makeup Artist</p>
					</Link>
				</div>
				<div className='hidden md:flex md:justify-center md:flex-1'>
					<nav className='flex space-x-6'>
						<Link to='/' className='text-orange-600'>
							{t('home.title')}
						</Link>
						<Link to='/services' className='text-orange-600'>
							{t('services.title')}
						</Link>
						<Link to='#about' className='text-orange-600'>
							{t('about.title')}
						</Link>
						<Link to='#contact' className='text-orange-600'>
							{t('contact.title')}
						</Link>
					</nav>
				</div>
				<div className='flex-shrink-0'>
					<SocialBar />
				</div>
			</div>
			{isOpen && (
				<nav className='flex flex-col items-center mt-2 md:hidden'>
					<Link to='/' className='text-orange-600 py-1'>
						{t('home.title')}
					</Link>
					<Link to='/services' className='text-orange-600 py-1'>
						{t('services.title')}
					</Link>
					<Link to='#about' className='text-orange-600 py-1'>
						{t('about.title')}
					</Link>
					<Link to='#contact' className='text-orange-600 py-1'>
						{t('contact.title')}
					</Link>
					<div className='flex'>
						<button onClick={() => changeLanguage('es')} className='mr-2'>
							ES
						</button>
						<button onClick={() => changeLanguage('en')}>EN</button>
					</div>
				</nav>
			)}
		</header>
	);
}

export default Header;
