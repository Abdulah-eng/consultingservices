'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 8C18 8 20 10 20 12C20 14 18 16 16 16C14 16 12 14 12 12C12 10 14 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M24 20C26 20 28 22 28 24C28 26 26 28 24 28C22 28 20 26 20 24C20 22 22 20 24 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 20C10 20 12 22 12 24C12 26 10 28 8 28C6 28 4 26 4 24C4 22 6 20 8 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span>SOCIALFORMA</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={pathname === '/' ? styles.active : ''}>
            Accueil
          </Link>
          <Link href="/about" className={pathname === '/about' ? styles.active : ''}>
            Qui sommes-nous ?
          </Link>
          <Link href="/services" className={pathname === '/services' ? styles.active : ''}>
            Nos services
          </Link>
          <Link href="/contact" className={`${styles.contactBtn} ${pathname === '/contact' ? styles.active : ''}`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

