import * as nodemailer from 'nodemailer'

interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions): Promise<void> {
  // Validate environment variables
  const smtpHost = process.env.SMTP_HOST
  const smtpPort = parseInt(process.env.SMTP_PORT || '587')
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_PASSWORD
  const fromEmail = process.env.FROM_EMAIL || smtpUser
  const fromName = process.env.FROM_NAME || 'Consulting Website'

  if (!smtpHost || !smtpUser || !smtpPassword) {
    throw new Error('Missing SMTP configuration. Please check your environment variables.')
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465, false for other ports
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })

  // Verify connection configuration
  try {
    await transporter.verify()
  } catch (error) {
    console.error('SMTP connection failed:', error)
    throw new Error('Failed to connect to email server')
  }

  // Send email
  const mailOptions = {
    from: `"${fromName}" <${fromEmail}>`,
    to,
    subject,
    html,
    text: text || '', // Provide empty text fallback if not provided
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Failed to send email')
  }
}

export async function sendContactNotification({
  name,
  email,
  phone,
  message,
  adminEmail,
}: {
  name: string
  email: string
  phone: string
  message: string
  adminEmail: string
}): Promise<void> {
  const subject = `Nouveau message de contact - ${name}`
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nouveau message de contact</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #495057; }
        .field-value { background-color: #f8f9fa; padding: 10px; border-radius: 3px; margin-top: 5px; }
        .message-content { white-space: pre-wrap; background-color: #f8f9fa; padding: 15px; border-radius: 3px; border-left: 4px solid #007bff; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Nouveau message de contact</h2>
          <p>Vous avez reçu un nouveau message via le formulaire de contact de votre site web.</p>
        </div>

        <div class="content">
          <div class="field">
            <div class="field-label">Nom :</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">Email :</div>
            <div class="field-value"><a href="mailto:${email}">${email}</a></div>
          </div>

          <div class="field">
            <div class="field-label">Téléphone :</div>
            <div class="field-value">${phone}</div>
          </div>

          <div class="field">
            <div class="field-label">Message :</div>
            <div class="message-content">${message}</div>
          </div>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 14px; color: #6c757d;">
          <p><strong>Conseil :</strong> Vous pouvez répondre directement à ce message en cliquant sur "Répondre" dans votre client email.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
Nouveau message de contact

Nom: ${name}
Email: ${email}
Téléphone: ${phone}

Message:
${message}

---
Vous pouvez répondre directement à ce message.
  `

  await sendEmail({
    to: adminEmail,
    subject,
    html,
    text,
  })
}

export async function sendBookingNotification({
  date,
  time,
  name,
  email,
  phone,
  problem,
  adminEmail,
}: {
  date: string
  time: string
  name: string
  email: string
  phone: string
  problem: string
  adminEmail: string
}): Promise<void> {
  const subject = `Nouvelle réservation de consultation - ${name}`
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nouvelle réservation de consultation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .content { background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #495057; }
        .field-value { background-color: #f8f9fa; padding: 10px; border-radius: 3px; margin-top: 5px; }
        .message-content { white-space: pre-wrap; background-color: #f8f9fa; padding: 15px; border-radius: 3px; border-left: 4px solid #28a745; }
        .date-time { background-color: #e9ecef; padding: 15px; border-radius: 5px; margin-bottom: 20px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Nouvelle réservation de consultation</h2>
          <p>Une nouvelle consultation a été réservée via votre site web.</p>
        </div>

        <div class="date-time">
          <h3>📅 Détails du rendez-vous</h3>
          <p><strong>Date :</strong> ${date}</p>
          <p><strong>Heure :</strong> ${time}</p>
        </div>

        <div class="content">
          <div class="field">
            <div class="field-label">Nom :</div>
            <div class="field-value">${name}</div>
          </div>

          <div class="field">
            <div class="field-label">Email :</div>
            <div class="field-value"><a href="mailto:${email}">${email}</a></div>
          </div>

          <div class="field">
            <div class="field-label">Téléphone :</div>
            <div class="field-value">${phone}</div>
          </div>

          <div class="field">
            <div class="field-label">Problème / Question :</div>
            <div class="message-content">${problem}</div>
          </div>
        </div>

        <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 14px; color: #6c757d;">
          <p><strong>Action requise :</strong> Veuillez contacter le client pour confirmer le rendez-vous.</p>
          <p><strong>Conseil :</strong> Vous pouvez répondre directement à ce message en cliquant sur "Répondre" dans votre client email.</p>
        </div>
      </div>
    </body>
    </html>
  `

  const text = `
Nouvelle réservation de consultation

Détails du rendez-vous:
Date: ${date}
Heure: ${time}

Nom: ${name}
Email: ${email}
Téléphone: ${phone}

Problème / Question:
${problem}

---
Veuillez contacter le client pour confirmer le rendez-vous.
Vous pouvez répondre directement à ce message.
  `

  await sendEmail({
    to: adminEmail,
    subject,
    html,
    text,
  })
}