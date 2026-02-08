const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Route to handle form submissions
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "idris6921@gmail.com",     // your Gmail address
    pass: "alip qhvi lmpn udkk"         // Gmail App Password (not your normal password)
  }
});



    await transporter.sendMail({
      from: email,
      to: "idris6921@gmail.com",         // your receiving email
      subject: `PORTFOLIO MESSAGE`,
      text: `Client's name: ${name}\nClient's mail: ${email}\n${message}`
    });

    res.status(200).send("Message sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending message.");
  }
});

// Start the server
app.listen(5000, () => console.log("Server running on port 5000"));
