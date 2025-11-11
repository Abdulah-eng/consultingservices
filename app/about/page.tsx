import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './page.module.css'

export default function About() {
  return (
    <div className={styles.about}>
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="section-title">About Us</h1>
          </AnimateOnScroll>
          <div className={styles.content}>
            <AnimateOnScroll animation="fadeInLeft" className={styles.textBlock}>
              <p className={styles.paragraph}>
                We are a team of experienced consultants dedicated to helping businesses
                navigate complex challenges and achieve sustainable growth. With years of
                expertise across various industries, we provide tailored solutions that
                address your unique needs and drive measurable results.
              </p>
              <p className={styles.paragraph}>
                Our approach is built on three core principles: understanding your business
                deeply, providing actionable insights, and delivering results that matter.
                We work closely with our clients to ensure that every recommendation is
                practical, implementable, and aligned with your strategic objectives.
              </p>
              <p className={styles.paragraph}>
                Whether you're facing regulatory challenges, operational inefficiencies, or
                strategic planning needs, our team brings the expertise and dedication
                necessary to help you succeed. We believe in building long-term partnerships
                with our clients, providing ongoing support as your business evolves.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInRight" className={styles.values}>
              <h2 className={styles.subtitle}>Our Values</h2>
              <div className={styles.valuesGrid}>
                <AnimateOnScroll animation="scaleIn" delay={0}>
                  <div className={styles.valueItem}>
                  <h3>Excellence</h3>
                  <p>We strive for the highest standards in everything we do</p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={100}>
                  <div className={styles.valueItem}>
                  <h3>Integrity</h3>
                  <p>Honest, transparent communication in all our relationships</p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={200}>
                  <div className={styles.valueItem}>
                  <h3>Innovation</h3>
                  <p>Leveraging the latest insights and methodologies</p>
                  </div>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={300}>
                  <div className={styles.valueItem}>
                  <h3>Partnership</h3>
                  <p>Building long-term relationships based on trust and results</p>
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

