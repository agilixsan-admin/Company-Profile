"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function ServicesPage() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <div className="page-header__badge">{t.badge}</div>
          <h1 className="page-header__title">
            {t.title} <span className="page-header__title-highlight">{t.titleHighlight}</span> {t.titleSuffix}
          </h1>
          <p className="page-header__subtitle">{t.subtitle}</p>
        </section>

        {/* Services Grid */}
        <section className="service-details">
          <div className="service-block service-block--featured">
            <h2 className="service-block__title">{t.webDevTitle}</h2>
            <p className="service-block__desc">{t.webDevDesc}</p>
            <ul className="service-block__list">
              <li className="service-block__list-item">{t.webDevItem1}</li>
              <li className="service-block__list-item">{t.webDevItem2}</li>
              <li className="service-block__list-item">{t.webDevItem3}</li>
              <li className="service-block__list-item">{t.webDevItem4}</li>
            </ul>
          </div>

          <div className="service-block">
            <div className="service-block__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h2 className="service-block__title">{t.consultTitle}</h2>
            <p className="service-block__desc">{t.consultDesc}</p>
            <Link href="/contact" className="services__link" style={{ marginTop: 'auto' }}>
              {t.consultLink}
            </Link>
          </div>

          <div className="service-block">
            <div className="service-block__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h2 className="service-block__title">{t.supportTitle}</h2>
            <p className="service-block__desc">{t.supportDesc}</p>
            <Link href="/contact" className="services__link" style={{ marginTop: 'auto' }}>
              {t.supportLink}
            </Link>
          </div>
        </section>

        {/* Our Services / Methodology */}
        <section className="methodology">
          <h2 className="page-header__title">{t.methodologyTitle}</h2>
          <p className="services__subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            {t.methodologySubtitle}
          </p>
          <div className="methodology__steps">
            <div className="step">
              <div className="step__number">{t.step1Number}</div>
              <h3 className="step__title">{t.step1Title}</h3>
              <p className="step__desc">{t.step1Desc}</p>
            </div>
            <div className="step">
              <div className="step__number">{t.step2Number}</div>
              <h3 className="step__title">{t.step2Title}</h3>
              <p className="step__desc">{t.step2Desc}</p>
            </div>
            <div className="step">
              <div className="step__number">{t.step3Number}</div>
              <h3 className="step__title">{t.step3Title}</h3>
              <p className="step__desc">{t.step3Desc}</p>
            </div>
            <div className="step">
              <div className="step__number">{t.step4Number}</div>
              <h3 className="step__title">{t.step4Title}</h3>
              <p className="step__desc">{t.step4Desc}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
