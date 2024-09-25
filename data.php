<?php
// Konfigurasi database
$servername = "localhost";
$username = "u453136110_plantku";
$password = "Q6**D#qs";
$dbname = "u453136110_plantku";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Menyimpan data ke dalam tabel messages
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $medsos = $_POST['medsos'];
    $pesan = $_POST['pesan'];

    $sql = "INSERT INTO messages (nama, email, phone, medsos, pesan)
            VALUES ('$nama', '$email', '$phone', '$medsos', '$pesan')";

    if ($conn->query($sql) === TRUE) {
        // Redirect ke halaman kontak dengan pesan sukses
        header("Location: contact.html?success=1");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
