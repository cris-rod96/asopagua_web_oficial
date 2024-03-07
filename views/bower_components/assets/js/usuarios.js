// $(document).ready(function(){
//     $.ajax({
//         type: "GET",
//         url: "ajax/administrador.php",
//         success: function (response) {
//             alert(response)
//         }
//     });
// })
$("#dataTableUsuarios").on("click", "button.btnAction", function () {
    let idPerfil = $(this).attr("idUsuario");
    let infoData = {
        idPerfil
    };
    $.ajax({
        type: "POST",
        url: 'ajax/administrador.php',
        data: infoData,
        success: function (response) {
            let data = JSON.parse(response);
            $(".titleModal").html("CONFIGURACIÓN PERFIL DE USUARIO");
            $(".idUsuario").val(data.id);
            $("#nombre").val(data.nombre);
            $("#apellido").val(data.apellido);
            $("#dni").val(data.dni);
            $("#email").val(data.email);
            $("#celular").val(data.celular);
            $("#telefono").val(data.telefono);
            $("#username").val(data.username);
            $("#password").val("**********");
            $("#inputState option[value='"+data.rol+"']").attr("selected",true);
            if (data.image != '') {
                $("#imgUser").removeAttr("src");
                $("#imgUser").attr('src', data.image);
            }
            $(".btnEditAdd").html("Editar");
            $(".btnEliminar").show();
            $(".btnEliminar").attr("id", idPerfil);
            editInputs();
        }
    })
})

function editInputs() {
    $("#nombre").attr("disabled", true);
    $("#apellido").attr("disabled", true);
    $("#dni").attr("disabled", true);
    $("#email").removeAttr("disabled");
    $("#celular").removeAttr("disabled");
    $("#telefono").attr("disabled", false);
    $("#password").attr("disabled", true);
    $("#btnEditAdd").removeAttr("disabled");
    $("#inputState").attr("disabled",true);
}
$(".btnNuevo").on("click", function () {
    $(".titleModal").html("Nuevo Usuario");
    $("#nombre").val("");
    $("#apellido").val("");
    $("#dni").val("");
    $("#email").val("");
    $("#celular").val("");
    $("#telefono").val("");
    $("#username").val("");
    $("#password").val("");
    $(".btnEditAdd").html("Registrar");
    $(".btnEliminar").hide();
})

$("#formUser").on("click", "button.btnEliminar", function () {
    Swal.fire({
        title: '¿Estás seguro de eliminar a este usuario?',
        text: "¡Esta acción no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminarlo!',
        cancelButtonText: "Cancelar",
    }).then((result) => {
        let idEliminar = $(this).attr("id");
        let infoDelete = {
            idEliminar
        }
        if (result.isConfirmed) {
            $.ajax({
                type: "POST",
                url: 'ajax/administrador.php',
                data: infoDelete,
                success: function (response) {
                    if (response) {
                        Swal.fire(
                            'Eliminado',
                            'El usuario ha sido eliminado satisfactoriamente.',
                            'success'
                        ).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "usuarios";
                            }
                        })
                    }
                }
            })
        }
    })
})



