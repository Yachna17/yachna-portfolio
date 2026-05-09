const { Resend } = require("resend");
const Message = require("../models/Message");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.send = async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Contact form received:", { name, email, message });

  try {
    await Message.create({ name, email, message });
    console.log("Message saved to DB");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "yachnarupwal@gmail.com",
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    console.log("Email sent successfully");
    res
      .status(201)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
