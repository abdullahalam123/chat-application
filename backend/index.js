require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get user if already exists
  // If not exists then create from scratch
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": `${process.env.PRIVATEKEY}` } }
    );
    return res.status(response.status).json(response.data);
  } catch (errors) {
    return res.status(errors.response.status).json(errors.response.data);
  }
});

app.listen(process.env.PORT || 3001);
