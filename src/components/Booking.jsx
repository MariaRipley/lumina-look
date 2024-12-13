import BookingWidget from './BookingWidget';
import { useTranslation } from 'react-i18next';

function Booking() {
	const { t } = useTranslation();

	return (
		<section id='booking' className='bg-white py-28 text-center'>
			<div className=' mx-auto px-12'>
				<h2 className='font-lumina text-3xl font-semibold text-accentOrange mb-3'>{t('booking.title')}</h2>
				<BookingWidget />
			</div>
		</section>
	);
}

export default Booking;
