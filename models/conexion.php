<?php
class Conexion
{
    public static function conectar()
    {
        try {
            $conn = "mysql:host=localhost;dbname=asopagua_db;charset=utf8mb4";
            $options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_EMULATE_PREPARES => false];
            $pdo = new PDO($conn, "root", "1234567", $options);
            error_log("PDO::connect => Base de datos conectada");
            return $pdo;
        } catch (PDOException $e) {
            error_log("PDO::connect=> La conexion ha fallado => " . $e->getMessage());
        }
    }
}
