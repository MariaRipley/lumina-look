// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Importa los archivos de traducción
import en from './en.json';
import es from './es.json';

i18n
	.use(HttpBackend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'es', // Lenguaje por defecto
		lng: 'es', // Lenguaje inicial
		debug: true,
		resources: {
			en: { translation: en },
			es: { translation: es },
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
