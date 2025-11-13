import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingBookingButton from '@/components/FloatingBookingButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SocialForma — Conformité sociale et accompagnement URSSAF',
  description:
    "SocialForma aide les entreprises à maîtriser leurs obligations sociales et à sécuriser leurs contrôles URSSAF.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} page-bg`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingBookingButton />
      </body>
    </html>
  )
}

