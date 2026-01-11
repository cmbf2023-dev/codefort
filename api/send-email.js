export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { fullName, email, companyName, phoneNumber, message } = req.body;

  // Basic validation
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "Full name, email, and message are required" })
  }

  // Email validation
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address" })
  }

  // Brevo API configuration
  const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';
  const RECIPIENT_EMAIL = 'lizzy1230@gmail.com';
  const SENDER_EMAIL = 'seanpacey493@gmail.com';
  const SENDER_NAME = 'Contact Form';
  const EMAIL_SUBJECT = 'New Contact Form Submission';

  // Format email content
  const formatEmailContent = (data) => {
    let content = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.fullName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
    `;

    if (data.companyName) {
      content += `<p><strong>Company:</strong> ${data.companyName}</p>`;
    }

    if (data.phoneNumber && data.phoneNumber !== '+1') {
      content += `<p><strong>Phone:</strong> ${data.phoneNumber}</p>`;
    }

    content += `
      <h3>Message:</h3>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
    `;

    return content;
  };

  // Email data for Brevo
  const emailData = {
    sender: {
      name: SENDER_NAME,
      email: SENDER_EMAIL
    },
    to: [{
      email: RECIPIENT_EMAIL,
      name: 'Website Owner'
    }],
    subject: EMAIL_SUBJECT,
    htmlContent: formatEmailContent({ fullName, email, companyName, phoneNumber, message }),
    textContent: `New contact form submission from ${fullName} (${email}).
      ${companyName ? `Company: ${companyName}` : ''}
      ${phoneNumber && phoneNumber !== '+1' ? `Phone: ${phoneNumber}` : ''}

      Message: ${message}

      Submitted on: ${new Date().toLocaleString()}`,
    replyTo: {
      email: email,
      name: fullName
    },
    headers: {
      'X-Mailer': 'Website Contact Form'
    }
  };

  try {
    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const error = await response.text()
      throw new Error(`Brevo API error: ${response.status}`)
    }

    return res.status(200).json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Email send error:", error)
    return res.status(500).json({ error: error.message })
  }
}
