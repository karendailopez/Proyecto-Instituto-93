<?php
header('Content-Type: application/json');

// Conexión a la base de datos
$host = "localhost"; // o tu host
$dbname = "nombre_de_tu_base_de_datos";
$username = "root";
$password = "";

try {
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Consulta para obtener los datos de table_mesas
    $stmt = $conn->prepare("SELECT * FROM table_mesas");
    $stmt->execute();

    // Fetch en formato asociativo
    $mesas = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Retornar los datos en formato JSON
    echo json_encode($mesas);

} catch (PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}
?>
