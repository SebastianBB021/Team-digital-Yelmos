function hizoClick() {
    var nombre = document.getElementById("name").value;
    var apellido = document.getElementById("lastName").value;
    var documento = document.getElementById("documento").value;
    var email = document.getElementById("mail").value;
    var cel = document.getElementById("celular").value;
    var pass = document.getElementById("contrasena").value;
    if (nombre == "" || apellido == "" || documento == "" || email == "" || cel == "" || pass == "" ) {
        alert("Debes completar todos los campos"); 
    } else {
    alert("Su cuenta ha sido creada");
    }
  }


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