const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ritankemdaniel@gmail.com", // Replace with your email
    pass: "Mgbolu123", // Replace with your password
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = firstName + " " + lastName;

  const mail = {
    from: name,
    to: "ritankemdaniel@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server Running");
});
