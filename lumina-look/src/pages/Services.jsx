import Header from '../components/Header';
import Footer from '../components/Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from 'react-i18next';

const services = [
	{
		id: 'bridal',
		title: 'Bridal Makeup',
		images: [
			{ src: 'url de la imagen 1', alt: 'Imagen 1' },
			{ src: 'url de la imagen 2', alt: 'Imagen 2' },
			{ src: 'url de la imagen 3', alt: 'Imagen 3' },
		],
		description: 'Descripción y detalles del servicio de maquillaje nupcial.',
	},
	{
		id: 'events',
		title: 'Event Makeup',
		images: [
			{ src: 'url de la imagen 1', alt: 'Imagen 1' },
			{ src: 'url de la imagen 2', alt: 'Imagen 2' },
			{ src: 'url de la imagen 3', alt: 'Imagen 3' },
		],
		description: 'Descripción y detalles del servicio de maquillaje para eventos.',
	},
	{
		id: 'courses',
		title: 'Makeup Courses',
		images: [
			{ src: 'url de la imagen 1', alt: 'Imagen 1' },
			{ src: 'url de la imagen 2', alt: 'Imagen 2' },
			{ src: 'url de la imagen 3', alt: 'Imagen 3' },
		],
		description: 'Descripción y detalles de los cursos de maquillaje.',
	},
	{
		id: 'advertising',
		title: 'Advertising Makeup',
		images: [
			{ src: 'url de la imagen 1', alt: 'Imagen 1' },
			{ src: 'url de la imagen 2', alt: 'Imagen 2' },
			{ src: 'url de la imagen 3', alt: 'Imagen 3' },
		],
		description: 'Descripción y detalles del servicio de maquillaje publicitario.',
	},
];

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
