import { useTranslation } from 'react-i18next';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Lumina from '../components/Lumina';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <Hero />
            <div id="about">
                <Lumina />
            </div>
            <div id="contact">
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Home;
