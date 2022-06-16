//funcion para confirmacion de reestablecer valores
function confirmMesssage(){
    window.confirm("Esta seguro de reestablecer la infomración?")
}

//funcion para evaluar alguna ultima informacion o observacion de la reserva
function verificationCode(){
    window.prompt("Tienes alguna observacion?")
}

//validacion de campo de texto
function areaVerification(){
    observacion = document.getElementById("ciudad").value;
    cantidad = document.getElementById("cantidadPacking").value;
    indice = document.getElementById("tipoEvento");
    mail =document.getElementById("mailEventos").value;
    phoneEvent = document.getElementById("telEvento").value;
    var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;
    articulo = document.getElementById("campo");
    documento = document.getElementById("documento").value;

    //validacion un campo de texto obligatorio
    if( observacion== null || observacion.length == 0 || /^\s+$/.test(observacion) ) {
        alert("Escriba una ciudad")
        return false;
    }
    
    //Validacion un campo de texto con valores numéricos
    if(isNaN(cantidad)) {
        alert("Digite un numero en este campo")
        return false;
    }

    // Validacion de seleccionado una opción de una lista
    if(indice == null || indice == 0 ) {
        alert("seleccione un tipo de evento")
        return false;
    }

    // Validacion de email
    if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
        alert("digite un correo electronico valido")
        return false;
    }

    // Validacion fecha
    valor = new Date(ano, mes, dia);
    if( !isNaN(valor) ) {
        alert("Digite una fecha valida")
        return false;
    }

    if( !(/^\d{10}$/.test(documento)) ) {
        alert("Verifique el numero de documento digitado")
        return false;
      }

    // Validar un número de teléfono
    if( !(/^\d{3}-\d{3}-\d{4}$/.test(phoneEvent)) ) {
        alert("digite un numero valido")
        return false;
    }

    //Validacion checkbox
    if( !articulo.checked ) {
        alert("Por favor, seleccione al menos un articulo ")
        return false;
    }

}

