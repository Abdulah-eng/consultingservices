'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    company: '',
    phone: '',
    email: '',
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
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone.trim() || 'Non renseigné',
        message: formData.company.trim()
          ? `${formData.message}\n\nEntreprise : ${formData.company.trim()}`
          : formData.message,
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          lastName: '',
          firstName: '',
          company: '',
          phone: '',
          email: '',
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
          Nom *
        </label>
        <input
          type="text"
          id="contact-name"
          name="lastName"
          className={styles.input}
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-firstname">
          Prénom *
        </label>
        <input
          type="text"
          id="contact-firstname"
          name="firstName"
          className={styles.input}
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-company">
          Entreprise (facultatif)
        </label>
        <input
          type="text"
          id="contact-company"
          name="company"
          className={styles.input}
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-phone">
          Téléphone (facultatif)
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          className={styles.input}
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="contact-email">
          E‑mail *
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
          Merci pour votre message ! Nous vous répondrons rapidement.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Une erreur est survenue lors de l’envoi de votre message. Veuillez réessayer.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi…' : 'Envoyer le message'}
      </button>
    </form>
  )
}

