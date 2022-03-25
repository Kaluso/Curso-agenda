





var contactos = new Array();



function contacto(){
   
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.correo = correo;
    this.direccion = direccion;;
   

}

function agregarContacto(){

       // obtiene los parametros en base al ID del HTML.
       nombre = document.getElementById('txtNombre').value;
       apellido = document.getElementById('txtApellido').value;
       telefono = document.getElementById('txtTelefono').value;
       correo = document.getElementById('txtCorreo').value;
       direccion = document.getElementById('txtDireccion').value;
       
       // Enlaza la funcion contacto a una variable para ser utilizada a traves del .push del array.
       let addcontacto = new contacto();

       // genera un arreglo con los parametros enviados a traves de la funcion contacto.
       contactos.push(addcontacto);
    
       
    console.log(contactos);
}



/*

copypaste del console.log(contactos)

[contacto]
0: contacto
apellido: "uso"
correo: "Prueba@gmail.com"
direccion: "En el culo de tu vieja"
nombre: "Kal"
telefono: "123456789"

*/

/*

function contacto()
function agregarContacto()
function eliminarContacto(id)
function pintarContactos()
function orderContactos(orden, tipoOrden)
function filtrarContacto(nombreFiltro, filtro)


Pagina usada como referencia 
https://gist.github.com/Villanuevand/7583485   (Agenda telefonica de alguien)

Video de referencia
https://www.youtube.com/watch?v=rdJK2vBE3YM&t=1046s&ab_channel=ayudaweb.net   (Agenda telefonica de alguien)

*/

