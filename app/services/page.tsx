import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './page.module.css'

export default function Services() {
  const services = [
    {
      title: 'Formation',
      description:
        'SocialForma conçoit et anime des formations pratiques autour de la conformité sociale, du travail dissimulé et de la prévention des redressements URSSAF. Pensés pour les dirigeants, responsables RH et gestionnaires de paie, nos modules s’appuient sur des cas concrets pour vous transmettre les bons réflexes et instaurer une culture de conformité durable au sein de votre entreprise.',
      highlights: [
        'Sessions adaptées à votre secteur et aux enjeux de vos équipes',
        'Cas pratiques et simulations de contrôle pour ancrer les réflexes',
        'Supports pédagogiques opérationnels et checklist de conformité',
      ],
      image: '/images/fourth.jpg',
    },
    {
      title: 'Audit',
      description:
        'L’audit social SocialForma identifie les points de vigilance susceptibles d’entraîner un risque de redressement URSSAF. Contrats, bulletins de paie, pratiques RH : nous analysons vos documents pour vous remettre un rapport clair, hiérarchisant les actions correctives et des recommandations pragmatiques. L’objectif : anticiper, sécuriser et renforcer votre conformité avant tout contrôle.',
      highlights: [
        'Analyse exhaustive des processus paie et RH',
        'Cartographie des risques classés par criticité',
        'Plan d’action priorisé avec échéances et responsables',
      ],
      image: '/images/fifth.jpg',
    },
    {
      title: 'Accompagnement contrôle URSSAF',
      description:
        'Lorsqu’un contrôle URSSAF est engagé, SocialForma vous accompagne à chaque étape : préparation du dossier, échanges avec l’inspecteur, analyse des observations et stratégie de réponse. Selon vos besoins, nous mobilisons nos partenaires avocats spécialisés pour garantir une défense précise et coordonnée.',
      highlights: [
        'Préparation du dossier et sécurisation des justificatifs',
        'Coaching des interlocuteurs avant les entretiens de contrôle',
        'Analyse des observations et rédaction des réponses argumentées',
      ],
      image: '/images/sixth.jpg',
    }
  ]

  return (
    <div className={styles.services}>
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="section-title">Nos services</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={80}>
            <div className={styles.introPanel}>
              <div className={styles.introBadge}>Offre SocialForma</div>
              <p>
                SocialForma propose trois types d’interventions complémentaires pour répondre à tous les enjeux de conformité sociale et de gestion du risque URSSAF.
              </p>
              <ul>
                <li>Accompagnement sur mesure en fonction de votre structure</li>
                <li>Interventions en toute confidentialité aux côtés de vos équipes</li>
                <li>Reporting clair pour piloter vos actions de conformité</li>
              </ul>
            </div>
          </AnimateOnScroll>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <AnimateOnScroll key={service.title} animation="scaleIn" delay={index * 120}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceMedia}>
                    <Image
                      src={service.image}
                      alt={`Illustration ${service.title}`}
                      fill
                      sizes="(min-width: 1024px) 360px, 80vw"
                    />
                  </div>
                  <div className={styles.serviceHeader}>
                    <span className={styles.serviceIndex}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.serviceHighlights}>
                    {service.highlights?.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll animation="fadeInUp" delay={120}>
            <div className={styles.ctaPanel}>
              <div>
                <h2>Construisons ensemble votre feuille de route conformité.</h2>
                <p>
                  Chaque collaboration démarre par un audit flash pour identifier vos priorités et définir un plan d’action adapté à vos ressources.
                </p>
              </div>
              <div className={styles.ctaActions}>
                <Link href="/contact#booking" className="btn">
                  Planifier un audit flash
                </Link>
                <Link href="/contact" className="btn secondary">
                  Nous contacter
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

