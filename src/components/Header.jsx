import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
				<button
					className='text-accentOrange text-3xl md:hidden'
					onClick={() => setIsOpen(!isOpen)}
					aria-expanded={isOpen}
					aria-controls='navigation-menu'
					aria-label='Toggle navigation menu'
				>
					&#9776;
				</button>
				<div className='flex flex-col items-center'>
					<Link to='/' className='text-accentOrange text-center'>
						<h1 className='font-lumina text-2xl text-accentOrange'>LUMINA LOOK</h1>
						<p className='text-accentOrange'>Makeup Artist</p>
					</Link>
				</div>
				<div className='hidden md:flex md:justify-center md:flex-1' id='navigation-menu' role='navigation'>
					<nav className='flex space-x-6'>
						<Link to='/' className='text-accentOrange' role='menuitem'>
							{t('home.title')}
						</Link>
						<Link to='/services' className='text-accentOrange' role='menuitem'>
							{t('services.title')}
						</Link>
						<HashLink smooth to='/#about' className='text-accentOrange' role='menuitem'>
							{t('about.title')}
						</HashLink>
						<HashLink smooth to='/#contact' className='text-accentOrange' role='menuitem'>
							{t('contact.title')}
						</HashLink>
					</nav>
				</div>
				<div className='hidden md:flex md:items-center'>
					<button onClick={() => changeLanguage('es')} className='text-accentOrange'>
						ES
					</button>
					<button onClick={() => changeLanguage('en')} className='text-accentOrange p-4'>
						EN
					</button>
				</div>
				<div className='flex-shrink-0'>
					<SocialBar />
				</div>
			</div>
			{isOpen && (
				<nav className='flex flex-col items-center mt-2 md:hidden' id='navigation-menu' role='navigation'>
					<Link to='/' className='text-accentOrange py-1' role='menuitem'>
						{t('home.title')}
					</Link>
					<Link to='/services' className='text-accentOrange py-1' role='menuitem'>
						{t('services.title')}
					</Link>
					<HashLink smooth to='/#about' className='text-accentOrange py-1' role='menuitem'>
						{t('about.title')}
					</HashLink>
					<HashLink smooth to='/#contact' className='text-accentOrange py-1' role='menuitem'>
						{t('contact.title')}
					</HashLink>
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
