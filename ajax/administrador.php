<?php
    include_once '../controllers/administrador.controller.php';
    include_once '../models/administrador.model.php';

    class AjaxAdministrador{
        public $idPerfil;
        public function ajaxGetUsers(){
            $respuesta = ControllerAdministrador::ctrGetUsers();
            echo json_encode($respuesta);
        }
        public function ajaxVerificarDni($dni){
            $respuesta = array("verificado" => ControllerAdministrador::ctrVerificarDni($dni));
            echo json_encode($respuesta);
        }
        public function ajaxVerificarEmail($email){
            $respuesta = array("verificado" => ControllerAdministrador::ctrVerificarEmail($email));
            echo json_encode($respuesta);
        }
        public function ajaxEditarPerfil(){
            $valor = $this->idPerfil;
            $respuesta = ControllerAdministrador::ctrGetDataAdmin($valor);
            echo json_encode($respuesta);
        }
        // public function ajaxEliminarPerfil(){
        //     $respuesta = "";
        //     $id = $this->idPerfil;
        //     $respuesta = ControllerAdministrador::ctrDeleteAdmin($id);
        //     echo json_encode($respuesta);
        // }
        public function ajaxAgregarUsuario($datos){
            $res = array();
            $res = array("verificado" => ControllerAdministrador::ctrAddNewUser($datos));
            echo json_encode($res);
        }
        public function ajaxEditarUsuario($datos){
            $respuesta = ["verificado" => ControllerAdministrador::ctrEditUser($datos)];
            echo json_encode($respuesta);
        }
    }
    if(isset($_POST["getUsers"])){
        $getUsers = new AjaxAdministrador();
        $getUsers->ajaxgetUsers();
    }
    if(isset($_POST["dniUser"])){
        $verificarDni = new AjaxAdministrador();
        $verificarDni->ajaxVerificarDni($_POST["dniUser"]);
    }
    if(isset($_POST["emailUser"])){
        $verificarEmail = new AjaxAdministrador();
        $verificarEmail->ajaxVerificarEmail($_POST["emailUser"]);
    }
    if(isset($_POST["idPerfil"])){
        $editar = new AjaxAdministrador();
        $editar->idPerfil = $_POST["idPerfil"];
        $editar->ajaxEditarPerfil();
    }
    // if(isset($_POST["idEliminar"])){
    //     $eliminar = new AjaxAdministrador();
    //     $eliminar->idPerfil = $_POST["idEliminar"];
    //     $eliminar->ajaxEliminarPerfil();
    //  }
    if(isset($_POST["nombre"])){
        $datos = [];
        if(isset($_POST["id"])){
            $datos = [
                "id" => $_POST["id"],
                "nombre" => $_POST["nombre"],
                "apellido" => $_POST["apellido"],
                "email" => $_POST["email"],
                "dni" => $_POST["dni"],
                "celular" => $_POST["celular"],
                "telefono" => $_POST["telefono"],
                "username" => $_POST["username"],
                "password" => md5($_POST["password"]),
                "registrado_por" => $_POST["registrado_por"],
                "rol" => $_POST["rol"],
                "fecha_creacion" => $_POST["fecha_creacion"]
            ];
            $editar = new AjaxAdministrador();
            $editar->ajaxEditarUsuario($datos);
        }else{
            $datos = [
                "nombre" => $_POST["nombre"],
                "apellido" => $_POST["apellido"],
                "email" => $_POST["email"],
                "dni" => $_POST["dni"],
                "celular" => $_POST["celular"],
                "telefono" => $_POST["telefono"],
                "username" => $_POST["username"],
                "password" => md5($_POST["password"]),
                "registrado_por" => $_POST["registrado_por"],
                "rol" => $_POST["rol"],
                "fecha_creacion" => $_POST["fecha_creacion"]
            ];
            $agregar = new AjaxAdministrador();
            $agregar->ajaxAgregarUsuario($datos);
        }
    }
    