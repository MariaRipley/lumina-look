import React from 'react';
import { useTranslation } from 'react-i18next';

function Lumina() {
  const { t } = useTranslation();

  return (
    <section id="about" className='bg-white py-28 text-center'>
      <div className='max-w-4xl mx-auto px-12'>
        <h2 className='font-lumina text-3xl font-semibold text-accentOrange mb-6'>
          {t('about.title')}
        </h2>
        <p className='text-gray-700 leading-relaxed'>
          {t('about.description')}
        </p>
      </div>
    </section>
  );
}

export default Lumina;
