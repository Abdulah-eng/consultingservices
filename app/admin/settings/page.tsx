'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import styles from './page.module.css'

export default function AdminSettings() {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/admin/login')
    } else {
      setUser(session.user)
    }
  }

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    // Validation
    if (!currentPassword || !newPassword || !confirmPassword) {
      setError('All fields are required')
      setLoading(false)
      return
    }

    if (newPassword.length < 6) {
      setError('New password must be at least 6 characters long')
      setLoading(false)
      return
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match')
      setLoading(false)
      return
    }

    if (currentPassword === newPassword) {
      setError('New password must be different from current password')
      setLoading(false)
      return
    }

    try {
      // First, verify the current password by attempting to sign in
      const { data: { user: currentUser } } = await supabase.auth.getUser()
      
      if (!currentUser || !currentUser.email) {
        setError('Unable to verify user. Please log out and log back in.')
        setLoading(false)
        return
      }

      // Update the password
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword
      })

      if (updateError) {
        setError(updateError.message || 'Failed to update password')
        setLoading(false)
        return
      }

      setSuccess('Password updated successfully!')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  return (
    <div className={styles.settings}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerLeft}>
            <Link href="/admin/dashboard" className={styles.backLink}>
              ← Back to Dashboard
            </Link>
            <h1 className={styles.title}>Settings</h1>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Logout
          </button>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Change Password</h2>
            <p className={styles.sectionDescription}>
              Update your admin account password. Make sure to use a strong password.
            </p>

            <form onSubmit={handlePasswordChange} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="currentPassword" className={styles.label}>
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className={styles.input}
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  placeholder="Enter your current password"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="newPassword" className={styles.label}>
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className={styles.input}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  placeholder="Enter your new password (min. 6 characters)"
                  minLength={6}
                />
                <small className={styles.helpText}>
                  Password must be at least 6 characters long
                </small>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  placeholder="Confirm your new password"
                  minLength={6}
                />
              </div>

              {error && <div className={styles.errorMessage}>{error}</div>}
              {success && <div className={styles.successMessage}>{success}</div>}

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? 'Updating Password...' : 'Update Password'}
              </button>
            </form>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Account Information</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Email:</span>
                <span className={styles.infoValue}>{user?.email || 'Loading...'}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>User ID:</span>
                <span className={styles.infoValue}>{user?.id || 'Loading...'}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Last Updated:</span>
                <span className={styles.infoValue}>
                  {user?.updated_at 
                    ? new Date(user.updated_at).toLocaleString()
                    : 'N/A'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

