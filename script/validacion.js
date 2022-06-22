window.alert("Bienvenido a Yelmos Logistica y soluciones")

function validation (){
    //validacion de usuario
    var usuarioCliente = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rol = document.getElementById("roles").value;

    //verificacion de campos
    if(usuarioCliente=="")
        alert("Digite su nombre de usuario o documento")

    if(password=="")
        alert("Digite su contraseña")
        
    if(rol=="" )
        alert("Por favor seleccione su rol")   

    //consicional para l acontrasea usuario y rol
    if (usuarioCliente == "123456" && password == "yelmos123" && rol == "Gerente"){
        alert ("Bienvenido");
        window.location = "iniciovistagerente.html";
    return false;
}
if (usuarioCliente == "1234567" && password == "cliente123" && rol == "Cliente"){
    alert ("Bienvenido");
    window.location = "perfilcliente.html";
return false;
}
if (usuarioCliente == "12345678" && password == "administrador123" && rol == "Administrador"){
    alert ("Bienvenido");
    window.location = "vistaAdministrador.html";
return false;
}
if (usuarioCliente == "123456789" && password == "cliente1234" && rol == "Cliente"){
    alert ("Bienvenido");
    window.location = "inicioCliente.html";
return false;
}
}        


// mail =document.getElementById("mailEventos").value;

// function mailVerification(){
//     if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(mail)) ) {
//         return false;
//     }   
// }

// phoneEvent = document.getElementById("telEvento").value;
// function phoneVerification(){
//     if( !(/^\d{9}$/.test(phoneEvent)) ) {
//         alert("digite un numero valido")
//         return false;
//     }
// }
/* Validar solo nuemores */
 function valideKey(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
} 

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = "áéíóúabcdefghijklmnñopqrstuvwxyz123456789";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}


/*   
function validarNumeros(e){
    Key=e.KeyCod || e.which;

    teclado= String.fromCharCode(Key);
    numero="0123456789";
    Tespeciales="8-37-38-46"
    Teclado_especial=false;

    for(var i in Tespeciales){
        if(Key=Tespeciales[i]){

            Teclado_especial=true;

        }

    }

    if(numero.indexOf(teclado)==-1 && !Teclado_especial){
        return false;

    }
} */


/* ***************** */
/* ***************** */
/* ***************** */
/* Validacion colores */



/* Validacion de Correo  */
function validacionEmail(){
    var correo = document.getElementById ("email").value;

    if(correo == "")
    alert("Ingrese su correo para enviar codigo")

    if(correo == "francojohan@gmail.com"){
        alert ("El codigo ya se ha enviado a su correo")
        return false
    }else{
        alert ("su correo no es valido")
    }
}






