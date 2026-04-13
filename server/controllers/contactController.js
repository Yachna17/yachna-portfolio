const nodemailer = require("nodemailer");
const Message = require("../models/Message");

exports.send = async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form received:", { name, email, message });

  try {
    await Message.create({ name, email, message });
    console.log("Message saved to DB");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name} — yachna.cv`,
      html: `
        <h3>New contact form submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email sent successfully");
    res
      .status(201)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
