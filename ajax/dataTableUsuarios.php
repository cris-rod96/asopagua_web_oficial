<?php
include_once '../controllers/administrador.controller.php';
include_once '../models/administrador.model.php';
class TablaUsuarios
{
    public function mostrarTablaUsuarios()
    {
        $respuesta = ControllerAdministrador::ctrGetUsers();
        if(count($respuesta) == 0){
            echo '{"data" : []}';
            return;
        }
        $datosJson = '{"data":[';
        for($i  = 0; $i < count($respuesta); $i++){
            $boton = "<button class='btn btn-warning btnAction' idUsuario='" . $respuesta[$i]["id"] . "' data-toggle='modal' data-target='#modalActionUsuario'><i class='fas fa-edit'></i></button>";
            $datosJson.='[
                "'.$respuesta[$i]["id"].'",
                "'.$respuesta[$i]["nombre"].'",
                "'.$respuesta[$i]["apellido"].'",
                "'.$respuesta[$i]["dni"].'",
                "'.$respuesta[$i]["email"].'",
                "'.$respuesta[$i]["celular"].'",
                "'.$respuesta[$i]["telefono"].'",
                "'.$respuesta[$i]["username"].'",
                "'.$boton.'"
            ],';
        }
        $datosJson = substr($datosJson, 0, -1);
        $datosJson.=']}';
        echo $datosJson;
    }
}

$activarProductos = new TablaUsuarios();
$activarProductos->mostrarTablaUsuarios();
