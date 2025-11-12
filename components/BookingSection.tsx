'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { format } from 'date-fns'
import styles from './BookingSection.module.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [problem, setProblem] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Génère des créneaux de 30 minutes de 9h à 17h
  const generateTimeSlots = () => {
    const slots = []
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        slots.push(time)
      }
    }
    return slots
  }

  const timeSlots = generateTimeSlots()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime || !name || !email || !phone || !problem) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const dateStr = selectedDate instanceof Date 
        ? format(selectedDate, 'yyyy-MM-dd')
        : format((selectedDate as Date[])[0], 'yyyy-MM-dd')

      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: dateStr,
          time: selectedTime,
          name,
          email,
          phone,
          problem,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setSelectedDate(new Date())
        setSelectedTime('')
        setName('')
        setEmail('')
        setPhone('')
        setProblem('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.bookingForm}>
      <div className={styles.calendarWrapper}>
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          minDate={new Date()}
          className={styles.calendar}
        />
      </div>

      {selectedDate && (
        <div className={styles.timeSelection}>
          <label className={styles.label}>Sélectionnez l’horaire (créneau de 30 minutes)</label>
          <div className={styles.timeSlots}>
            {timeSlots.map((time) => (
              <button
                key={time}
                type="button"
                className={`${styles.timeSlot} ${selectedTime === time ? styles.active : ''}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="booking-name">
          Nom *
        </label>
        <input
          type="text"
          id="booking-name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="booking-email">
          E‑mail *
        </label>
        <input
          type="email"
          id="booking-email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="booking-phone">
          Numéro de téléphone *
        </label>
        <input
          type="tel"
          id="booking-phone"
          className={styles.input}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="booking-problem">
          Problème / Question *
        </label>
        <textarea
          id="booking-problem"
          className={styles.textarea}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={4}
          required
        />
      </div>

      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Réservation envoyée avec succès ! Nous confirmerons votre rendez‑vous prochainement.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Une erreur est survenue lors de l’envoi de votre réservation. Veuillez réessayer.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi…' : 'Réserver un rendez‑vous'}
      </button>
    </form>
  )
}

