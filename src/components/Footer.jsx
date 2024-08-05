import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className='bg-bgGreen text-white py-6' role='contentinfo'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <nav className='mt-2 space-y-2' role='navigation' aria-label={t('footer.linksAriaLabel')}>
              <Link to='/' className='block hover:text-accentOrange'>
                {t('footer.home')}
              </Link>
              <Link to='/services' className='block hover:text-accentOrange'>
                {t('footer.services')}
              </Link>
              <HashLink smooth to='/#about' className='block hover:text-accentOrange'>
                {t('footer.about')}
              </HashLink>
              <HashLink smooth to='/#contact' className='block hover:text-accentOrange'>
                {t('footer.contact')}
              </HashLink>
            </nav>
          </div>
          <div className='text-center md:text-left mb-4 md:mb-0'>
            <h3 className='text-lg font-semibold'>{t('footer.socialMedia')}</h3>
            <nav className='mt-2 space-y-2' role='navigation' aria-label={t('footer.socialMediaAriaLabel')}>
              <a href='https://instagram.com' className='block hover:text-accentOrange'>
                Instagram
              </a>
              <a href='https://pinterest.com' className='block hover:text-accentOrange'>
                Pinterest
              </a>
            </nav>
          </div>
          <div className='text-center md:text-left'>
            <h3 className='text-lg font-semibold'>{t('footer.contactInfo')}</h3>
            <p className='mt-2'>{t('footer.email')}: info@luminalook.com</p>
            <p>{t('footer.phone')}: +1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
