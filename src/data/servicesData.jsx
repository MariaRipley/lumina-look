import bridal from '../assets/bridal.webp';
import bridal2 from '../assets/bridal2.webp';
import bridal3 from '../assets/bridal3.webp';
import events from '../assets/events.webp';
import events2 from '../assets/events2.webp';
import events3 from '../assets/events3.webp';
import courses from '../assets/courses.webp';
import courses2 from '../assets/courses2.webp';
import courses3 from '../assets/courses3.webp';
import courses4 from '../assets/courses4.webp';
import advertising from '../assets/advertising.webp';
import advertising2 from '../assets/advertising2.webp';
import advertising3 from '../assets/advertising3.webp';
import advertising4 from '../assets/advertising4.webp';

const services = [
	{
		id: 'bridal',
		title: 'Bridal Makeup',
		images: [
			{ src: bridal, alt: 'Imagen 1' },
			{ src: bridal2, alt: 'Imagen 2' },
			{ src: bridal3, alt: 'Imagen 3' },
		],
		description:
			'Nuestro servicio de maquillaje para novias está diseñado para realzar tu belleza natural y crear un look que refleje tu estilo personal en el día más especial de tu vida. Utilizamos técnicas profesionales y productos de alta calidad para asegurar que te sientas radiante y segura durante toda la jornada. ',
	},
	{
		id: 'events',
		title: 'Event Makeup',
		images: [
			{ src: events, alt: 'Imagen 1' },
			{ src: events2, alt: 'Imagen 2' },
			{ src: events3, alt: 'Imagen 3' },
		],
		description:
			'Ya sea para una gala, una fiesta de graduación, una cena especial o cualquier otro evento, crearemos un maquillaje personalizado y que complemente tu personalidad.',
	},
	{
		id: 'courses',
		title: 'Makeup Courses',
		images: [
			{ src: courses, alt: 'Imagen 1' },
			{ src: courses2, alt: 'Imagen 2' },
			{ src: courses3, alt: 'Imagen 3' },
			{ src: courses4, alt: 'Imagen 4' },
		],
		description:
			'Explora nuestro exclusivo programa de cursos diseñados para empoderarte en el arte del maquillaje y el autocuidado. Ofrecemos una variedad de opciones que incluyen desde automaquillaje y técnicas avanzadas hasta cuidado de la piel y sesiones personalizadas para grupos de amigas.',
	},
	{
		id: 'advertising',
		title: 'Advertising Makeup',
		images: [
			{ src: advertising, alt: 'Imagen 1' },
			{ src: advertising2, alt: 'Imagen 2' },
			{ src: advertising3, alt: 'Imagen 3' },
			{ src: advertising4, alt: 'Imagen 4' },
		],
		description:
			'Confía en nosotros para llevar tu proyecto visual al siguiente nivel con maquillajes que cuentan historias y resaltan la esencia de tu marca o proyecto.',
	},
];

export default services;
