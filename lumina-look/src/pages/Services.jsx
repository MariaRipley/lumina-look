import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';
import services from '../data/servicesData';


function Services() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<div className='max-w-7xl mx-auto px-4 py-12'>
				{services.map((service) => (
					<section key={service.id} id={service.id} className='mb-8'>
						<h2 className='text-3xl font-semibold mb-4'>{t(service.title)}</h2>
						<Carousel showThumbs={false} showStatus={false} infiniteLoop>
							{service.images.map((image, index) => (
								<div key={index}>
									<img src={image.src} alt={image.alt} />
								</div>
							))}
						</Carousel>
						<p className='text-lg mt-4'>{t(service.description)}</p>
					</section>
				))}
			</div>
			<Footer />
		</>
	);
}

export default Services;
