'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-name">
          Name *
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-email">
          Email *
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-phone">
          Phone Number *
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-message">
          Message *
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
        />
      </div>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          There was an error sending your message. Please try again.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

