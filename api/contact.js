import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({
      success: false,
      message: 'Method not allowed',
    });
  }

  try {
    const { name, email, phone, service, message } = request.body ?? {};

    if (!name || !email || !message) {
      return response.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return response.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeService = escapeHtml(service || 'Not specified');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

    const { data, error } = await resend.emails.send({
      from: 'Built by Prevail <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Built by Prevail inquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Service:</strong> ${safeService}</p>

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);

      return response.status(500).json({
        success: false,
        message: 'The email could not be sent.',
      });
    }

    return response.status(200).json({
      success: true,
      message: 'Your message was sent successfully.',
      id: data?.id,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return response.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.',
    });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}