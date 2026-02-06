
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>', // Update this if user has a verified domain
            to: ['arunrawatarena@gmail.com'], // Sending to the portfolio owner
            reply_to: email, // Reply to the person who filled the form
            subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
            html: `
        <div>
          <h1>New Message from ${name}</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
        });

        return res.status(200).json({ success: true, data });
    } catch (error) {
        console.error('Resend Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
