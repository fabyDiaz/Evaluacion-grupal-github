document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    var verificar= true;
    evento.preventDefault();
    var nombre = document.getElementById('fname').value;
    if(nombre.length == 0) {
      alert('No has escrito tu nombre');
      verificar=false;
      return;
    }
    var apellido = document.getElementById('lname').value;
    if (apellido.length == 0) {
      alert('No has escrito tu apellido');
      verificar=false;
      return;
    }
    var correo = document.getElementById('email').value;
    if (correo.length == 0) {
      alert('Debes ingresar un correo electrónico');
      verificar=false;
      return;
    }
    var fono = document.getElementById('phone').value;
    if (fono.length == 0) {
      alert('Debes ingresar un número telefónico');
      verificar=false;
      return;
    }
    var mensaje = document.getElementById('message').value;
    if (mensaje.length == 0) {
      alert('Debes escribir tu mensaje');
      verificar=false;
      return;
    }
    var asunto = document.getElementById('asunto').value;
    if (asunto.length == 0) {
      alert('Debes escribir el asunto del correo');
      verificar=false;
      return;
    }

    var bandera=false
    if (document.getElementById('exampleCheck1').checked)
    {
    bandera=true;
    }
    if (bandera==false){
        alert('Debe confirmar terminos y condiciones');
        verificar=false;
    }

    if(verificar==true){
        alert("Muchas gracias por enviar el formulario");
        document.getElementById('formulario').reset();
    }

    this.submit();
  }