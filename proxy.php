<?php
$apiKey = "2f519e1e6570421caa819e2f4371793d"; 
$query = "plant care";


$apiUrl = "https://newsapi.org/v2/everything?q=" . urlencode($query) . "&language=" . $language . "&apiKey=" . $apiKey;

// Gunakan cURL untuk mengambil data dari API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $apiUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'PlantKu/1.0'); // Tambahkan User-Agent

$response = curl_exec($ch);

// Cek jika terjadi error saat mengambil data
if (curl_errno($ch)) {
    echo 'Curl error: ' . curl_error($ch);
}
curl_close($ch);

// Set header untuk mengirimkan data JSON
header('Content-Type: application/json');
echo $response;
?>
