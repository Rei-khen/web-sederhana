const db = require("../configs/database");

//menambahkan users ke database
module.exports.insertUser = async (nama, akun, password) => {
  try {
    const result = await db.query(
      `insert into users(nama, akun, password) values(?, ?, ?)`,
      [nama, akun, password]
    );

    return result;
  } catch (err) {
    console.log("data tidak bisa dikirim");
    throw err;
  }
};

//mencari users berdasarkan email
module.exports.findeUserByAkun = async (akun) => {
  try {
    const [result] = await db.query("select * from users where akun=?", [akun]);
    return result[0];
  } catch (err) {
    console.log("gagal mencari dengan akun");
    throw err;
  }
};

//untuk menghapus user

//untuk mengupdate user
