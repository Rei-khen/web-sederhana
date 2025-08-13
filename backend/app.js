const express = require("express");
const app = express();
const db = require("./configs/database");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  try {
    const [data] = await db.query("select * from users");
    res.send(data);
  } catch (err) {
    res.status(400).send("error bro", err);
  }
});

app.use("/auth", authRoutes);

app.listen(3000);
