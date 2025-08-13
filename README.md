cd ke backend kemudian jalankan peritah "npm install"

kemudian buat database dengan konfigurasi seperti ini

create database <nama bebas>
use <nama database yang sudah dibuat>
create table users(
id int primary key auto_increment,
nama varchar(255)
akun varchar(255)
password varchar(255));

setelah itu buat file dengan nama .env di backend dan masukkan konfigurasi ini

#database cofiguration
DB_HOST=<host dari datase kamu, kalau di local biasanya localhost>
DB_USER=<user kamu, biasanya root>
DB_PASSWORD=<password database>
DB_NAME=<nama database yang tadi dibuat>
DB_PORT=<port defaultnya 3306>

