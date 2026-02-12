import nodemailer from 'nodemailer';

const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SENDER_EMAIL'];

const validateEnv = () => {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing email configuration: ${missing.join(', ')}`);
  }
};

const createTransporter = () => {
  validateEnv();
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

export const sendOtpEmail = async ({ to, otp }) => {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject: 'NYDev Admin Verification Code',
    text: `Your NYDev admin verification code is ${otp}. It expires in 10 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a;">
        <h2>Verify your NYDev Admin account</h2>
        <p>Use the verification code below to complete your signup:</p>
        <div style="font-size: 24px; font-weight: bold; letter-spacing: 4px; margin: 20px 0;">
          ${otp}
        </div>
        <p>This code expires in 10 minutes.</p>
      </div>
    `,
  });
};

export const sendResetEmail = async ({ to, token }) => {
  const transporter = createTransporter();
  await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject: 'NYDev Admin Password Reset',
    text: `Use this token to reset your password: ${token}. It expires in 30 minutes.`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #0f172a;">
        <h2>Reset your NYDev Admin password</h2>
        <p>Use the reset token below to set a new password:</p>
        <div style="font-size: 20px; font-weight: bold; letter-spacing: 2px; margin: 20px 0;">
          ${token}
        </div>
        <p>This token expires in 30 minutes.</p>
      </div>
    `,
  });
};
