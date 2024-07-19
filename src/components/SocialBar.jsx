import { FaInstagram, FaPinterest } from 'react-icons/fa';

function SocialBar() {
	return (
		<div className='md:flex md:gap-5'>
			<a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
				<FaInstagram className='text-accentOrange text-2xl mb-1' />
			</a>
			<a href='https://www.pinterest.com' target='_blank' rel='noopener noreferrer'>
				<FaPinterest className='text-accentOrange text-2xl' />
			</a>
		</div>
	);
}

export default SocialBar;
