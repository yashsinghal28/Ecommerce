const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {

  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_SERVICE || !process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
    throw new Error("Missing email credentials. Please check your environment variables.");
  }

  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
