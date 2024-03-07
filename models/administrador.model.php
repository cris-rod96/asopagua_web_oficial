<?php
require 'conexion.php';
date_default_timezone_set("America/Guayaquil");
class ModelAdministrador
{
    public static function mdlValidarAdministrador($username, $password)
    {
        try {
            if ($username != null && $password != null) {
                $query = Conexion::conectar()->prepare("SELECT * FROM usuarios WHERE username=:username AND password=:password");
                $query->execute(["username" => $username, "password" => $password]);
                if ($query->rowCount() > 0) {
                    $res = $query->fetch(PDO::FETCH_ASSOC);
                } else {
                    $res = false;
                }
            } else {
                $res = false;
            }
        } catch (PDOException $e) {
            error_log("ERRORPDO:: => Hubo un error en la conexixon: " . $e->getMessage());
        }
        return $res;
    }
    public static function mdlGetUsers()
    {
        try {
            $query = Conexion::conectar()->prepare("SELECT * FROM usuarios");
            $query->execute();
            return $query->fetchAll();
        } catch (PDOException $e) {
        }
    }
    public static function mdlGetClientes()
    {
        try {
            $query = Conexion::conectar()->prepare("SELECT * FROM clientes");
            $query->execute();
            return $query->fetchAll();
        } catch (PDOException $e) {
        }
    }
    public static function mdlVerificarDni($dni){
        $stmt = Conexion::conectar()->prepare(("SELECT * FROM usuarios WHERE dni=:dni"));
        $stmt->execute(["dni" => $dni]);
        $dniExists = $stmt->rowCount();
        if($dniExists >  0){
           return true;
        }else{
           return false;
        }
     }
    public static function mdlVerificarEmail($email){
        $stmt = Conexion::conectar()->prepare(("SELECT * FROM usuarios WHERE email=:email"));
        $stmt->execute(["email" => $email]);
        $emailExists = $stmt->rowCount();
        if($emailExists >  0){
           return true;
        }else{
           return false;
        }
     }
     public static function mdlGetDataAdmin($id){
        $stmt = Conexion::conectar()->query("SELECT * FROM usuarios WHERE id=$id");
        return $stmt->fetch(PDO::FETCH_ASSOC);
     }
     public static function mdlAddNewUser($datos){
        $stmt = Conexion::conectar()->prepare("INSERT INTO usuarios VALUES(0,:dni,:nombre,:apellido,:telefono,:celular,:email,:username,:password,:rol,:fecha_creacion)");
        $stmt->execute([
           "dni" => $datos["dni"],
           "nombre" => $datos["nombre"],
           "apellido" => $datos["apellido"],
           "telefono" => $datos["telefono"],
           "celular" => $datos["celular"],
           "email" => $datos["email"],
           "username" => $datos["username"],
           "password" => $datos["password"],
           "rol" => $datos["rol"],
           "fecha_creacion" => date("Y-m-d H:i:s")
        ]);
        if($stmt->rowCount() > 0){
           return true;
        }else{
           return false;
        }
     }
     public static function mdlEditUser($datos){
       $stmt = Conexion::conectar()->prepare("UPDATE usuarios set email=:email, celular = :celular, telefono = :telefono WHERE id=:id");
       $stmt->execute([
         "telefono" => $datos["telefono"],
         "celular" => $datos["celular"],
         "email" => $datos["email"],
         "id" => $datos["id"]
       ]);
       if($stmt->rowCount() > 0){
          return true;
       }else{
          return false;
       }
     }
     public static function mdlDeleteAdmin($id){
        $stmt = Conexion::conectar()->prepare(("DELETE FROM usuarios WHERE id=:id"));
        $stmt->execute(['id' => $id]);
        $userDelete = $stmt->rowCount();
        if($userDelete > 0){
           return "OK";
        }
     }
}
