import { createTransport } from "nodemailer";

// Create a transporter using SMTP
const transporter = createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({to, subject, body}) => {
    try {
        if (!process.env.SMTP_USER || !process.env.SMTP_PASS || !process.env.SENDER_EMAIL || process.env.SMTP_PASS.includes("YOUR_")) {
            console.warn(`[Email Service] Skipped email to ${to} (${subject}) - SMTP not configured.`);
            return { messageId: "skipped-no-smtp-credentials" };
        }
        const response = await transporter.sendMail({
            from: process.env.SENDER_EMAIL,
            to,
            subject,
            html: body
        });
        return response;
    } catch (error) {
        console.error(`[Email Service] Failed to send email to ${to}:`, error.message);
        throw error;
    }
}

export default sendEmail