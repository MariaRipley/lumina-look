import { Link } from 'react-router-dom';

import BgPic from '../assets/hero-bg.jpg';
import BridalPic from '../assets/bridal.jpg';
import EventsPic from '../assets/events.jpg';
import CoursesPic from '../assets/courses.jpg';
import AdPic from '../assets/advertising.jpg';

const services = [
	{ image: BridalPic, label: 'Bridal Makeup', path: '/bridal' },
	{ image: EventsPic, label: 'Event Makeup', path: '/events' },
	{ image: CoursesPic, label: 'Makeup Courses', path: '/courses' },
	{ image: AdPic, label: 'Advertising Makeup', path: '/advertising' },
];

function Hero() {
	return (
		<div className='relative bg-cover bg-center' style={{ backgroundImage: `url(${BgPic})` }}>
			<div className='absolute inset-0 bg-black opacity-50'></div>
			<div className='relative z-10 flex flex-col items-center p-10 space-y-10'>
				{services.map((service, index) => (
					<Link key={index} to={service.path}>
						<div className='relative w-72'>
							<div>
								<img src={service.image} alt={service.label} className='w-full h-3/4 object-cover' />
								<div className='absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 px-4 py-2'>
									<h2 className='text-lg font-semibold text-center'>{service.label}</h2>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}

export default Hero;
