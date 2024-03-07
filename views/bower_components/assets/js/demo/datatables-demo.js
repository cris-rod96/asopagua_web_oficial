// Call the dataTables jQuery plugin
$(document).ready(function() {
    $('#dataTableUsuarios').DataTable({
      "ajax": "ajax/dataTableUsuarios.php"
    });

  $("#dataTableClientes").DataTable({
    "ajax": "ajax/dataTableClientes.php"
  })

});
