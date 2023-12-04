import express from "express";
import cors from "cors";
import pkg from "body-parser";
import twilio from "twilio";

const { urlencoded, json } = pkg;
const app = express();
const port = 3001;

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());

const accountSid = "ACc0b4f1a4be85de803245e327bdc85ece";
const authToken = "ad996c731c3c8dbb07dad49f635f5a7f";
const twilioClient = twilio(accountSid, authToken);

app.post("/send-whatsapp", (req, res) => {
  const message = `Hey There!!!`;

  twilioClient.messages
    .create({
      from: "whatsapp:+12406522145", // Twilio WhatsApp number
      to: `whatsapp:+917887572701`, // The recipient's WhatsApp number
      body: message,
    })
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, error: error.message });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});