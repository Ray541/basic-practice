import express from "express";
import cors from "cors";
import pkg from "body-parser";
import Twilio from "twilio";

const { urlencoded, json } = pkg;
const app = express();
const port = 3001;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

const accountSid = "ACc0b4f1a4be85de803245e327bdc85ece";
const authToken = "4e2a19ac27504b95357509cef87d936a";
const twilioClient = Twilio(accountSid, authToken);

app.post("/send-whatsapp", (req, res) => {
  const data = req.body;
  const message = `
    Name: ${data.name}
    Phone: ${data.phone}
    Email: ${data.email}
    State: ${data.state}
    City: ${data.city}
    Address: ${data.address}
  `;

  twilioClient.messages
    .create({
      from: "whatsapp:+14155238886", // Twilio Sandbox What's App number
      to: "whatsapp:+918080492106", // The recipient's WhatsApp number
      body: `${message}`,
    })
    .then(() => {
      res.status(200).json({ success: true });
      console.log(res.json());
    })
    .done();
    // .catch((error) => {
    //   console.error(error);
    //   res.status(500).json({ success: false, error: error.message });
    // });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
