const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static("public"));

// Parse JSON request body
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "taylorcoreyc@gmail.com", // replace with your email
    pass: "wwqa dhdj wowv opfr", // replace with your email password or generate an app password
  },
});

// Endpoint to handle form submissions
app.post("/submit-form", (req, res) => {
  const { email, message } = req.body;

  // Example: Log the form data to the console
  console.log("Received form data:", { email, message });

  // Send email
  const mailOptions = {
    from: "taylorcoreyc@gmail.com",
    to: email,
    subject: "Form Submission",
    text: `Thank you for submitting the form. Your message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.send("Form submitted successfully");
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
