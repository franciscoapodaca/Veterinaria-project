/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
/** Parte de los clientes */

function iniciarSesion() {

}
var Clientesvar = {
    cargar: function () {
        $.ajax({
            type: "get",
            url: "ClienteActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $("clientes option").remove();

                $.each(data, function (index, cliente) {
                    $("<option>").text(cliente.nombre + " " + cliente.apellidoPaterno + " " + cliente.apellidoMaterno)
                            .attr("value", cliente.idCliente).appendTo($("#clientes"));

                });

            }
        });
    },
    limpiarCampos: function () {
        $('#nombre').val('');
        $('#apellidoP').val('');
        $('#apellidoM').val('');
        $('#telefono').val('');
        $('#domicilio').val('');
        $('#email').val('');
        $('#apellidoP').focus();
        $('#apellidoM').focus();
        $('#telefono').focus();
        $('#domicilio').focus();
        $('#email').focus();
        $('#nombre').focus();
    },
    recolectarValores: function () {
        return {
            idCliente: parseInt($("#idCliente").val()),
            nombre: $("#nombre").val(),
            apellidoP: $("#apellidoP").val(),
            apellidoM: $("#apellidoM").val(),
            telefono: $("#telefono").val(),
            domicilio: $("#domicilio").val(),
            email: $("#email").val()
        };
    },
    insertar: function () {
        $.ajax({
            type: "post"
            , url: "ClienteAgregar"
            , async: true
            , cache: false
            , data: Clientesvar.recolectarValores()
            , success: function (resp) {

                Clientesvar.limpiarCampos();
            }
        });
    },
    eliminar: function () {
        $.ajax({
            type: "post"
            , url: "ClienteEliminar"
            , async: true
            , cache: false
            , data: Clientesvar.recolectarValores()
            , success: function (resp) {
                alert(resp);

            }
        });
    },
    mostrarCliente: function () {
        $.ajax({
            type: "get",
            url: "ClienteObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Clientesvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idCliente").val(data.idCliente);
                $("#nombre").val(data.nombre);
                $("#apellidoP").val(data.apellidoPaterno);
                $("#apellidoM").val(data.apellidoMaterno);
                $("#telefono").val(data.telefono);
                $("#domicilio").val(data.domicilio);
                $("#email").val(data.email);
            }
        });
    },
    actualizarCliente: function () {
        $.ajax({
            type: "post",
            url: "ClienteActualizar",
            async: true,
            cache: false,
            data: Clientesvar.recolectarValores(),
            success: function (resp) {
                Clientesvar.limpiarCampos();
                $('#formulario').hide();
                $('#clientes').val('');
                $('#clientes').focus();
            }

        });
    },
    obtenerClientesTabla: function () {

        $.ajax({
            type: "get",
            url: "ClienteActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, cliente) {

                    $("#tabla").append($("<tr>").append(
                            "<td>" + cliente.idCliente + "</td>"
                            + "<td>" + cliente.nombre + "</td>"
                            + "<td>" + cliente.apellidoPaterno + "</td>"
                            + "<td>" + cliente.apellidoMaterno + "</td>"
                            + "<td>" + cliente.telefono + "</td>"
                            + "<td>" + cliente.domicilio + "</td>"
                            + "<td>" + cliente.email + "</td>"
                            + "<td>" + "<button type='submit' id='botonEliminar' name='botonEliminar' value='" + cliente.idCliente + "'>Eliminar</button> </td>")

                            )
                            .attr("value", cliente.idCliente).appendTo($("#tabla"));

                });

            }
        });
    },
    obtenerClientesTablaTodos: function () {

        $.ajax({
            type: "get",
            url: "ClienteActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, cliente) {
                    //console.log(cliente);

                    $("#tabla").append($("<tr>").append(
                            "<td>" + cliente.idCliente + "</td>"
                            + "<td>" + cliente.nombre + "</td>"
                            + "<td>" + cliente.apellidoPaterno + "</td>"
                            + "<td>" + cliente.apellidoMaterno + "</td>"
                            + "<td>" + cliente.telefono + "</td>"
                            + "<td>" + cliente.domicilio + "</td>"
                            + "<td>" + cliente.email + "</td>")

                            )
                            .attr("value", cliente.idCliente).appendTo($("#tabla"));

                });

            }
        });
    },
};

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/** Parte de los empleados */

var Empleadosvar = {
    cargar: function () {
        $.ajax({
            type: "get",
            url: "EmpleadoActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $("empleados option").remove();

                $.each(data, function (index, empleado) {
                    $("<option>").text(empleado.nombre + " " + empleado.apellidoPaterno + " " + empleado.apellidoMaterno)
                            .attr("value", empleado.idEmpleado).appendTo($("#empleados"));

                });

            }
        });
    },
    limpiarCampos: function () {
        $('#nombre').val('');
        $('#apellidoP').val('');
        $('#apellidoM').val('');
        $('#numCedula').val('');
        $('#puesto').val('');
        $('#nombre').focus();

    },
    recolectarValores: function () {
        return {
            idEmpleado: parseInt($("#idEmpleado").val()),
            nombre: $("#nombre").val(),
            apellidoP: $("#apellidoP").val(),
            apellidoM: $("#apellidoM").val(),
            numCedula: $("#numCedula").val(),
            puesto: $("#puesto").val()
        };
    },
    insertar: function () {
        $.ajax({
            type: "post"
            , url: "EmpleadoAgregar"
            , async: true
            , cache: false
            , data: Empleadosvar.recolectarValores()
            , success: function (resp) {

                Empleadosvar.limpiarCampos();
            }
        });
    },
    eliminar: function () {
        $.ajax({
            type: "post"
            , url: "EmpleadoEliminar"
            , async: true
            , cache: false
            , data: Empleadosvar.recolectarValores()
            , success: function (resp) {

            }
        });
    },
    mostrarEmpleado: function () {
        $.ajax({
            type: "get",
            url: "EmpleadoObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Empleadosvar.recolectarValores()
            , success: function (data) {
                //console.log(data);
                $("#idEmpleado").val(data.idEmpleado);
                $("#nombre").val(data.nombre);
                $("#apellidoP").val(data.apellidoPaterno);
                $("#apellidoM").val(data.apellidoMaterno);
                $("#numCedula").val(data.numCedula);
                $("#puesto").val(data.puesto);
            }
        });
    },
    actualizarEmpleado: function () {
        $.ajax({
            type: "post",
            url: "EmpleadoActualizar",
            async: true,
            cache: false,
            data: Empleadosvar.recolectarValores(),
            success: function (resp) {
                Empleadosvar.limpiarCampos();
                $('#empleados').val('');
                $('#empleados').focus();

            }

        });
    },
    obtenerEmpleadosTabla: function () {

        $.ajax({
            type: "get",
            url: "EmpleadoActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, empleado) {
                    //console.log(cliente);

                    $("#tabla").append($("<tr>").append(
                            "<td>" + empleado.idEmpleado + "</td>"
                            + "<td>" + empleado.nombre + "</td>"
                            + "<td>" + empleado.apellidoPaterno + "</td>"
                            + "<td>" + empleado.apellidoMaterno + "</td>"
                            + "<td>" + empleado.numCedula + "</td>"
                            + "<td>" + empleado.puesto + "</td>"
                            + "<td>" + "<button type='submit' id='botonEliminar' name='botonEliminar' value='" + empleado.idEmpleado + "'>Eliminar</button> </td>")

                            )
                            .attr("value", empleado.idEmpleado).appendTo($("#tabla"));
                });

            }
        });
    },
    obtenerEmpleadosTablaTodos: function () {

        $.ajax({
            type: "get",
            url: "EmpleadoActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, empleado) {

                    $("#tabla").append($("<tr>").append(
                            "<td>" + empleado.idEmpleado + "</td>"
                            + "<td>" + empleado.nombre + "</td>"
                            + "<td>" + empleado.apellidoPaterno + "</td>"
                            + "<td>" + empleado.apellidoMaterno + "</td>"
                            + "<td>" + empleado.numCedula + "</td>"
                            + "<td>" + empleado.puesto + "</td>")

                            )
                            .attr("value", empleado.idEmpleado).appendTo($("#tabla"));

                });

            }
        });
    },
};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/** Parte de las Mascotas */

var Mascotasvar = {
    cargar: function () {
        $.ajax({
            type: "get",
            url: "MascotaActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $("mascotas option").remove();

                $.each(data, function (index, mascota) {
                    $("<option>").text(mascota.nombre)
                            .attr("value", mascota.idMascota).appendTo($("#mascotas"));

                });

            }
        });
    },
    limpiarCampos: function () {

        $('#nombre').val('');
        $('#raza').val('');
        $('#peso').val('');
        $('#edad').val('');
        $('#clientes').val('');
        $('#idClientes').val('');
        $('#nombre').focus();

    },
    recolectarValores: function () {
        return {
            idMascota: parseInt($("#idMascota").val()),
            nombre: $("#nombre").val(),
            raza: $("#raza").val(),
            peso: parseFloat($("#peso").val()),
            edad: parseInt($("#edad").val()),
            idCliente: parseInt($("#idCliente").val()),
        };
    },
    insertar: function () {
        $.ajax({
            type: "post"
            , url: "MascotaAgregar"
            , async: true
            , cache: false
            , data: Mascotasvar.recolectarValores()
            , success: function (resp) {
                Mascotasvar.limpiarCampos();
            }
        });
    },
    eliminar: function () {
        $.ajax({
            type: "post"
            , url: "MascotaEliminar"
            , async: true
            , cache: false
            , data: Mascotasvar.recolectarValores()
            , success: function (resp) {

            }
        });
    },
    mostrarMascota: function () {
        $.ajax({
            type: "get",
            url: "MascotaObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Mascotasvar.recolectarValores()
            , success: function (data) {
                //console.log(data);
                $("#idMascota").val(data.idMascota);
                $("#nombre").val(data.nombre);
                $("#raza").val(data.raza);
                $("#peso").val(data.peso);
                $("#edad").val(data.edad);
                $("#clientes").val(data.idCliente);
                $("#idCliente").val(data.idCliente);

            }
        });
    },
    mostrarClienteM: function () {
        $.ajax({
            type: "get",
            url: "ClienteObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Mascotasvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idCliente").val(data.idCliente);

            }
        });
    },
    actualizarMascota: function () {
        $.ajax({
            type: "post",
            url: "MascotaActualizar",
            async: true,
            cache: false,
            data: Mascotasvar.recolectarValores(),
            success: function (resp) {
                Mascotasvar.limpiarCampos();
                $('#mascotas').val('');
                $('#mascotas').focus();

            }

        });
    },
    obtenerMascotasTabla: function () {

        $.ajax({
            type: "get",
            url: "MascotaActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, mascota) {
                    //console.log(cliente);


                    $("#tabla").append($("<tr>").append(
                            "<td>" + mascota.idMascota + "</td>"
                            + "<td>" + mascota.nombre + "</td>"
                            + "<td>" + mascota.raza + "</td>"
                            + "<td>" + mascota.peso + " KG " + "</td>"
                            + "<td>" + mascota.edad + "</td>"
                            + "<td>" + mascota.idCliente + "</td>"
                            + "<td>" + "<button type='submit' id='botonEliminar' name='botonEliminar' value='" + mascota.idMascota + "'>Eliminar</button> </td>")

                            )
                            .attr("value", mascota.idMascota).appendTo($("#tabla"));

                });

            }
        });
    },
    obtenerMascotasTablaTodos: function () {

        $.ajax({
            type: "get",
            url: "MascotaActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, mascota) {

                    $("#tabla").append($("<tr>").append(
                            "<td>" + mascota.idMascota + "</td>"
                            + "<td>" + mascota.nombre + "</td>"
                            + "<td>" + mascota.raza + "</td>"
                            + "<td>" + mascota.peso + " KG " + "</td>"
                            + "<td>" + mascota.edad + "</td>"
                            + "<td>" + mascota.idCliente + "</td>")
                            )
                            .attr("value", mascota.idMascota).appendTo($("#tabla"));

                });

            }

        });

    },
};


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/** Parte de las Citas*/

var Citasvar = {
    cargar: function () {
        $.ajax({
            type: "get",
            url: "CitaActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $("citas option").remove();

                $.each(data, function (index, cita) {
                    $("<option>").text(cita.idCliente + " - " + cita.fecha)
                            .attr("value", cita.idCita).appendTo($("#citas"));

                });

            }
        });
    },
    limpiarCampos: function () {
        $('#descripcion').val('');
        $('#fecha').val('');
        $('#costo').val('');
        $('#idCliente').val('');
        $('#idMascota').val('');
        $('#idEmpleado').val('');
        $('#clientes').val('');
        $('#empleados').val('');
        $('#mascotas').val('');
        $('#clientes').focus();
    },
    recolectarValores: function () {
        return {
            idCita: parseInt($("#idCita").val()),
            descripcion: $("#descripcion").val(),
            fecha: $("#fecha").val(),
            costo: parseFloat($("#costo").val()),
            idCliente: parseInt($("#idCliente").val()),
            idMascota: parseInt($("#idMascota").val()),
            idEmpleado: parseInt($("#idEmpleado").val()
                    )};
    },
    insertar: function () {
        $.ajax({
            type: "post"
            , url: "CitaAgregar"
            , async: true
            , cache: false
            , data: Citasvar.recolectarValores()
            , success: function (resp) {
                Citasvar.limpiarCampos();
            }
        });
    },
    eliminar: function () {
        $.ajax({
            type: "post"
            , url: "CitaEliminar"
            , async: true
            , cache: false
            , data: Citasvar.recolectarValores()
            , success: function (resp) {

            }
        });
    },
    mostrarCita: function () {
        $.ajax({
            type: "get",
            url: "CitaObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Citasvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idCita").val(data.idCita);
                $("#descripcion").val(data.descripcion);
                $("#fecha").val(data.fecha);
                $("#costo").val(data.costo);
                $("#idCliente").val(data.idCliente);
                $("#idMascota").val(data.idMascota);
                $("#idEmpleado").val(data.idEmpleado);
                $("#clientes").val(data.idCliente);
                $("#mascotas").val(data.idMascota);
                $("#empleados").val(data.idEmpleado);
            }
        });
    },
    mostrarClienteC: function () {
        $.ajax({
            type: "get",
            url: "ClienteObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Citasvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idCliente").val(data.idCliente);

            }
        });
    },
    mostrarMascotaC: function () {
        $.ajax({
            type: "get",
            url: "MascotaObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Mascotasvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idMascota").val(data.idMascota);

            }
        });
    },
    mostrarEmpleadoC: function () {
        $.ajax({
            type: "get",
            url: "EmpleadoObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Mascotasvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idEmpleado").val(data.idEmpleado);

            }
        });
    },
    actualizarCita: function () {
        $.ajax({
            type: "post",
            url: "CitaActualizar",
            async: true,
            cache: false,
            data: Citasvar.recolectarValores(),
            success: function (resp) {
                Citasvar.limpiarCampos();
            }

        });
    },
    obtenerCitasTabla: function () {

        $.ajax({
            type: "get",
            url: "CitaActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, cita) {
                    //console.log(cliente);


                    $("#tabla").append($("<tr>").append(
                            "<td>" + cita.idCita + "</td>"
                            + "<td>" + cita.descripcion + "</td>"
                            + "<td>" + cita.fecha + "</td>"
                            + "<td>" + "$" + cita.costo + " pesos" + "</td>"
                            + "<td>" + cita.idCliente + "</td>"
                            + "<td>" + cita.idMascota + "</td>"
                            + "<td>" + cita.idEmpleado + "</td>"
                            + "<td>" + "<button type='submit' id='botonEliminar' name='botonEliminar' value='" + cita.idCita + "'>Eliminar</button> </td>")

                            )
                            .attr("value", cita.idCita).appendTo($("#tabla"));

                });

            }
        });
    },
    obtenerCitasTablaTodos: function () {

        $.ajax({
            type: "get",
            url: "CitaActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, cita) {
                    //console.log(cliente);

                    $("#tabla").append($("<tr>").append(
                            "<td>" + cita.idCita + "</td>"
                            + "<td>" + cita.descripcion + "</td>"
                            + "<td>" + cita.fecha + "</td>"
                            + "<td>" + "$" + cita.costo + " pesos" + "</td>"
                            + "<td>" + cita.idCliente + "</td>"
                            + "<td>" + cita.idMascota + "</td>"
                            + "<td>" + cita.idEmpleado + "</td>")
                            )
                            .attr("value", cita.idCita).appendTo($("#tabla"));

                });

            }
        });
    },
};



//--------------------------------------------------------------------------------------------------------------------------------------------------------------
/** Parte de los Usuarios */

var Usuariosvar = {
    cargar: function () {
        $.ajax({
            type: "get",
            url: "ClienteActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $("clientes option").remove();

                $.each(data, function (index, cliente) {
                    $("<option>").text(cliente.nombre + " " + cliente.apellidoPaterno + " " + cliente.apellidoMaterno)
                            .attr("value", cliente.idCliente).appendTo($("#clientes"));

                });

            }
        });
    },
    limpiarCampos: function () {
        document.getElementById("nombre").value = null;
        document.getElementById("apellidoP").value = null;
        document.getElementById("apellidoM").value = null;
        document.getElementById("telefono").value = null;
        document.getElementById("domicilio").value = null;
        document.getElementById("email").value = null;
        document.getElementById("nombre").focus();
    },
    recolectarValores: function () {
        return {
            idCliente: parseInt($("#idCliente").val()),
            nombre: $("#nombre").val(),
            apellidoP: $("#apellidoP").val(),
            apellidoM: $("#apellidoM").val(),
            telefono: $("#telefono").val(),
            domicilio: $("#domicilio").val(),
            email: $("#email").val()
        };
    },
    insertar: function () {
        $.ajax({
            type: "post"
            , url: "ClienteAgregar"
            , async: true
            , cache: false
            , data: Clientesvar.recolectarValores()
            , success: function (resp) {
                alert(resp);
                Clientesvar.limpiarCampos();
            }
        });
    },
    eliminar: function () {
        $.ajax({
            type: "post"
            , url: "ClienteEliminar"
            , async: true
            , cache: false
            , data: Clientesvar.recolectarValores()
            , success: function (resp) {
                alert(resp);

            }
        });
    },
    mostrarCliente: function () {
        $.ajax({
            type: "get",
            url: "ClienteObtenerPorId",
            async: true,
            cache: false,
            dataType: "json",
            data: Clientesvar.recolectarValores(),
            success: function (data) {
                //console.log(data);
                $("#idCliente").val(data.idCliente);
                $("#nombre").val(data.nombre);
                $("#apellidoP").val(data.apellidoPaterno);
                $("#apellidoM").val(data.apellidoMaterno);
                $("#telefono").val(data.telefono);
                $("#domicilio").val(data.domicilio);
                $("#email").val(data.email);
            }
        });
    },
    actualizarCliente: function () {
        $.ajax({
            type: "post",
            url: "ClienteActualizar",
            async: true,
            cache: false,
            data: Clientesvar.recolectarValores(),
            success: function (resp) {
                alert(resp);
                Clientesvar.limpiarCampos();
            }

        });
    },
    obtenerClientesTabla: function () {

        $.ajax({
            type: "get",
            url: "ClienteActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, cliente) {
                    console.log(cliente);


                    $("#tabla").append($("<tr>").append(
                            "<td>" + cliente.idCliente + "</td>"
                            + "<td>" + cliente.nombre + "</td>"
                            + "<td>" + cliente.apellidoPaterno + "</td>"
                            + "<td>" + cliente.apellidoMaterno + "</td>"
                            + "<td>" + cliente.telefono + "</td>"
                            + "<td>" + cliente.domicilio + "</td>"
                            + "<td>" + cliente.email + "</td>"
                            + "<td>" + "<button type='submit' id='botonEliminar' name='botonEliminar' value='" + cliente.idCliente + "'>Eliminar</button> </td>")

                            )
                            .attr("value", cliente.idCliente).appendTo($("#tabla"));

                });

            }
        });
    },
    obtenerClientesTablaTodos: function () {

        $.ajax({
            type: "get",
            url: "ClienteActualizar",
            dataType: "json",
            async: true,
            cache: false,
            success: function (data) {

                $.each(data, function (index, cliente) {
                    console.log(cliente);


                    $("#tabla").append($("<tr>").append(
                            "<td>" + cliente.idCliente + "</td>"
                            + "<td>" + cliente.nombre + "</td>"
                            + "<td>" + cliente.apellidoPaterno + "</td>"
                            + "<td>" + cliente.apellidoMaterno + "</td>"
                            + "<td>" + cliente.telefono + "</td>"
                            + "<td>" + cliente.domicilio + "</td>"
                            + "<td>" + cliente.email + "</td>")
                            )
                            .attr("value", cliente.idCliente).appendTo($("#tabla"));

                });

            }
        });
    },
};


