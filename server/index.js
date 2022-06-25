//Dependencies:
//yarn add express cors twilio

const express = require("express");
const cors = require("cors");
const twilio = require("twilio");

//twilio requirements -- Texting API
const accountSid = "AC47687eb6dc8593fad130419366a30d71";
const authToken = "85e2b061d80f6d6c6d9f2752ed4bb77c";
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server
app.get("/", (req, res) => {
  res.send("Welcome to the Express Server");
});

//Twilio
app.get("/send-text", (req, res) => {
  //Welcome Message
  res.send("Hello to the Twilio Server");

  //_GET Variables
  const { recipient, textmessage } = req.query;

  //Send Text
  client.messages
    .create({
      body: textmessage,
      to: recipient, // Text this number
      from: "+13392186211", // From a valid Twilio number
    })
    .then((message) => console.log(message.body));
});

app.listen(4000, () => console.log("Running on Port 4000"));
