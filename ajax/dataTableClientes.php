<?php
include_once '../controllers/administrador.controller.php';
include_once '../models/administrador.model.php';
class TablaClientes
{
    public function mostrarTablaClientes()
    {$respuesta = ControllerAdministrador::ctrGetClientes();
        if(count($respuesta) == 0){
            echo '{"data" : []}';
            return;
        }
        $datosJson = '{"data":[';
        for($i  = 0; $i < count($respuesta); $i++){
            $boton = "<button class='btn btn-warning btnAction' idCliente='" . $respuesta[$i]["id"] . "' data-toggle='modal' data-target='#modalActionUsuario'><i class='fas fa-edit'></i></button>";
            $datosJson.='[
                "'.$respuesta[$i]["id"].'",
                "'.$respuesta[$i]["nombre"].'",
                "'.$respuesta[$i]["apellido"].'",
                "'.$respuesta[$i]["correo"].'",
                "'.$respuesta[$i]["name_usuario"].'",
                "'.$respuesta[$i]["ciudad"].'",
                "'.$respuesta[$i]["direccion"].'",
                "'.$respuesta[$i]["num_telefono"].'",
                "'.$boton.'"
            ],';
        }
        $datosJson = substr($datosJson, 0, -1);
        $datosJson.=']}';
        echo $datosJson;
    }
}

$activarProductos = new TablaClientes();
$activarProductos->mostrarTablaClientes();