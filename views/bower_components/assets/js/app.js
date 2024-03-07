let idLast;
$().ready(async () => {
    if ($("#formUser")) {
        // let response = await fetch('views/bower_components/js/cod_provincias.json');
        // let data = await response.json();
        // for (const item in data) {
        //     let option = document.createElement('option');
        //     option.setAttribute('value', item);
        //     option.textContent = item;
        //     $('#floatingRegion').append(option);
        // }
        // $("#floatingRegion").on("change", function (e) {
        //     let region = e.target.value;
        //     $("#floatingProvincia").remove();
        //     for (const item in data) {
        //         if (region == item) {
        //             let select = document.createElement("select");
        //             select.setAttribute('id', 'floatingProvincia');
        //             select.setAttribute('name', 'provincia');
        //             select.classList.add('form-select');
        //             $("#prefijos").append(select);
        //             for (const provincia in data[item]) {
        //                 let option = document.createElement('option');
        //                 option.setAttribute('value', provincia);
        //                 option.textContent = provincia + " (" + data[item][provincia] + ")";
        //                 $("#floatingTel").removeAttr("disabled");
        //                 $('#floatingProvincia').append(option);
        //             }
        //             break;
        //         }
        //     }
        // })
        $("#formUser").on("change", function (e) {
            let id = e.target.id;
            if (e.target.value.length > 0 && id != 'files') {
                if (id == "email") {
                    $.ajax({
                        type: "POST",
                        url: "ajax/administrador.php",
                        data: {
                            emailUser: e.target.value
                        },
                        success: function (response) {
                            let resDNI = JSON.parse(response);
                            Swal.fire({
                                title: "Verificando e-mail",
                                html: "Esperando a que el sistema verifique el e-mail. Esto puede tardar un momento",
                                timer: 1000,
                                timerProgressBar: true,
                                didOpen: () => {
                                    Swal.showLoading()
                                    timeInterval = setInterval(() => {
                                        const content = Swal.getHtmlContainer()
                                        if (content) {
                                            const b = content.querySelector('b');
                                            if (b) {
                                                b.textContent = Swal.getTimerLeft()
                                            }
                                        }
                                    }, 100)
                                },
                                willClose: () => {
                                    clearInterval(timeInterval)
                                }
                            }).then(() => {
                                if (resDNI.verificado == false) {
                                    removeDisabled();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Esta dirección de correo no está disponible!',
                                        text: 'Ingrese una dirección de correo diferente'
                                    })
                                    addDisabled();
                                }
                            })
                        }
                    });
                } else if (id == "dni") {
                    let value = e.target.value;
                    if (value.length != 10) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Un DNI esta compuesto por 10 números',
                            text: 'Ingrese un número de DNI válido...'
                        })
                    } else {
                        $.ajax({
                            type: "POST",
                            url: "ajax/administrador.php",
                            data: {
                                dniUser: value
                            },
                            success: function (response) {
                                let respuesta = JSON.parse(response);
                                Swal.fire({
                                    title: "Verificando DNI",
                                    html: "Esperando a que el sistema verifique el DNI. Esto puede tardar un momento",
                                    timer: 1000,
                                    timerProgressBar: true,
                                    didOpen: () => {
                                        Swal.showLoading()
                                        timeInterval = setInterval(() => {
                                            const content = Swal.getHtmlContainer()
                                            if (content) {
                                                const b = content.querySelector('b');
                                                if (b) {
                                                    b.textContent = Swal.getTimerLeft()
                                                }
                                            }
                                        }, 100)
                                    },
                                    willClose: () => {
                                        clearInterval(timeInterval)
                                    }
                                }).then(() => {
                                    if (respuesta.verificado == false) {
                                        $("#email").removeAttr("disabled");
                                    } else {
                                        $("#email").attr("disabled", true);
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Esta número de DNI no está disponible!',
                                            text: 'Ingrese un número de DNI diferente!'
                                        })
                                    }
                                })
                            }
                        });
                    }
                } else if (id == "celular") {
                    let value = e.target.value
                    if (value.length != 10) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Debe contener al menos 10 números',
                            text: 'Ingrese un número de celular válido...'
                        })
                    }
                } else if (id == "telefono") {
                    let value = e.target.value
                    if (value.length != 10) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Debe contener al menos 10 números',
                            text: 'Ingrese un número de teléfono válido...'
                        })
                    }
                }
            }
        })
        $("#formUser").on("submit", function (e) {
            e.preventDefault();
            let formData = new FormData();
            // let files = $("#files")[0].files[0];
            formData.append("accion", ($("#btnEditAdd").html() == "Editar") ? "Editar" : "Agregar");
            if ($("#btnEditAdd").html() == "Editar") {
                formData.append("id", $(".idUsuario").val());
            }
            formData.append("nombre", $("#nombre").val());
            formData.append("apellido", $("#apellido").val());
            formData.append("dni", $("#dni").val());
            formData.append("email", $("#email").val());
            formData.append("celular", $("#celular").val());
            formData.append("telefono", $("#telefono").val());
            formData.append("username", $("#username").val());
            formData.append("password", $("#password").val());
            formData.append("rol", $("#inputState").val());
            formData.append("registrado_por", $("#registrado_por").val());
            formData.append("fecha_creacion", new Date());
            $.ajax({
                type: "POST",
                url: "ajax/administrador.php",
                data: formData,
                processData: false,
                contentType: false,
                success: function (status) {
                    let stat = JSON.parse(status);
                    let mensaje = (formData.get("accion") == "Editar") ? "Usuario editado correctamente" : "Usuario agregado correctamente";
                    if (stat.verificado) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: mensaje,
                            confirmButtonColor: '#3085d6',
                            confirmButtonText: 'OK',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "usuarios";
                            }
                        })
                    } else {
                        Swal.fire(
                            'No se ha realizado ningun cambio',
                            'Se actualizará la página',
                            'warning'
                        ).then((result) => {
                            if (result.isConfirmed) {
                                window.location.href = "usuarios";
                            }
                        })
                    }
                }
            })
        })
    }
})

function addDisabled() {
    $("#celular").attr("disabled", true);
    $("#telefono").attr("disabled", true);
    $("#username").attr("disabled", true);
    $("#password").attr("disabled", true);
    $(".btnEditAdd").attr("disabled", true);
}

function removeDisabled() {
    $("#celular").removeAttr("disabled");
    $("#telefono").removeAttr("disabled");
    $("#username").removeAttr("disabled");
    $("#password").removeAttr("disabled");
    $(".btnEditAdd").removeAttr("disabled");
}
$(document).on("change", "#files", function () {
    $("#btnAñadir").removeAttr("disabled");
    let file = this.files;
    let supporteImages = ["image/jpeg", "image/png", "image/jpeg", "image/jpg"];
    let elementoInvalido = false;
    let element = file[0];
    if (supporteImages.indexOf(element.type) != -1) {
        createPreview(element);
    }

    function createPreview(file) {
        let imgCodified = URL.createObjectURL(file);
        $("#imgUser").removeAttr('src');
        $("#imgUser").attr('src', imgCodified);
    }
})
