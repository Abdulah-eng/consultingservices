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
          <div className={styles.content}>
            <AnimateOnScroll animation="fadeInLeft" className={styles.textBlock}>
              <p className={styles.paragraph}>
                SocialForma a été fondé par un ancien inspecteur URSSAF, fort de plusieurs années d’expérience dans le contrôle et la prévention du travail dissimulé. Cette expérience de terrain offre une compréhension fine des pratiques à risque et des exigences de l’administration.
              </p>
              <p className={styles.paragraph}>
                Aujourd’hui, cette expertise est mise au service des entreprises, dirigeants et responsables RH pour les aider à anticiper, structurer et sécuriser leurs démarches sociales.
              </p>
              <p className={styles.paragraph}>
                Notre approche repose sur trois piliers : pédagogie, rigueur et pragmatisme.
              </p>
              <p className={styles.paragraph}>
                En comprenant les attentes précises de l’URSSAF, SocialForma permet à ses clients d’éviter les erreurs coûteuses, de fiabiliser leurs process internes et de travailler en toute sérénité.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInRight" className={styles.values}>
              <h2 className={styles.subtitle}>Nos valeurs</h2>
              <div className={styles.valuesGrid}>
                <AnimateOnScroll animation="scaleIn" delay={0}>
                  <div className={styles.valueItem}>
                  <h3>Transparence</h3>
                  <p>Expliquer les règles et simplifier leur application.</p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={100}>
                  <div className={styles.valueItem}>
                  <h3>Rigueur</h3>
                  <p>Garantir la conformité sociale dans la durée.</p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={200}>
                  <div className={styles.valueItem}>
                  <h3>Accompagnement</h3>
                  <p>Offrir une relation de proximité, centrée sur les besoins concrets.</p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={300}>
                  <div className={styles.valueItem}>
                  <h3>Prévention</h3>
                  <p>Transformer la contrainte du contrôle en opportunité de structuration.</p>
                  </div>
                </AnimateOnScroll>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}

