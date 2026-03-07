<?php
header('Content-Type: application/json');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

$type = $_GET['type'] ?? '';

if ($type === 'player') {
    $url = 'https://cncstatsapi.azurewebsites.net/api/Player/76561198056653731?season=23&game=TD';
} elseif ($type === 'matches') {
    $url = 'https://cncstatsapi.azurewebsites.net/api/Player/76561198056653731/Matches?season=23&game=TD';
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid type']);
    exit;
}

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 15);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($response === false || $httpCode >= 400) {
    http_response_code(502);
    echo json_encode([
        'error' => 'Upstream request failed',
        'details' => $error,
        'status' => $httpCode
    ]);
    exit;
}

echo $response;