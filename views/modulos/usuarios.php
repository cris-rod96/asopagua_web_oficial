<div class="container-fluid">

    <!-- Page Heading -->
    <h3 class="h3 mb-2 text-gray-800">Tabla de Administradores</h3>
    <div class="card shadow mb-4">
        <div class="card-header border-0">
            <button class="btn btn-primary btnNuevo" data-toggle="modal" data-target="#modalActionUsuario">Agregar nuevo usuario</button>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered table-striped dt-responsive" style="font-size: 12px;" id="dataTableUsuarios" width="100%" cellspacing="0">
                    <thead style="font-weight: bold; color: black;" class="text-center">
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>DNI</th>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Teléfono</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div class="row">
                <div class="col-md-10">
                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" id="modalActionUsuario" aria-hidden="true">
                        <div class="modal-dialog modal-lg">
                            <div class="modal-content">
                                <div class="modal-header bg-gradient-primary text-white">
                                    <h4 class="modal-title font-weight-bold titleModal text-center" id="exampleModalLabel">NUEVO USUARIO</h4>
                                </div>
                                <div class="modal-body">
                                    <form method="POST" enctype="multipart/form-data" id="formUser">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <form method="POST" enctype="multipart/form-data" id="agregarFoto">
                                                    <div class="card text-center">
                                                        <div class="card-header bg-white">
                                                            <output id="imageUser">
                                                                <img src="<?php echo URL . VW; ?>images/userDefault.png" alt="" id="imgUser" class="img-thumbnail">
                                                            </output>
                                                        </div>
                                                        <div class="card-body">
                                                            <label class="btn btn-primary d-block mb-3" for="files">Cargar foto</label>
                                                            <div class="files" style="visibility: hidden; width: 0.1px; height: 0.1px;">
                                                                <input accept="images/" name="file" type="file" id="files">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div class="col-md-8">
                                                <input type="hidden" class="idUsuario">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="">Nombre:</label>
                                                            <input type="text" id="nombre" name="name" class="form-control form-control-lg" required>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="">Apellido:</label>
                                                            <input type="text" id="apellido" name="apellido" class="form-control form-control-lg" required>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label for="floatingDni">DNI</label>
                                                    <input type="number" maxlength="10" minlength="10" id="dni" name="dni" class="form-control form-control-lg" required>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label for="floatingEmail">Correo electrónico</label>
                                                    <input type="email" id="email" name="email" class="form-control form-control-lg" disabled required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="floatingNumeroUno">Celular</label>
                                                    <input type="number" maxlength="10" minlength="10" class="form-control form-control-lg" name="celular" id="celular" required disabled>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label for="floatingTel">Teléfono</label>
                                                    <input type="number" maxlength="10" minlength="10" class="form-control form-control-lg" name="telefono" id="telefono" disabled>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="floatingUsername">Username</label>
                                                            <input type="text" id="username" name="username" class="form-control form-control-lg" disabled>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group mb-3">
                                                            <label for="floatingPassword">Password</label>
                                                            <input type="text" id="password" name="password" class="form-control form-control-lg" disabled>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label for="inputState">Rol</label>
                                                    <select id="inputState" class="form-control">
                                                        <option selected disabled>**** Tipo de Usuario ****</option>
                                                        <option value="Usuario">Usuario</option>
                                                        <option value="Administrador">Administrador</option>
                                                    </select>
                                                </div>
                                                <div class="form-group mb-3">
                                                    <label for="floatingRegisterPor">Registrado por</label>
                                                    <input type="text" id="registrado_por" name="registrado_por" class="form-control text-secondary" placeholder="Registrado por" value="<?php echo $_SESSION["full_name"]; ?>" disabled style="font-size: 14px;">
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary btnEditAdd" disabled id="btnEditAdd">Registrar</button>
                                                    <button type="button" class="btn btn-danger btnEliminar" data-dismiss="modal">Eliminar</button>
                                                    <button type="button" class="btn btn-dark float-right" id="btnCancelar" data-dismiss="modal">Cancelar</button>
                                                </div>
                                            </div>
                                        </div>
                                        <!--- ROW-->
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- /.container-fluid -->