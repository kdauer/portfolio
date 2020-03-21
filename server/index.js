require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

const port = 9090;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log("listening on port 9000");
});

app.get("/", (req, res) => {
  res.send("this is the mail api");
});

app.post("/api/v1", (req, res) => {
  var data = req.body;

  var smtpTransport = nodemailer.createTransport({
    service: process.env.SERVICE,
    port: process.env.MAILPORT,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  });

  var mailOptions = {
    from: data.email,
    to: process.env.EMAIL,
    subject: `<p>${data.subject}</p>`,
    html: `<p>${data.name}</p>
          <p>${data.email}</p>
          <p>${data.message}</p>`
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send("success");
    }
    smtpTransport.close();
  });
});
