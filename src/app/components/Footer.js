"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import translations from "../translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__brand">
          <svg className="footer__brand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 22l10-4 10 4L12 2z" />
          </svg>
          Agilix
        </div>
        <p className="footer__desc">{t.footer.desc}</p>
        <p className="footer__copyright">{t.footer.copyright}</p>
      </div>
      <div className="footer__links">
        <div className="footer__col">
          <h4 className="footer__col-title">{t.footer.legal}</h4>
          <div className="footer__col-list">
            <Link href="#" className="footer__col-link">{t.footer.privacy}</Link>
            <Link href="#" className="footer__col-link">{t.footer.terms}</Link>
            <Link href="#" className="footer__col-link">{t.footer.cookies}</Link>
          </div>
        </div>
        <div className="footer__col">
          <h4 className="footer__col-title">{t.footer.connect}</h4>
          <div className="footer__col-list">
            <Link href="/contact" className="footer__col-link">{t.footer.support}</Link>
            <Link href="/contact#milestones" className="footer__col-link">{t.footer.faq}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
