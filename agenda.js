





var contactos = new Array();



function contacto(){
   
    this.nombre = '';
    this.apellido = '';
    this.telefono = '';
    this.correo = '';
    this.direccion = '';
   

}

function agregarContacto(){

    let addcontacto = new contacto();
    
     addcontacto.nombre = document.getElementById('txtNombre').value;
     addcontacto.apellido = document.getElementById('txtApellido').value;
     addcontacto.telefono = document.getElementById('txtTelefono').value;
     addcontacto.correo = document.getElementById('txtCorreo').value;
     addcontacto.direccion = document.getElementById('txtDireccion').value;
    
     contactos[contactos.length] = addcontacto;
      mostrarContactos();
     contactos.push(addcontacto);
     
     
  
}

function mostrarContactos(){
    document.getElementById('todosContactos').innerHTML = '';
    for (x=0; x<contactos.length; x++){
        addcontacto = contactos[x];
        div = document.createElement('div');
        div.setAttribute('class', 'contactos');
        div.innerHTML = 
        addcontacto.nombre+"<br/>"+
        addcontacto.apellido+"<br/>"+
        addcontacto.telefono+"<br/>"+
        addcontacto.correo+"<br/>"+
        addcontacto.direccion+"<br/>";
        document.getElementById('todosContactos').appendChild(div);
       

        

    }

}

