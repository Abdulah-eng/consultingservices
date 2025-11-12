'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import styles from './FloatingBookingButton.module.css'

export default function FloatingBookingButton() {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setIsExpanded(false)
    router.push('/contact#booking')
    // Scroll to booking section after navigation
    setTimeout(() => {
      const element = document.getElementById('booking')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  return (
    <div className={styles.floatingButtonContainer}>
      <button
        className={styles.floatingButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-label="Réserver un rendez-vous"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className={styles.buttonText}>Réserver</span>
      </button>
      
      {isExpanded && (
        <div className={styles.expandedContent}>
          <div className={styles.expandedHeader}>
            <h3>Prendre rendez-vous</h3>
            <button 
              className={styles.closeButton}
              onClick={() => setIsExpanded(false)}
              aria-label="Fermer"
            >
              ×
            </button>
          </div>
          <p className={styles.expandedDescription}>
            Réservez un créneau de 30 minutes pour obtenir des conseils sur un problème spécifique.
          </p>
          <button 
            className={styles.bookButton}
            onClick={handleClick}
          >
            Réserver maintenant
          </button>
        </div>
      )}
    </div>
  )
}

