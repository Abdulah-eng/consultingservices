import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import RotatingLogos from '@/components/RotatingLogos'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp" className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Votre meilleur allié face aux contrôles URSSAF et aux risques de redressement.
            </h1>
            <div className={styles.heroActions}>
              <Link href="/services" className="btn">
                Voir nos services
              </Link>
              <Link href="/contact#booking" className={`btn secondary ${styles.secondaryAction}`}>
                Planifier un échange
              </Link>
            </div>
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
            <div className={styles.aboutCard}>
              <p>
                Fondé par un ancien inspecteur URSSAF, SocialForma accompagne les entreprises dans la maîtrise de leurs obligations sociales et la sécurisation de leurs pratiques. Nous intervenons à vos côtés pour identifier les zones de risque, fiabiliser les procédures internes et garantir une conformité durable.
              </p>
              <p>
                Notre mission : offrir à chaque structure une gestion sociale sereine, claire et alignée sur les exigences de la réglementation.
              </p>
            </div>
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
                <h3>Formation</h3>
                <p>
                  Sensibilisation et montée en compétences en conformité sociale pour dirigeants, responsables RH et équipes paie.
                </p>
                <Link href="/services" className={styles.serviceLink}>
                  En savoir plus
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={100}>
              <div className={styles.serviceCard}>
                <h3>Audit social</h3>
                <p>
                  Diagnostic complet de vos pratiques sociales et identification des risques URSSAF.
                </p>
                <Link href="/services" className={styles.serviceLink}>
                  En savoir plus
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={200}>
              <div className={styles.serviceCard}>
                <h3>Accompagnement contrôle URSSAF</h3>
                <p>
                  Assistance stratégique avant, pendant et après contrôle URSSAF.
                </p>
                <Link href="/services" className={styles.serviceLink}>
                  En savoir plus
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Pourquoi SocialForma Section */}
      <section className={`section ${styles.whySection}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">Pourquoi SocialForma ?</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <div className={styles.whyContent}>
              <p className={styles.whyIntro}>
                SocialForma, c'est l'expertise d'un ancien inspecteur URSSAF spécialisé dans la lutte contre le travail dissimulé.
              </p>
              <p className={styles.whyText}>
                Pendant plus de cinq ans, j'ai contrôlé des centaines de structures et identifié les pratiques à risque que les inspecteurs ciblent en priorité.
              </p>
              <p className={styles.whyText}>
                Avec SocialForma, je vous aide à :
              </p>
              <ul className={styles.whyList}>
                <li>Identifier les risques avant un contrôle</li>
                <li>Sécuriser RH / contrats / paie</li>
                <li>Éviter les redressements liés au travail dissimulé</li>
                <li>Gérer un contrôle URSSAF ou un redressement</li>
              </ul>
              <p className={styles.whyConclusion}>
                <strong>Objectif :</strong> transformer la conformité sociale en protection durable.
              </p>
              <p className={styles.whyTagline}>
                SocialForma : la conformité, vue de l'intérieur.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Rotating Logos Section */}
      <RotatingLogos />
    </div>
  )
}

