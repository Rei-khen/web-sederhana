const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
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

//login
router.post("/login", async (req, res) => {
  const { akun, password } = req.body;

  try {
    const user = await dbQuery.findeUserByAkun(akun);

    if (!user || user.password !== password) {
      res.status(400).json({
        message: "sandi salah atau user tidak ada",
      });
    }

    //buat jwt token
    const token = jwt.sign(
      {
        id: user.id,
        nama: user.nama,
        akun: user.akun,
      },
      "ini rahasia",
      { expiresIn: "2d" }
    );

    res.status(200).json({
      message: "login berhasil",
      token,
      user: {
        id: user.id,
        nama: user.nama,
        akun: user.akun,
      },
    });
  } catch (err) {
    res.status(400).json({
      message: "gagal untuk login",
      error: err,
    });
  }
});

module.exports = router;
