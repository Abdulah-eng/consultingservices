import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.links}>
          <a href="#mentions-legales">Mentions légales</a>
          <span aria-hidden="true">|</span>
          <a href="#politique-confidentialite">Politique de confidentialité</a>
          <span aria-hidden="true">|</span>
          <span>© 2025 SocialForma</span>
        </nav>
      </div>
    </footer>
  )
}

