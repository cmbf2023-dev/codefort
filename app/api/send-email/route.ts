import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, companyName, phoneNumber, message } = await request.json()

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Full name, email, and message are required" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Brevo API configuration
    const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"
    const RECIPIENT_EMAIL = "codeforttech@hotmail.com"
    const SENDER_EMAIL = "codeforttech@hotmail.com"
    const SENDER_NAME = "Contact Form"
    const EMAIL_SUBJECT = "New Contact Form Submission"

    // Format email content
    const formatEmailContent = (data: {
      fullName: string
      email: string
      companyName?: string
      phoneNumber?: string
      message: string
    }) => {
      let content = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
      `

      if (data.companyName) {
        content += `<p><strong>Company:</strong> ${data.companyName}</p>`
      }

      if (data.phoneNumber && data.phoneNumber !== "+1") {
        content += `<p><strong>Phone:</strong> ${data.phoneNumber}</p>`
      }

      content += `
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
      `

      return content
    }

    // Email data for Brevo
    const emailData = {
      sender: {
        name: SENDER_NAME,
        email: SENDER_EMAIL,
      },
      to: [
        {
          email: RECIPIENT_EMAIL,
          name: "Website Owner",
        },
      ],
      subject: EMAIL_SUBJECT,
      htmlContent: formatEmailContent({ fullName, email, companyName, phoneNumber, message }),
      textContent: `New contact form submission from ${fullName} (${email}).
        ${companyName ? `Company: ${companyName}` : ""}
        ${phoneNumber && phoneNumber !== "+1" ? `Phone: ${phoneNumber}` : ""}

        Message: ${message}

        Submitted on: ${new Date().toLocaleString()}`,
      replyTo: {
        email: email,
        name: fullName,
      },
      headers: {
        "X-Mailer": "Website Contact Form",
      },
    }

    const response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": process.env.NEXT_BREVO_API || "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.status}`)
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email send error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

export async function OPTIONS() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 })
}
