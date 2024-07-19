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
            <div className=' mx-auto'>
                {services.map((service, index) => (
                    <section key={service.id} id={service.id} className={`mb-8 md:p-10 flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse md:bg-lightGreen md:bg-opacity-35' : 'md:flex-row'}`}>
                        <div className='max-w-xs mx-auto md:w-1/2 mb-6 md:mb-10'>
                            <Carousel showThumbs={false} showStatus={false} infiniteLoop>
                                {service.images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image.src} alt={image.alt} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className='max-w-lg mx-auto md:w-1/2'>
                            <h2 className='text-3xl text-center font-semibold mb-4'>{t(service.title)}</h2>
                            <p className='text-lg text-center mt-4 p-4'>{t(service.description)}</p>
                        </div>
                    </section>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Services;
