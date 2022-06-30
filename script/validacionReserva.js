
/* Validacion Packing */
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const ciuadad = document.getElementById('ciuadad')
    const Direccion = document.getElementById('Direccion')
    const Telefono = document.getElementById('Telefono')
    const Tipo = document.getElementById('Tipo')
    const Cantidad = document.getElementById('Cantidad')
    const email = document.getElementById('email')
    const Fecha = document.getElementById('Fecha')
    const Observacion = document.getElementById('Observacion')

    form.addEventListener('submit', (e) => {
        /* e.preventDefault() */
        validaCampos()
/*         if(validaCampos){
            validaCampos
        }else{
            form.resert();
        } */
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const usuarioValor = usuario.value.trim()
        const ciuadadValor = ciuadad.value.trim()
        const DireccionValor = Direccion.value.trim()
        const TelefonoValor = Telefono.value.trim()
        const TipoValor = Tipo.value.trim()
        const CantidadValor = Cantidad.value.trim()
        const emailValor = email.value.trim()
        const FechaValor = Fecha.value.trim()
        const ObservacionValor = Observacion.value.trim();
     
        //validando campo usuario
        
        if(!usuarioValor){
            //console.log('CAMPO VACIO')
            validaFalla(usuario, 'Llene este espacio')
        }else{
            validaOk(usuario)
        }
        if(!ciuadadValor){
            //console.log('CAMPO VACIO')
            validaFalla(ciuadad, 'Llene este espacio')
        }else{
            validaOk(ciuadad)
        }

        if(!DireccionValor){
            //console.log('CAMPO VACIO')
            validaFalla(Direccion, 'Llene este espacio')
        }else{
            validaOk(Direccion)
        }

        if(!TelefonoValor){
            //console.log('CAMPO VACIO')
            validaFalla(Telefono, 'Llene este espacio')
        }else{
            validaOk(Telefono)
        }

        if(!TipoValor){
            //console.log('CAMPO VACIO')
            validaFalla(Tipo, 'Llene este espacio')
        }else{
            validaOk(Tipo)
        }
        if(!CantidadValor){
            //console.log('CAMPO VACIO')
            validaFalla(Cantidad, 'Llene este espacio')
        }else{
            validaOk(Cantidad)
        }
        if(!FechaValor){
            //console.log('CAMPO VACIO')
            validaFalla(Fecha, 'Llene este espacio')
        }else{
            validaOk(Fecha)
        }
        if(!ObservacionValor){
            //console.log('CAMPO VACIO')
            validaFalla(Observacion, 'Llene este espacio')
        }else{
            validaOk(Observacion)
        }
        

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Llene este espacio')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
        
        /* Validacion de correcto/incorrecto */
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})


/* function submitform(){
    if(usuarioValor == validaOk){
        alert("Formulario enviado desde Java Script");
        document.getElementById('formulario').submit();
        return false
    }else{
        alert("No has llenado nada")
    }

  } */
/* ************************** */
/* Validacion Material P.O.P */
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario2')
    const Cuales = document.getElementById('Cuales')
    const Cantidad0 = document.getElementById('Cantidad0')
    const Cantidad1 = document.getElementById('Cantidad1')
    const Cantidad2 = document.getElementById('Cantidad2')
    const Cantidad3 = document.getElementById('Cantidad3')
    const Cantidad4 = document.getElementById('Cantidad4')
    const Fecha1 = document.getElementById('Fecha1')
    const Detalle = document.getElementById('Detalle')
    const Nombre = document.getElementById('Nombre')
    const Numero = document.getElementById('Numero')
    const Localidad = document.getElementById('Localidad')
    const Direccion1 = document.getElementById('Direccion1')
    const Email = document.getElementById('Email')

    form.addEventListener('submit', (e) => {
        /*e.preventDefault()*/
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const CualesValor = Cuales.value.trim()
        const Cantidad0Valor = Cantidad0.value.trim()
        const Cantidad1Valor = Cantidad1.value.trim()
        const Cantidad2Valor = Cantidad2.value.trim()
        const Cantidad3Valor = Cantidad3.value.trim()
        const Cantidad4Valor = Cantidad4.value.trim()
        const Fecha1Valor = Fecha1.value.trim()
        const DetalleValor = Detalle.value.trim();
        const NombreValor = Nombre.value.trim();
        const NumeroValor = Numero.value.trim();
        const LocalidadValor = Localidad.value.trim();
        const Direccion1Valor = Direccion.value.trim();
        const EmailValor = Email.value.trim();
     
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        if(!CualesValor){
            //console.log('CAMPO VACIO')
            validaFalla(Cuales, 'Campo vacío')
        }else{
            validaOk(Cuales)
        }
        if(!Cantidad0Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Cantidad0, 'Campo vacío')
        }else{
            validaOk(Cantidad0)
        }

        if(!Cantidad1Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Cantidad1, 'Campo vacío')
        }else{
            validaOk(Cantidad1)
        }

        if(!Cantidad2Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Cantidad2, 'Campo vacío')
        }else{
            validaOk(Cantidad2)
        }

        if(!Cantidad3Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Cantidad3, 'Campo vacío')
        }else{
            validaOk(Cantidad3)
        }
        if(!Cantidad4Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Cantidad4, 'Campo vacío')
        }else{
            validaOk(Cantidad4)
        }
        if(!Fecha1Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Fecha1, 'Campo vacío')
        }else{
            validaOk(Fecha1)
        }
        if(!DetalleValor){
            //console.log('CAMPO VACIO')
            validaFalla(Detalle, 'Campo vacío')
        }else{
            validaOk(Detalle)
        }
        if(!NombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(Nombre, 'Campo vacío')
        }else{
            validaOk(Nombre)
        }
        if(!NumeroValor){
            //console.log('CAMPO VACIO')
            validaFalla(Numero, 'Campo vacío')
        }else{
            validaOk(Numero)
        }
        if(!LocalidadValor){
            //console.log('CAMPO VACIO')
            validaFalla(Localidad, 'Campo vacío')
        }else{
            validaOk(Localidad)
        }
        if(!Direccion1Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Direccion1, 'Campo vacío')
        }else{
            validaOk(Direccion1)
        }        
        
        
         //validando campo email
        if(!EmailValor){
            validaFalla(Email, 'Campo vacío')            
        }else if(!validaEmail(EmailValor)) {
            validaFalla(Email, 'El e-mail no es válido')
        }else {
            validaOk(Email)
        }



/*         
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!passValor) {
             validaFalla(pass, 'Campo vacío')
         } else if (passValor.length < 8) {             
             validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!passValor.match(er)) {
             validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(pass)
         }
    
          
    
         if(!passConfirmaValor){
             validaFalla(passConfirma, 'Confirme su password')
         } else if(passValor !== passConfirmaValor) {
             validaFalla(passConfirma, 'La password no coincide')
         } else {
             validaOk(passConfirma)
         }

 */
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})


/* Validacion Eventos */
/* ****************** */
/* ****************** */
/* ****************** */
/* ****************** */

window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario3')
    /* const Tipo = document.getElementById('Tipo') */
    const Nombre2 = document.getElementById('Nombre2')
    const Email2 = document.getElementById('Email2')
    const Telefono2 = document.getElementById('Telefono2')
    const Local = document.getElementById('Local')
    const Descripcion = document.getElementById('Descripcion')
    const Detalle2 = document.getElementById('Detalle2')
    const Localidad2 = document.getElementById('Localidad2')
    const Direccion2 = document.getElementById('Direccion2')
 
    

    form.addEventListener('submit', (e) => {
        /*e.preventDefault()*/
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        /* const TipoValor = Tipo.value.trim() */
        const Nombre2Valor = Nombre2.value.trim()
        const Email2Valor = Email2.value.trim();
        const Telefono2Valor = Telefono2.value.trim()
        const LocalValor = Local.value.trim()
        const DescripcionValor = Descripcion.value.trim()
        const Detalle2Valor = Detalle2.value.trim()
        const Localidad2Valor = Localidad2.value.trim()
        const Direccion2Valor = Direccion2.value.trim()

     
        //validando campo usuario
        //(!usuarioValor) ? console.log('CAMPO VACIO') : console.log(usuarioValor)
        /* if(!TipoValor){
            //console.log('CAMPO VACIO')
            validaFalla(Tipo, 'Campo vacío')
        }else{
            validaOk(Tipo)
        } */
        if(!Nombre2Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Nombre2, 'Campo vacío')
        }else{
            validaOk(Nombre2)
        }


         //validando campo email
         if(!Email2Valor){
            validaFalla(Email2, 'Campo vacío')            
        }else if(!validaEmail(Email2Valor)) {
            validaFalla(Email2, 'El e-mail no es válido')
        }else {
            validaOk(Email2)
        }

        /* ******** */

        if(!Telefono2Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Telefono2, 'Campo vacío')
        }else{
            validaOk(Telefono2)
        }

        if(!LocalValor){
            //console.log('CAMPO VACIO')
            validaFalla(Local, 'Campo vacío')
        }else{
            validaOk(Local)
        }

        if(!DescripcionValor){
            //console.log('CAMPO VACIO')
            validaFalla(Descripcion, 'Campo vacío')
        }else{
            validaOk(Descripcion)
        }
        if(!Direccion2Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Direccion2, 'Campo vacío')
        }else{
            validaOk(Direccion2)
        }
        if(!Localidad2Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Localidad2, 'Campo vacío')
        }else{
            validaOk(Localidad2)
        }
        if(!Detalle2Valor){
            //console.log('CAMPO VACIO')
            validaFalla(Detalle2, 'Campo vacío')
        }else{
            validaOk(Detalle2)
        }    
        
        
        



/*         
         const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,18}$/          
         if(!passValor) {
             validaFalla(pass, 'Campo vacío')
         } else if (passValor.length < 8) {             
             validaFalla(pass, 'Debe tener 8 caracteres cómo mínimo.')
         } else if (!passValor.match(er)) {
             validaFalla(pass, 'Debe tener al menos una may., una min. y un núm.')
         } else {
             validaOk(pass)
         }
    
          
    
         if(!passConfirmaValor){
             validaFalla(passConfirma, 'Confirme su password')
         } else if(passValor !== passConfirmaValor) {
             validaFalla(passConfirma, 'La password no coincide')
         } else {
             validaOk(passConfirma)
         }

 */
    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
        // alert("Su reserva ha sido creada con Exito")
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})

/* ************************** */


/* Validar solo nuemores */
/* *********************** */
/* *********************** */
/* *********************** */
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

/* Solo letras  */
/* ********************** */
/* ********************** */
/* ********************** */
/* ********************** */
function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
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

function limpia() {
    var val = document.getElementById("miInput").value;
    var tam = val.length;
    for(i = 0; i < tam; i++) {
        if(!isNaN(val[i]))
            document.getElementById("miInput").value = '';
    }
}

/* Agregar y Elminar datos */
/* function datos() {
    var usuario = document.getElementById("usuario").value;
    var ciuadad = document.getElementById("ciuadad").value;
    var Direccion = document.getElementById("Direccion").value;
    var arreglo = [usuario, ciuadad, Direccion];
    return arreglo;
  }

  function borrar() {
    document.getElementById("usuario").value = "rrrrr";
    document.getElementById("ciuadad").value = "rrrrr";
    document.getElementById("Direccion").value = "rrrrr";
  }

  function alerta() {
    var arreglo = datos();
    alert(`Su usuario es ${arreglo[0]}, su ciudad es ${arreglo[1]} y su direccion es ${arreglo[2]}`);
  }
  boton1.onclick = alerta;
  botonE.onclick = borrar;
 */

  function hizoClick() {
    var usuario = document.getElementById("usuario").value;
    var ciuadad = document.getElementById("ciuadad").value;
    var Direccion = document.getElementById("Direccion").value;
    var Telefono = document.getElementById("Telefono").value;
    var Tipo = document.getElementById("Tipo").value;
    var email = document.getElementById("email").value;
    var Cantidad = document.getElementById("Cantidad").value;
    var Fecha = document.getElementById("Fecha").value;
    var Observacion = document.getElementById("Observacion").value;
    if (usuario == "" || ciuadad == "" || Direccion == "" || Telefono == "" || Tipo == "" || email == "" || Cantidad == "" || Fecha == "" || Observacion == "" ) {
        alert("Debes completar todos los campos"); 
    } else {
    alert("Su reserva ha sido creada");
    }
  }

  function hizoClick2() {
    var usuario = document.getElementById("Cuales").value;
    var ciuadad = document.getElementById("Cantidad0").value;
    var Direccion = document.getElementById("Cantidad1").value;
    var Telefono = document.getElementById("Cantidad2").value;
    var Tipo = document.getElementById("Cantidad3").value;
    var email = document.getElementById("Cantidad4").value;
    var Cantidad = document.getElementById("Fecha1").value;
    var Fecha = document.getElementById("Detalle").value;
    var Observacion = document.getElementById("Nombre").value;
    var Observacion = document.getElementById("Numero").value;
    var Observacion = document.getElementById("Localidad").value;
    var Observacion = document.getElementById("Direccion1").value;
    var Observacion = document.getElementById("Email").value;
    if (usuario == "" || ciuadad == "" || Direccion == "" || Telefono == "" || Tipo == "" || email == "" || Cantidad == "" || Fecha == "" || Observacion == "" ) {
        alert("Debes completar todos los campos"); 
    } else {
    alert("Su reserva ha sido creada");
    }
  }

  function hizoClick3() {
    var usuario = document.getElementById("Nombre2").value;
    var ciuadad = document.getElementById("Email2").value;
    var Direccion = document.getElementById("Telefono2").value;
    var Telefono = document.getElementById("Local").value;
    var Tipo = document.getElementById("Descripcion").value;
    var email = document.getElementById("Localidad2").value;
    var Cantidad = document.getElementById("Direccion2").value;
    var Fecha = document.getElementById("Detalle2").value;
    if (usuario == "" || ciuadad == "" || Direccion == "" || Telefono == "" || Tipo == "" || email == "" || Cantidad == "" || Fecha == "" ) {
        alert("Debes completar todos los campos"); 
    } else {
    alert("Su reserva ha sido creada");
    }
  }