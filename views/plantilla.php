<!DOCTYPE html>
<?php
session_start();
?>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Asopagua</title>
    <link rel="icon" href="<?php echo URL . VW; ?>images/bg_small.png">
    <!-- Facebook Meta tags for Product -->
    <link rel="canonical" href="/">
    <link rel="stylesheet" href="//use.fontawesome.com/releases/v5.7.1/css/all.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <link rel="stylesheet" href="<?php echo URL . VW; ?>bower_components/assets/vendor/owlcarousel/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo URL . VW; ?>bower_components/assets/vendor/owlcarousel/owl.theme.default.min.css">
    <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-JBWEC7QQTS"></script> -->
    <script src="<?php echo URL . VW; ?>bower_components/assets/vendor/jquery/jquery.min.js"></script>
    <!-- <script src="<?php echo URL . VW; ?>bower_components/assets/js/jumpseller-2.0.0.js" defer="defer"></script> -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
    <link href="<?php echo URL . VW; ?>bower_components/assets/css/sb-admin-2.min.css" rel="stylesheet">
    <link href="<?php echo URL . VW; ?>bower_components/assets/vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="<?php echo URL . VW; ?>bower_components/assets/vendor/SweetAlert/dist/sweetalert2.min.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');

        .text_vision {
            font-family: 'Barlow Condensed', sans-serif;
        }

        .logo_text {
            font-family: "Dancing Script", cursive;
        }

        .text_vision {
            font-size: 25px !important;
        }
    </style>
</head>

<body>
    <?php
    $url = isset($_GET["url"]) ? $_GET["url"] : "inicio";
    $url = strtolower($url);
    $path_view = VW . MOD . $url . '.php';
    if ($url == "admin") {
        if (isset($_SESSION["admin_logueado"])) {
            echo "<script> window.location.href = 'dashboard';</script>";
        } else {
            require 'views/modulos/login.php';
        }
    } else if ($url == 'dashboard' || $url == "usuarios" || $url == "clientes" || $url == "logout") {
        if (file_exists($path_view)) {
            echo "<div id='wrapper'>";
            if ($_SESSION["admin_logueado"] == "OK") {
                require_once 'views/partials/sidebar.php';
                echo '<div id="content-wrapper" class="d-flex flex-column"><div id="content">';
                require_once 'views/partials/nav.php';
                require $path_view;
                require_once 'views/partials/footer.php';
            } else {
                echo "<script> window.location.href = 'admin';</script>";
            }
            echo "</div></div></div>";
        } else {
            require_once 'views/modulos/error404.php';
        }
    } else if ($url == "inicio" || $url == 'cart') {
        include $path_view;
    } else {
        require_once 'views/modulos/error404.php';
    }
    ?>
    <script src="<?php echo URL . VW; ?>bower_components/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="<?php echo URL . VW; ?>bower_components/assets/vendor/jquery-easing/jquery.easing.min.js"></script>

    <!-- Custom scripts for all pages-->
    <script src="<?php echo URL . VW; ?>bower_components/assets/js/sb-admin-2.min.js"></script>

    <!-- Page level plugins -->
    <script src="<?php echo URL . VW; ?>bower_components/assets/vendor/datatables/jquery.dataTables.min.js"></script>
    <script src="<?php echo URL . VW; ?>bower_components/assets/vendor/datatables/dataTables.bootstrap4.min.js"></script>

    <!-- Page level custom scripts -->
    <script src="<?php echo URL . VW; ?>bower_components/assets/js/demo/datatables-demo.js"></script>
    <script src="<?php echo URL . VW; ?>bower_components/assets/vendor/SweetAlert/dist/sweetalert2.all.min.js"></script>
    <script src="<?php echo URL . VW; ?>bower_components/assets/js/app.js"></script>
    <script src="<?php echo URL . VW; ?>bower_components/assets/js/usuarios.js"></script>

    <script src="//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
</body>

</html>