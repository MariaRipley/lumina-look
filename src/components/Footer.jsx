import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

function Footer() {
	return (
		<footer className='bg-bgGreen text-white py-6'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex flex-col md:flex-row justify-between items-center'>
					<div className='text-center md:text-left mb-4 md:mb-0'>
						<nav className='mt-2 space-y-2'>
							<Link to='/' className='block hover:text-accentOrange'>
								Inicio
							</Link>
							<Link to='/services' className='block hover:text-accentOrange'>
								Servicios
							</Link>
							<HashLink smooth to='/#about' className='block hover:text-accentOrange'>
								Acerca de
							</HashLink>
							<HashLink smooth to='/#contact' className='block hover:text-accentOrange'>
								Contacto
							</HashLink>
						</nav>
					</div>
					<div className='text-center md:text-left mb-4 md:mb-0'>
						<h3 className='text-lg font-semibold'>Redes sociales</h3>
						<nav className='mt-2 space-y-2'>
							<a href='https://instagram.com' className='block hover:text-accentOrange'>
								Instagram
							</a>
							<a href='https://pinterest.com' className='block hover:text-accentOrange'>
								Pinterest
							</a>
						</nav>
					</div>
					<div className='text-center md:text-left'>
						<h3 className='text-lg font-semibold'>Contacto</h3>
						<p className='mt-2'>Correo electrónico: info@luminalook.com</p>
						<p>Teléfono: +1234567890</p>
					</div>
				</div>
				<div className='mt-8 border-t border-lightGreen pt-4'>
					<p className='text-center text-sm'>&copy; 2024 Lumina Look. Todos los derechos reservados.</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
