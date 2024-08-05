import { Link } from 'react-router-dom';

import BgPic from '../assets/hero-bg.webp';
import BridalPic from '../assets/bridal.webp';
import EventsPic from '../assets/events.webp';
import CoursesPic from '../assets/courses.webp';
import AdPic from '../assets/advertising.webp';

const services = [
	{ image: BridalPic, label: 'Bridal Makeup', path: '/services#bridal' },
	{ image: EventsPic, label: 'Event Makeup', path: '/services#events' },
	{ image: CoursesPic, label: 'Makeup Courses', path: '/services#courses' },
	{ image: AdPic, label: 'Advertising Makeup', path: '/services#advertising' },
];

function Hero() {
	return (
		<div className=' relative bg-cover bg-center' style={{ backgroundImage: `url(${BgPic})` }}>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='relative z-10 p-20'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
					{services.map((service, index) => (
						<Link key={index} to={service.path}>
							<div className='relative  mx-auto'>
								<div>
									<img loading='lazy' src={service.image} alt={service.label} className='w-full h-3/4 object-cover' />
									<div className='absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 px-4 py-2'>
										<h2 className='text-lg font-semibold text-center'>{service.label}</h2>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export default Hero;
