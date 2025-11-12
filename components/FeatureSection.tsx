'use client'

import AnimateOnScroll from '@/components/AnimateOnScroll'
import styles from './FeatureSection.module.css'

interface FeatureSectionProps {
  title: string
  description: string
  visual: 'tags' | 'communication' | 'ai-email'
  reverse?: boolean
}

export default function FeatureSection({ title, description, visual, reverse = false }: FeatureSectionProps) {
  return (
    <section className={styles.featureSection}>
      <div className="container">
        <div className={`${styles.featureContent} ${reverse ? styles.reverse : ''}`}>
          <AnimateOnScroll animation={reverse ? 'fadeInRight' : 'fadeInLeft'} className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
          </AnimateOnScroll>

          <AnimateOnScroll animation={reverse ? 'fadeInLeft' : 'fadeInRight'} className={styles.visualContent}>
            {visual === 'tags' && <TagsVisual />}
            {visual === 'communication' && <CommunicationVisual />}
            {visual === 'ai-email' && <AIEmailVisual />}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}

function TagsVisual() {
  return (
    <div className={styles.tagsCard}>
      <div className={styles.smartlistHeader}>
        <h3 className={styles.smartlistTitle}>Liste intelligente VIP</h3>
        <div className={styles.profilePics}>
          <div className={styles.profilePic}></div>
          <div className={styles.profilePic}></div>
        </div>
      </div>
      
      <div className={styles.criteria}>
        <div className={styles.criterion}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>A réservé : Plus de 20 séances</span>
        </div>
        <div className={styles.criterion}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Activité : Pilates</span>
        </div>
      </div>

      <div className={styles.connector}></div>

      <div className={styles.results}>
        <div className={styles.tagBox}>
          <h4 className={styles.tagTitle}>Tag VIP</h4>
          <div className={styles.profilePics}>
            <div className={styles.profilePic}></div>
            <div className={styles.profilePic}></div>
          </div>
        </div>
        <div className={styles.notificationsBox}>
          <h4 className={styles.notificationsTitle}>Notifications automatiques</h4>
          <div className={styles.notificationOptions}>
            <div className={styles.notificationOption}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Emails</span>
            </div>
            <div className={styles.notificationOption}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>SMS</span>
            </div>
            <div className={styles.notificationOption}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <span>Notifications Push</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CommunicationVisual() {
  return (
    <div className={styles.communicationCard}>
      <div className={styles.communicationImage}>
        <div className={styles.personPlaceholder}></div>
        <div className={styles.notificationBubble} style={{ top: '20%', left: '10%' }}>
          <div className={styles.bubbleHeader}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Email</span>
          </div>
          <div className={styles.bubbleContent}>
            <p>Vous nous manquez !</p>
            <span>À: Esther Dupont</span>
          </div>
        </div>
        <div className={styles.notificationBubble} style={{ top: '50%', left: '15%' }}>
          <div className={styles.bubbleHeader}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>SMS</span>
          </div>
          <div className={styles.bubbleContent}>
            <p>Bienvenue au studio !</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AIEmailVisual() {
  return (
    <div className={styles.emailBuilderCard}>
      <div className={styles.emailPreview}>
        <div className={styles.emailHeader}>
          <div className={styles.logoPlaceholder}>LOGO DE VOTRE STUDIO</div>
        </div>
        <div className={styles.countdownSection}>
          <div className={styles.countdownTimer}>
            <div className={styles.timeDisplay}>
              <div>07</div>
              <div>08</div>
              <div>59</div>
            </div>
            <div className={styles.timeLabels}>
              <span>Jours</span>
              <span>Heures</span>
              <span>Minutes</span>
            </div>
            <p className={styles.countdownLabel}>Compte à rebours</p>
          </div>
          <button className={styles.buyButton}>Acheter maintenant !</button>
        </div>
        <div className={styles.emailImages}>
          <div className={styles.imagePlaceholder}></div>
          <div className={styles.imagePlaceholder}></div>
        </div>
      </div>
      <div className={styles.emailSidebar}>
        <div className={styles.sidebarSection}>
          <h4>Contenu</h4>
          <div className={styles.contentIcons}>
            <div className={styles.iconItem}>T</div>
            <div className={styles.iconItem}>📷</div>
            <div className={styles.iconItem}>🔘</div>
            <div className={styles.iconItem}>⏱</div>
          </div>
        </div>
        <div className={styles.sidebarSection}>
          <h4>Sections</h4>
        </div>
        <div className={styles.sidebarSection}>
          <h4>Structure</h4>
        </div>
        <div className={styles.sidebarSection}>
          <h4>Images</h4>
        </div>
        <div className={styles.aiSection}>
          <h4>Texte assisté</h4>
          <div className={styles.aiProgress}>
            <div className={styles.progressBar}></div>
            <span>Création en cours...</span>
          </div>
        </div>
      </div>
    </div>
  )
}

