'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import styles from './page.module.css'

interface Booking {
  id: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  problem: string
  status: string
  created_at: string
}

interface ContactSubmission {
  id: string
  name: string
  email: string
  phone: string
  message: string
  status: string
  created_at: string
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'bookings' | 'contacts'>('bookings')
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchData()
  }, [])

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      router.push('/admin/login')
    }
  }

  const fetchData = async () => {
    try {
      // Fetch bookings
      const { data: bookingsData, error: bookingsError } = await supabase
        .from('bookings')
        .select('*')
        .order('date', { ascending: false })
        .order('time', { ascending: false })

      if (bookingsError) {
        console.error('Error fetching bookings:', bookingsError)
      } else {
        setBookings(bookingsData || [])
      }

      // Fetch contact submissions
      const { data: contactsData, error: contactsError } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (contactsError) {
        console.error('Error fetching contacts:', contactsError)
      } else {
        setContacts(contactsData || [])
      }
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id)

      if (error) {
        console.error('Error updating booking:', error)
        alert('Failed to update booking status')
      } else {
        fetchData()
      }
    } catch (error) {
      console.error('Error updating booking:', error)
      alert('Failed to update booking status')
    }
  }

  const updateContactStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id)

      if (error) {
        console.error('Error updating contact:', error)
        alert('Failed to update contact status')
      } else {
        fetchData()
      }
    } catch (error) {
      console.error('Error updating contact:', error)
      alert('Failed to update contact status')
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatTime = (timeString: string) => {
    return timeString.substring(0, 5)
  }

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Loading dashboard...</p>
      </div>
    )
  }

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <div className={styles.headerActions}>
            <Link href="/admin/settings" className={styles.settingsBtn}>
              Settings
            </Link>
            <button onClick={handleLogout} className={styles.logoutBtn}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className={styles.container}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'bookings' ? styles.active : ''}`}
            onClick={() => setActiveTab('bookings')}
          >
            Bookings ({bookings.length})
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'contacts' ? styles.active : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            Contact Submissions ({contacts.length})
          </button>
        </div>

        {activeTab === 'bookings' && (
          <div className={styles.content}>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Problem</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.length === 0 ? (
                    <tr>
                      <td colSpan={8} className={styles.empty}>
                        No bookings found
                      </td>
                    </tr>
                  ) : (
                    bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>{formatDate(booking.date)}</td>
                        <td>{formatTime(booking.time)}</td>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.phone}</td>
                        <td className={styles.problemCell}>{booking.problem}</td>
                        <td>
                          <span className={`${styles.status} ${styles[booking.status]}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td>
                          <select
                            value={booking.status}
                            onChange={(e) => updateBookingStatus(booking.id, e.target.value)}
                            className={styles.statusSelect}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className={styles.content}>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.length === 0 ? (
                    <tr>
                      <td colSpan={7} className={styles.empty}>
                        No contact submissions found
                      </td>
                    </tr>
                  ) : (
                    contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td>{formatDate(contact.created_at)}</td>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td className={styles.messageCell}>{contact.message}</td>
                        <td>
                          <span className={`${styles.status} ${styles[contact.status]}`}>
                            {contact.status}
                          </span>
                        </td>
                        <td>
                          <select
                            value={contact.status}
                            onChange={(e) => updateContactStatus(contact.id, e.target.value)}
                            className={styles.statusSelect}
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="replied">Replied</option>
                            <option value="archived">Archived</option>
                          </select>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

