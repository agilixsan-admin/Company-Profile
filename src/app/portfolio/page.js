"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function PortfolioPage() {
  const { lang } = useLanguage();
  const t = translations[lang].portfolio;

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="page-header">
          <h1 className="page-header__title">
            {t.title} <span className="page-header__title-highlight">{t.titleHighlight}</span>
          </h1>
          <p className="page-header__subtitle">{t.subtitle}</p>
        </section>

        {/* Filter Pills */}
        <div className="portfolio-filters">
          <button className="filter-tag filter-tag--active">{t.filterAll}</button>
          <button className="filter-tag">{t.filterEcommerce}</button>
          <button className="filter-tag">{t.filterCorporate}</button>
          <button className="filter-tag">{t.filterStartup}</button>
        </div>

        {/* Bento Grid */}
        <section className="portfolio-grid">
          {/* Nexus Trade Platform */}
          <article className="project-card project-card--large">
            <div
              className="project-card__image"
              style={{
                backgroundImage: `radial-gradient(circle at center, rgba(79, 209, 197, 0.15), transparent 70%), linear-gradient(135deg, #0d1527 0%, #101828 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="1.5">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div className="project-card__content">
              <span className="project-card__tag">{t.project1Tag}</span>
              <h2 className="project-card__title">{t.project1Title}</h2>
              <p className="project-card__desc">{t.project1Desc}</p>
            </div>
          </article>

          {/* Aegis Data Mesh */}
          <article className="project-card">
            <div
              className="project-card__image"
              style={{
                backgroundImage: `linear-gradient(135deg, #131c31 0%, #0a101f 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#5A4FCF" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <div className="project-card__content">
              <span className="project-card__tag">{t.project2Tag}</span>
              <h2 className="project-card__title">{t.project2Title}</h2>
              <p className="project-card__desc">{t.project2Desc}</p>
            </div>
          </article>

          {/* Veloce MVP */}
          <article className="project-card">
            <div
              className="project-card__image"
              style={{
                backgroundImage: `linear-gradient(135deg, #101a2e 0%, #152238 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="project-card__content">
              <span className="project-card__tag">{t.project3Tag}</span>
              <h2 className="project-card__title">{t.project3Title}</h2>
              <p className="project-card__desc">{t.project3Desc}</p>
            </div>
          </article>

          {/* Lumina Cart */}
          <article className="project-card project-card--horizontal">
            <div
              className="project-card__image"
              style={{
                backgroundImage: `radial-gradient(circle at left, rgba(90, 79, 207, 0.2), transparent 70%), linear-gradient(135deg, #0f172a 0%, #1e293b 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#4FD1C5" strokeWidth="1.5">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <div className="project-card__content">
              <span className="project-card__tag">{t.project4Tag}</span>
              <h2 className="project-card__title">{t.project4Title}</h2>
              <p className="project-card__desc">{t.project4Desc}</p>
              <Link href="/portfolio" className="project-card__link">
                {t.project4Link}
              </Link>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
