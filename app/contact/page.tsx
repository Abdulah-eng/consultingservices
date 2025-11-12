'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import BookingSection from '@/components/BookingSection'
import ContactForm from '@/components/ContactForm'
import styles from './page.module.css'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="section-title">Contact</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className={styles.intro}>
              Besoin d’un accompagnement ou d’un audit de conformité ? Remplissez le formulaire ci-dessous, nous vous répondrons rapidement.
            </p>
          </AnimateOnScroll>

          <div className={styles.contentGrid}>
            <AnimateOnScroll animation="fadeInLeft" className={styles.detailsCard}>
              <h2 className={styles.sectionSubtitle}>Coordonnées directes</h2>
              <p className={styles.sectionDescription}>
                Préférez le contact direct ? Nous restons disponibles pour répondre à vos questions et préparer votre accompagnement.
              </p>
              <ul className={styles.detailsList}>
                <li>
                  <span className={styles.detailLabel}>Téléphone</span>
                  <a href="tel:+33614616093">06 14 61 60 93</a>
                </li>
                <li>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:contact@socialforma.fr">contact@socialforma.fr</a>
                </li>
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" className={styles.formSection} id="contact-form">
              <h2 className={styles.sectionSubtitle}>Formulaire de contact</h2>
              <p className={styles.sectionDescription}>
                Partagez votre besoin et nous reviendrons vers vous avec une réponse personnalisée.
              </p>
              <ContactForm />
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fadeInUp" className={styles.bookingWrapper}>
            <div className={styles.bookingSection} id="booking">
              <h2 className={styles.sectionSubtitle}>Planifier une consultation</h2>
              <p className={styles.sectionDescription}>
                Vous souhaitez retenir un créneau d’échange ? Utilisez notre agenda pour réserver une session de 30 minutes dédiée à votre situation.
              </p>
              <BookingSection />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

