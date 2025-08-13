const express = require("express");
const router = express.Router();
const dbQuery = require("../models/dbQuery");

//register
router.post("/register", async (req, res) => {
  const { nama, akun, password } = req.body;

  try {
    const result = await dbQuery.insertUser(nama, akun, password);
    res.status(200).json({
      message: "berhasil diinput di database",
      result,
    });
  } catch (err) {
    res.status(400).json({
      message: "gagal disimpan bro",
      error: err,
    });
  }
});

router.get("/user", async (req, res) => {
  const { akun } = req.body;

  try {
    const result = await dbQuery.findeUserByAkun(akun);
    res.status(200).json({
      message: "berhasil menemukan users",
      result,
    });
  } catch (err) {
    res.status(400).json({
      message: "gagal menemukan user",
      error: err,
    });
  }
});

module.exports = router;
