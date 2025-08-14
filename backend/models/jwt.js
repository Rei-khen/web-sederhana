// const dbQuery = require("./dbQuery");
const jwt = require("jsonwebtoken");

// const tes = async () => {
//   try {
//     const result = await dbQuery.findeUserByAkun("kairi@gmail.com");
//     return result;
//   } catch (err) {
//     console.log("tidak bisa mengambil data dari kairi", err);
//   }
// };

// tes()
//   .then((resulut) => {
//     console.log(resulut);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const payload = {
  id: 123,
  nama: "aidil",
  usia: 20,
};

const secret = "ini adalah pesan rahasia";

//buat token
const token = jwt.sign(payload, secret, { expiresIn: "2d" });
console.log(token);

//simpan token
const savedToken = token;

//verifikasi
try {
  const decoded = jwt.verify(savedToken, secret);
  console.log("token valid:", decoded);
} catch (err) {
  console.log("token tidak valid", err.message);
}
