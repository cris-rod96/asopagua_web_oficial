<?php
error_reporting(E_ALL);
ini_set('ignore_repeated_errors',TRUE);
ini_set('display_errors',FALSE);
ini_set('log_errors',TRUE);
ini_set('error_log','/var/www/html/asopagua_oficial/error_logs.log');
error_log("Iniciando aplicación");
require_once 'config/config.php';
require_once 'controllers/plantilla.controller.php';
require_once 'controllers/administrador.controller.php';
require_once 'models/administrador.model.php';
$plantilla = new controllerPlantilla();
$plantilla->ctrPlantilla();