import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './page.module.css'

export default function Services() {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      title: 'Business Audit',
      description: 'Comprehensive analysis of your business processes, operations, and financial health. We identify areas for improvement and provide actionable recommendations to optimize performance and efficiency.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Compliance Consulting',
      description: 'Expert guidance to ensure your business meets all regulatory requirements and industry standards. We help you navigate complex compliance landscapes and avoid costly penalties.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      ),
      title: 'Risk Management',
      description: 'Identify and mitigate potential risks to protect your business. We develop comprehensive risk management strategies that safeguard your assets, reputation, and future growth.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      ),
      title: 'Strategic Planning',
      description: 'Develop long-term strategies to achieve your business objectives. We work with you to create actionable plans that align with your vision and drive sustainable growth.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="9" x2="15" y2="9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      title: 'Financial Advisory',
      description: 'Expert financial analysis and advisory services to help you make informed decisions. We provide insights into cash flow, investments, and financial planning.'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Training & Development',
      description: 'Comprehensive training programs to develop your team\'s skills and capabilities. We offer customized workshops and ongoing support to enhance organizational effectiveness.'
    }
  ]

  return (
    <div className={styles.services}>
      <section className="section">
        <div className="container">
          <AnimateOnScroll animation="fadeInUp">
            <h1 className="section-title">Our Services</h1>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <p className={styles.intro}>
              We offer a comprehensive range of consulting services designed to help your
              business thrive. Each service is tailored to meet your specific needs and
              delivered with the highest level of expertise and professionalism.
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

