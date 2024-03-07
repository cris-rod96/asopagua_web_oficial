<?php
class ControllerAdministrador{
    public function ctrAdministrador(){
        if(isset($_POST["username"]) && isset($_POST["password"])){
            $username = $_POST["username"];
            $password = $_POST["password"];
            $res = ModelAdministrador::mdlValidarAdministrador($username,$password);
            if(is_array($res)){
                $_SESSION["admin_logueado"] = "OK";
                $_SESSION["id"] = $res["id"];
                $_SESSION["username"] = $res["username"];
                $_SESSION["password"] = $res["password"];
                $_SESSION["full_name"] = $res["nombre"] . " " . $res["apellido"];
                $_SESSION["dni"] = $res["dni"];
                $_SESSION["telefono"] = $res["telefono"];
                $_SESSION["ceular"] = $res["celular"];
                $_SESSION["email"] = $res["email"];
                
                
                echo "<script> window.location.href = 'dashboard'; </script>";
            }

        }
    }
    public static function ctrGetUsers(){
        return ModelAdministrador::mdlGetUsers();
    }
    public static function ctrGetClientes(){
        return  ModelAdministrador::mdlGetClientes();
    }
    public static function ctrVerificarDni($dni){
        return  ModelAdministrador::mdlVerificarDni($dni);
    }
    public static function ctrVerificarEmail($email){
        return  ModelAdministrador::mdlVerificarEmail($email);
    }
    public static function ctrGetDataAdmin($idPerfil){
        return  ModelAdministrador::mdlGetDataAdmin($idPerfil);
    }
    public static function ctrAddNewUser($datos){
        return  ModelAdministrador::mdlAddNewUser($datos);
    }
    public static function ctrEditUser($datos){
        return  ModelAdministrador::mdlEditUser($datos);
    }
    public static function ctrDeleteAdmin($idDelete){
        return  ModelAdministrador::mdlDeleteAdmin($idDelete);
    }
}
?>