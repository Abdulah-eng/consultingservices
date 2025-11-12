'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './RotatingLogos.module.css'

const keywords = [
  'Conformité durable',
  'Maîtrise URSSAF',
  'Processus fiabilisés',
  'Prévention du risque',
  'Accompagnement humain',
  'Veille réglementaire',
]

export default function RotatingLogos() {
  return (
    <section className={styles.logosSection}>
      <div className="container">
        <AnimateOnScroll animation="fadeInUp">
          <h2 className={styles.title}>
            Nos engagements pour votre conformité
          </h2>
        </AnimateOnScroll>
        <div className={styles.logosContainer}>
          <div className={styles.logosTrack}>
            {keywords.concat(keywords).map((keyword, index) => (
              <div key={index} className={styles.logoItem}>
                <span className={styles.keywordBadge}>{keyword}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

