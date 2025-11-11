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
            <h1 className="section-title">Contact Us</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className={styles.intro}>
              Get in touch with us to discuss how we can help your business. Schedule a
              consultation or send us a message, and we'll get back to you as soon as possible.
            </p>
          </AnimateOnScroll>
          
          <div className={styles.contentGrid}>
            <AnimateOnScroll animation="fadeInLeft" className={styles.bookingSection}>
              <h2 className={styles.sectionSubtitle}>Schedule a Consultation</h2>
              <p className={styles.sectionDescription}>
                Book a 30-minute time slot to get advice on a specific problem. Select a date
                and time that works best for you.
              </p>
              <BookingSection />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInRight" className={styles.formSection}>
              <h2 className={styles.sectionSubtitle}>Send Us a Message</h2>
              <p className={styles.sectionDescription}>
                Have a question or want to learn more? Fill out the form below and we'll
                respond promptly.
              </p>
              <ContactForm />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  )
}

