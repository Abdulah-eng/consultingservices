import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="section-title">Une expertise née du terrain</h1>
          </AnimateOnScroll>
          <div className={styles.introLayout}>
            <AnimateOnScroll animation="fadeInLeft" className={styles.storyCard}>
              <span className={styles.storyBadge}>Expérience URSSAF</span>
              <div className={styles.storyMedia}>
                <Image
                  src="/images/third.jpg"
                  alt="Expert SocialForma lors d’un audit social"
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                />
              </div>
              <p>
                SocialForma a été fondé par un ancien inspecteur URSSAF, fort de plusieurs années d’expérience dans le contrôle et la prévention du travail dissimulé. Cette expérience de terrain offre une compréhension fine des pratiques à risque et des exigences de l’administration.
              </p>
              <p>
                Aujourd’hui, cette expertise est mise au service des entreprises, dirigeants et responsables RH pour les aider à anticiper, structurer et sécuriser leurs démarches sociales.
              </p>
              <p>
                Notre approche repose sur trois piliers : pédagogie, rigueur et pragmatisme. Nous travaillons à vos côtés pour transformer chaque contrainte réglementaire en levier de performance sociale durable.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" className={styles.founderPanel}>
              <h2>Le fondateur</h2>
              <ul>
                <li>
                  <span>15 ans d’expérience</span>
                  <p>Contrôles URSSAF et prévention des risques sociaux</p>
                </li>
                <li>
                  <span>+120 missions</span>
                  <p>Menées auprès d’entreprises de toutes tailles et secteurs</p>
                </li>
                <li>
                  <span>4 thématiques clés</span>
                  <p>Travail dissimulé, frais professionnels, paie, gouvernance sociale</p>
                </li>
              </ul>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fadeInUp" className={styles.values}>
            <h2 className={styles.subtitle}>Nos valeurs</h2>
            <div className={styles.valuesGrid}>
              <AnimateOnScroll animation="scaleIn" delay={0}>
                <div className={styles.valueItem}>
                  <div className={styles.valueNumber}>01</div>
                  <h3>Transparence</h3>
                  <p>Expliquer les règles et simplifier leur application.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleIn" delay={100}>
                <div className={styles.valueItem}>
                  <div className={styles.valueNumber}>02</div>
                  <h3>Rigueur</h3>
                  <p>Garantir la conformité sociale dans la durée.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleIn" delay={200}>
                <div className={styles.valueItem}>
                  <div className={styles.valueNumber}>03</div>
                  <h3>Accompagnement</h3>
                  <p>Offrir une relation de proximité, centrée sur les besoins concrets.</p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scaleIn" delay={300}>
                <div className={styles.valueItem}>
                  <div className={styles.valueNumber}>04</div>
                  <h3>Prévention</h3>
                  <p>Transformer la contrainte du contrôle en opportunité de structuration.</p>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

