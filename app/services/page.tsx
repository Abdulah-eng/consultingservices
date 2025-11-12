import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './page.module.css'

export default function Services() {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="8" y1="8" x2="16" y2="8" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="8" y1="16" x2="16" y2="16" />
        </svg>
      ),
      title: 'Formation',
      description:
        'SocialForma conçoit et anime des formations pratiques autour de la conformité sociale, du travail dissimulé et de la prévention des redressements URSSAF. Pensés pour les dirigeants, responsables RH et gestionnaires de paie, nos modules s’appuient sur des cas concrets pour vous transmettre les bons réflexes et instaurer une culture de conformité durable au sein de votre entreprise.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
          <path d="M4 10h16" />
          <path d="M10 4v16" />
          <path d="M15 15l2 2 3-3" />
        </svg>
      ),
      title: 'Audit',
      description:
        'L’audit social SocialForma identifie les points de vigilance susceptibles d’entraîner un risque de redressement URSSAF. Contrats, bulletins de paie, pratiques RH : nous analysons vos documents pour vous remettre un rapport clair, hiérarchisant les actions correctives et des recommandations pragmatiques. L’objectif : anticiper, sécuriser et renforcer votre conformité avant tout contrôle.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-7a2 2 0 0 0-2-2h-4" />
          <path d="M4 21v-4a4 4 0 0 1 4-4h4" />
          <circle cx="12" cy="7" r="4" />
          <path d="M16 17l3 3 3-3" />
        </svg>
      ),
      title: 'Accompagnement contrôle URSSAF',
      description:
        'Lorsqu’un contrôle URSSAF est engagé, SocialForma vous accompagne à chaque étape : préparation du dossier, échanges avec l’inspecteur, analyse des observations et stratégie de réponse. Selon vos besoins, nous mobilisons nos partenaires avocats spécialisés pour garantir une défense précise et coordonnée.'
    }
  ]

  return (
    <div className={styles.services}>
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="section-title">Nos services</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className={styles.intro}>
              SocialForma propose trois types d’interventions complémentaires pour répondre à tous les enjeux de conformité sociale et de gestion du risque URSSAF.
            </p>
          </AnimateOnScroll>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <AnimateOnScroll key={index} animation="scaleIn" delay={index * 100}>
                <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  {service.icon}
                </div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

