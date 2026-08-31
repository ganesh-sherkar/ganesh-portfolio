import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

// Helper to escape HTML characters and prevent HTML injection in email bodies
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const {
      name,
      firstName,
      lastName,
      email,
      phone,
      service,
      message,
    } = body || {};

    // Combine or resolve visitor name
    const fullName =
      (name && String(name).trim()) ||
      `${firstName || ""} ${lastName || ""}`.trim();

    const trimmedEmail = email ? String(email).trim() : "";
    const trimmedPhone = phone ? String(phone).trim() : "";
    const trimmedService = service ? String(service).trim() : "Not specified";
    const trimmedMessage = message ? String(message).trim() : "";

    // Server-side validation
    if (!fullName || fullName.length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!trimmedPhone) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      return NextResponse.json(
        { success: false, error: "Phone number must be between 10 and 15 digits." },
        { status: 400 }
      );
    }

    if (!trimmedMessage || trimmedMessage.length < 3) {
      return NextResponse.json(
        { success: false, error: "Please enter a message (at least 3 characters)." },
        { status: 400 }
      );
    }

    // Clean and normalize environment variables (remove spaces and wrapping quotes)
    const rawUser = process.env.EMAIL_USER || "";
    const rawPass = process.env.EMAIL_PASS || "";
    const rawTo = process.env.EMAIL_TO || "ganeshdex9356@gmail.com";

    const emailUser = rawUser.trim().replace(/^["']|["']$/g, "");
    const emailPass = rawPass.replace(/\s+/g, "").replace(/^["']|["']$/g, "");
    const emailTo = rawTo.trim().replace(/^["']|["']$/g, "");

    // Verify SMTP credentials exist
    if (!emailUser || !emailPass || emailPass === "your_gmail_app_password_here") {
      console.error(
        "[Contact API] EMAIL_USER or EMAIL_PASS environment variables are not properly configured on server."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Server Email Configuration Missing: EMAIL_USER or EMAIL_PASS is not set in environment variables.",
        },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter with Gmail SMTP using Port 465 (SSL)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
    });

    // Sanitize user inputs for HTML rendering
    const safeName = escapeHtml(fullName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safePhone = escapeHtml(trimmedPhone);
    const safeService = escapeHtml(trimmedService);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br />");
    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Plain text content fallback
    const textContent = `
New Contact Message Received

From: ${fullName}
Email: ${trimmedEmail}
Phone: ${trimmedPhone}
Service: ${trimmedService}
Submitted At: ${submittedAt}

Message:
${trimmedMessage}
    `.trim();

    // Responsive HTML email template
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; color: #1f2937;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f3f4f6; padding: 30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); border: 1px solid #e5e7eb;">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); padding: 28px 24px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">New Contact Form Message</h1>
              <p style="color: #e9d5ff; margin: 6px 0 0 0; font-size: 13px;">Received from your Portfolio Website</p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 24px 24px 16px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3px;">Sender Name</strong>
                    <span style="color: #111827; font-size: 15px; font-weight: 600;">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3px;">Email Address</strong>
                    <a href="mailto:${safeEmail}" style="color: #7c3aed; font-size: 15px; text-decoration: none; font-weight: 500;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3px;">Phone Number</strong>
                    <a href="tel:${safePhone}" style="color: #111827; font-size: 15px; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3px;">Service Requested</strong>
                    <span style="color: #111827; font-size: 15px;">${safeService}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6;">
                    <strong style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 3px;">Submitted Time</strong>
                    <span style="color: #4b5563; font-size: 13px;">${submittedAt}</span>
                  </td>
                </tr>
              </table>

              <!-- Message Box -->
              <div style="margin-top: 20px; background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
                <strong style="color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 8px;">Message:</strong>
                <p style="margin: 0; color: #1f2937; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
              </div>

              <!-- Quick Action Button -->
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${safeEmail}?subject=Re:%20Regarding%20your%20message%20to%20Ganesh%20Sherkar" style="display: inline-block; background-color: #7c3aed; color: #ffffff; text-decoration: none; padding: 12px 24px; font-size: 14px; font-weight: 600; border-radius: 8px; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);">Reply to ${safeName}</a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 16px 24px; background-color: #f9fafb; border-top: 1px solid #f3f4f6; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #9ca3af;">This email was sent automatically from your portfolio contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const mailOptions = {
      from: `"${fullName}" <${emailUser}>`,
      to: emailTo,
      replyTo: trimmedEmail,
      subject: `New Contact Form Message - ${fullName}`,
      text: textContent,
      html: htmlContent,
    };

    // Send the email via SMTP
    const info = await transporter.sendMail(mailOptions);

    console.log("[Contact API] Email sent successfully. Message ID:", info.messageId);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("[Contact API] Error sending email:", error);
    let errorMessage = error?.message || "Failed to send email message.";

    if (error?.code === "EAUTH" || error?.responseCode === 535) {
      errorMessage =
        "Gmail Authentication Failed: Please verify your 16-character Gmail App Password (EMAIL_PASS) in Vercel/Environment settings.";
    } else if (error?.code === "ESOCKET" || error?.code === "ETIMEDOUT") {
      errorMessage =
        "Connection timed out while connecting to Gmail SMTP server. Please try again.";
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
