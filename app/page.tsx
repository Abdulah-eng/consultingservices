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
          <div className={styles.heroGrid}>
            <AnimateOnScroll animation="fadeInLeft" className={styles.heroContent}>
              <div className={styles.heroBadge}>Votre partenaire conformité URSSAF</div>
              <h1 className={styles.heroTitle}>
                Nous sécurisons chaque aspect social de votre entreprise.
              </h1>
              <p className={styles.heroSubtitle}>
                SocialForma accompagne dirigeants et responsables RH pour transformer les obligations sociales en avantage compétitif durable.
              </p>
              <div className={styles.heroActions}>
                <Link href="/services" className="btn">
                  Voir nos services
                </Link>
                <Link href="/contact#booking" className={`btn secondary ${styles.secondaryAction}`}>
                  Planifier un échange
                </Link>
              </div>
              <div className={styles.heroStats}>
                <div>
                  <span>120+</span>
                  <p>contrôles URSSAF sécurisés</p>
                </div>
                <div>
                  <span>15 ans</span>
                  <p>d’expérience terrain</p>
                </div>
                <div>
                  <span>98%</span>
                  <p>de recommandations appliquées</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" className={styles.heroVisual}>
              <div className={styles.heroImages}>
                <div className={styles.heroImageLarge}>
                  <Image
                    src="/images/first.webp"
                    alt="Consultant SocialForma analysant un dossier de conformité"
                    fill
                    sizes="(min-width: 1100px) 420px, 70vw"
                    priority
                  />
                </div>
                <div className={styles.heroImageSmall}>
                  <Image
                    src="/images/second.png"
                    alt="Équipe SocialForma en accompagnement URSSAF"
                    fill
                    sizes="(min-width: 1100px) 220px, 40vw"
                    priority
                  />
                </div>
              </div>
              <div className={styles.heroPanel}>
                <div className={styles.panelHeader}>
                  <span>Score de conformité sociale</span>
                  <strong>9,4 / 10</strong>
                </div>
                <div className={styles.panelContent}>
                  <div className={styles.panelMetric}>
                    <span>Zones à risque identifiées</span>
                    <strong>18</strong>
                    <small>Recommandations prioritaires définies</small>
                  </div>
                  <div className={styles.panelDivider}></div>
                  <div className={styles.panelMetric}>
                    <span>Gain moyen constaté</span>
                    <strong>−42%</strong>
                    <small>de redressement URSSAF évité</small>
                  </div>
                </div>
                <div className={styles.panelFooter}>
                  <div>
                    <span>Prochaine étape</span>
                    <strong>Audit flash</strong>
                  </div>
                  <Link href="/contact#booking">Réserver maintenant</Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
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
                <div className={styles.serviceIcon}>
                  <span>01</span>
                </div>
                <h3>Formation</h3>
                <p>
                  Sensibilisation et montée en compétences en conformité sociale pour dirigeants, responsables RH et équipes paie.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={100}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <span>02</span>
                </div>
                <h3>Audit social</h3>
                <p>
                  Diagnostic complet de vos pratiques sociales et identification des risques URSSAF.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={200}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                  <span>03</span>
                </div>
                <h3>Accompagnement contrôle URSSAF</h3>
                <p>
                  Assistance stratégique avant, pendant et après contrôle URSSAF.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <div className={styles.servicesFooter}>
              <p>
                Chaque mission démarre par un diagnostic précis et se poursuit par un plan d’action pragmatique, adapté à votre organisation.
              </p>
              <Link href="/services" className="btn secondary">
                Découvrir l’approche détaillée
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className={`section ${styles.highlights}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">Nos expertises clés</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className="section-lead">
              SocialForma combine une expertise terrain et des outils innovants pour piloter votre conformité sociale en toute sérénité.
            </p>
          </AnimateOnScroll>

          <div className={styles.highlightGrid}>
            <AnimateOnScroll animation="fadeInUp" className={styles.highlightCard}>
              <div className={styles.cardContent}>
                <span className={styles.cardBadge}>Segmentation</span>
                <h3>Smartlists sur-mesure</h3>
                <p>
                  Créez des groupes dynamiques fondés sur les habitudes de vos collaborateurs et déclenchez
                  les actions adaptées au bon moment.
                </p>
              </div>
              <div className={styles.cardImage}>
                <Image
                  src="/images/third.jpg"
                  alt="Exemple de smartlist SocialForma"
                  fill
                  sizes="(min-width: 1100px) 360px, 90vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={100} className={styles.highlightCard}>
              <div className={styles.cardContent}>
                <span className={styles.cardBadge}>Communication</span>
                <h3>Multicanal coordonné</h3>
                <p>
                  Automatisez vos messages via email, SMS et notifications pour maintenir le dialogue et
                  fidéliser vos équipes comme vos partenaires.
                </p>
              </div>
              <div className={styles.cardImage}>
                <Image
                  src="/images/fifth.jpg"
                  alt="Notification multicanal SocialForma"
                  fill
                  sizes="(min-width: 1100px) 360px, 90vw"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200} className={styles.highlightCard}>
              <div className={styles.cardContent}>
                <span className={styles.cardBadge}>Reporting</span>
                <h3>Tableaux de bord actionnables</h3>
                <p>
                  Visualisez instantanément vos zones de risque, suivez l’avancement des plans d’actions et
                  anticipez vos contrôles URSSAF avec clarté.
                </p>
              </div>
              <div className={styles.cardImage}>
                <Image
                  src="/images/sixth.jpg"
                  alt="Tableau de bord SocialForma"
                  fill
                  sizes="(min-width: 1100px) 360px, 90vw"
                />
              </div>
            </AnimateOnScroll>
          </div>
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

