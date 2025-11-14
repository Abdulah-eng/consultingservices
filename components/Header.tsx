'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Header.module.css'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <Image src="/images/logo.png" alt="Logo SocialForma" fill sizes="80px" priority />
          </span>
          <span className={styles.logoText}>SocialForma</span>
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
            Contactez-nous
          </Link>
        </nav>
      </div>
    </header>
  )
}

