import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Lumina from '../components/Lumina';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

function Home() {
    const { t } = useTranslation();
    const [isVisibleHeader, setIsVisibleHeader] = useState(false);
    const [isVisibleHero, setIsVisibleHero] = useState(false);
    const [isVisibleLumina, setIsVisibleLumina] = useState(false);
    const [isVisibleContactForm, setIsVisibleContactForm] = useState(false);
    const [isVisibleFooter, setIsVisibleFooter] = useState(false);

    const headerRef = useRef(null);
    const heroRef = useRef(null);
    const luminaRef = useRef(null);
    const contactFormRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const observerHeader = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleHeader(true);
                }
            },
            { threshold: 0.1 }
        );

        const observerHero = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleHero(true);
                }
            },
            { threshold: 0.1 }
        );

        const observerLumina = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleLumina(true);
                }
            },
            { threshold: 0.1 }
        );

        const observerContactForm = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleContactForm(true);
                }
            },
            { threshold: 0.1 }
        );

        const observerFooter = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisibleFooter(true);
                }
            },
            { threshold: 0.1 }
        );

        if (headerRef.current) {
            observerHeader.observe(headerRef.current);
        }
        if (heroRef.current) {
            observerHero.observe(heroRef.current);
        }
        if (luminaRef.current) {
            observerLumina.observe(luminaRef.current);
        }
        if (contactFormRef.current) {
            observerContactForm.observe(contactFormRef.current);
        }
        if (footerRef.current) {
            observerFooter.observe(footerRef.current);
        }

        return () => {
            if (headerRef.current) {
                observerHeader.unobserve(headerRef.current);
            }
            if (heroRef.current) {
                observerHero.unobserve(heroRef.current);
            }
            if (luminaRef.current) {
                observerLumina.unobserve(luminaRef.current);
            }
            if (contactFormRef.current) {
                observerContactForm.unobserve(contactFormRef.current);
            }
            if (footerRef.current) {
                observerFooter.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <>
            <Header />
            <Hero ref={heroRef} isVisible={isVisibleHero} />
            <Lumina ref={luminaRef} isVisible={isVisibleLumina} />
            <ContactForm ref={contactFormRef} isVisible={isVisibleContactForm} />
            <Footer ref={footerRef} isVisible={isVisibleFooter} />

            {/* Enlaces de navegación para desplazarse suavemente a cada sección */}
            <nav className="fixed bottom-4 right-4 z-50">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="hero" smooth={true} duration={800}>
                            {t('sections.hero')}
                        </Link>
                    </li>
                    <li>
                        <Link to="lumina" smooth={true} duration={800}>
                            {t('sections.lumina')}
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={800}>
                            {t('sections.contact')}
                        </Link>
                    </li>
                    <li>
                        <Link to="footer" smooth={true} duration={800}>
                            {t('sections.footer')}
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Home;
