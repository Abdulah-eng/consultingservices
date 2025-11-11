import Link from 'next/link'
import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <AnimateOnScroll animation="fadeInLeft" className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              We help you protect and grow your business
            </h1>
            <Link href="/services" className={styles.heroBtn}>
              See our services
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInRight" className={styles.heroGraphic}>
            <svg viewBox="0 0 500 400" className={styles.waveSvg}>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#AECAD6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7D9BA8" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7D9BA8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#AECAD6" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M0,200 Q125,100 250,150 T500,200 L500,400 L0,400 Z"
                fill="url(#gradient1)"
              />
              <path
                d="M0,250 Q150,150 300,200 T500,250 L500,400 L0,400 Z"
                fill="url(#gradient2)"
              />
            </svg>
          </AnimateOnScroll>
        </div>
      </section>

      {/* About Section Preview */}
      <section className={`section ${styles.aboutPreview}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">About Us</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className={styles.aboutText}>
            We are a team of experienced consultants dedicated to helping businesses
            navigate complex challenges and achieve sustainable growth. With years of
            expertise across various industries, we provide tailored solutions that
            address your unique needs and drive measurable results.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <Link href="/about" className="btn" style={{ marginTop: '1rem' }}>
              Learn More
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Preview */}
      <section className={`section ${styles.servicesPreview}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">Our Services</h2>
          </AnimateOnScroll>
          <div className={styles.servicesGrid}>
            <AnimateOnScroll animation="scaleIn" delay={0}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              </div>
              <h3>Business Audit</h3>
              <p>Comprehensive analysis of your business processes and operations</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={100}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Compliance Consulting</h3>
              <p>Expert guidance to ensure your business meets all regulatory requirements</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={200}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="20" x2="12" y2="10" />
                  <line x1="18" y1="20" x2="18" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="16" />
                </svg>
              </div>
              <h3>Risk Management</h3>
              <p>Identify and mitigate potential risks to protect your business</p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="scaleIn" delay={300}>
              <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <line x1="9" y1="12" x2="15" y2="12" />
                </svg>
              </div>
              <h3>Strategic Planning</h3>
              <p>Develop long-term strategies to achieve your business objectives</p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll animation="fadeInUp" delay={400}>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/services" className="btn">
                View All Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`section ${styles.testimonials}`}>
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h2 className="section-title">Testimonials</h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="scaleIn" delay={100}>
            <div className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.testimonialText}>
              "Working with this consulting team has been transformative for our business.
              Their expertise and personalized approach helped us identify key opportunities
              and overcome significant challenges. Highly recommended!"
            </p>
            <div className={styles.testimonialAuthor}>
              <strong>John Smith</strong>
              <span>Chief Executive Officer</span>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}

