import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import RotatingLogos from '@/components/RotatingLogos'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <AnimateOnScroll animation="fadeInLeft" className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Nous vous aidons à protéger votre entreprise.
            </h1>
            <p className={styles.heroSubtitle}>
              Expertise en conformité sociale et accompagnement URSSAF.
            </p>
            <Link href="/services" className={styles.heroBtn}>
              Voir nos services
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInRight" className={styles.heroGraphic}>
            <svg viewBox="0 0 500 400" className={styles.waveSvg}>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AECAD6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7D9BA8" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7D9BA8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#AECAD6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q125,100 250,150 T500,200 L500,400 L0,400 Z"
                fill="url(#gradient1)"
              />
              <path
                d="M0,250 Q150,150 300,200 T500,250 L500,400 L0,400 Z"
                fill="url(#gradient2)"
              />
            </svg>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Section Preview */}
      <section className={`section ${styles.aboutPreview}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">À propos</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className={styles.aboutText}>
              Fondé par un ancien inspecteur URSSAF, SocialForma accompagne les entreprises dans la maîtrise de leurs obligations sociales et la sécurisation de leurs pratiques. Spécialisé dans la prévention du travail dissimulé et des redressements URSSAF, SocialForma met son expertise au service des entrepreneurs et dirigeants pour identifier les zones de risque, fiabiliser les procédures internes et garantir une conformité durable.
              Notre mission : offrir à chaque structure une gestion sociale sereine, claire et conforme aux exigences de la réglementation.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <Link href="/about" className="btn" style={{ marginTop: '1rem' }}>
              En savoir plus
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Preview */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">Nos services</h2>
          </AnimateOnScroll>
          <div className={styles.servicesGrid}>
            <AnimateOnScroll animation="scaleIn" delay={0}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
                <h3>Formation</h3>
                <p>Sensibilisation et montée en compétences en conformité sociale.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={100}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
                <h3>Audit social</h3>
                <p>Diagnostic complet de vos pratiques sociales et identification des risques URSSAF.</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={200}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="20" x2="12" y2="10" />
                    <line x1="18" y1="20" x2="18" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
                <h3>Accompagnement contrôle URSSAF</h3>
                <p>Assistance stratégique avant, pendant et après contrôle URSSAF.</p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/services" className="btn">
                Voir tous les services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Rotating Logos Section */}
      <RotatingLogos />

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">Témoignages</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scaleIn" delay={100}>
            <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>
              « L’intervention de SocialForma nous a permis de comprendre précisément les attentes de l’URSSAF et de sécuriser nos procédures.
              Nous abordons désormais chaque contrôle avec sérénité. »
            </p>
            <div className={styles.testimonialAuthor}>
              <strong>Claire Martin</strong>
              <span>Directrice des ressources humaines</span>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

