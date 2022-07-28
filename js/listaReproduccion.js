import {login} from "./login.js"

let tablaMiListaCanciones = document.getElementById("tablaMiListaCanciones");

const parametro = window.location.search;
const urlParam = new URLSearchParams(parametro);

let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
  
let cancionAgregada = listaCanciones.find((cancion) => {
  return cancion.codigo == urlParam.get("codigo");
});



let listaUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || [];
 
let usuarioActivo = localStorage.getItem('usuarioActivoKey') || 'nico@gmail.com';

let indiceUsuario = listaUsuarios.findIndex((usuario) => {
  return usuario.email == usuarioActivo;
});

if (usuarioActivo != null)
{
    let indiceUsuario = listaUsuarios.findIndex((usuario) => {
        return usuario.email == usuarioActivo;
    });

    if (cancionAgregada != undefined)
    {
        let indiceCancion = listaUsuarios[indiceUsuario].canciones.findIndex((cancion) => {
            return cancion.codigo == cancionAgregada.codigo;
        });
        
        if(indiceCancion == -1){
            listaUsuarios[indiceUsuario].canciones.push(cancionAgregada);
        }
        
        localStorage.setItem('vectorUsuariosKey',JSON.stringify(listaUsuarios));
    }
    
    listaUsuarios[indiceUsuario].canciones.forEach(cancion => {
        crearMiLista(cancion);
    });
}

function crearMiLista(cancion){
  let newRow = 
  `<tr>
  <!--th scope="row">${cancion.codigo }</!--th-->
  <td>${cancion.titulo}</td>
  <td><p class="adminTrim">${cancion.artista}</p></td>
  <td>${cancion.categoria}</td>
  <td><p class="adminTrim">${cancion.imagen}</p></td>
  <td>${cancion.duracion}</td>
  <td><p class="adminTrim">${cancion.cancion}</p></td>
  <td>
      <button class="btn btnBorrar" onclick="borrarCancion('${cancion.codigo}')"><i class="bi bi-x-square"></i></button>
  </td>
  </tr>`

  tablaMiListaCanciones.innerHTML += newRow;
}

window.borrarCancion = function(codigo)
{
    Swal.fire({
        title: 'Está seguro de eliminar la cancion?',
        text: "Tenga en cuenta que no puede revertir este paso",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            let vectorCancionesNuevo = listaUsuarios[indiceUsuario].canciones.filter((cancion)=>{ return cancion.codigo != codigo; });
            listaUsuarios[indiceUsuario].canciones = vectorCancionesNuevo;
            guardarMiListaCanciones();
            actualizarTablaMisCanciones();
            Swal.fire(
                'Cancion eliminada!',
                'La cancion fue eliminada.',
                'success'
            )
        }
    })
}


function guardarMiListaCanciones()
{
    localStorage.setItem('vectorUsuariosKey', JSON.stringify(listaUsuarios))   
}

function actualizarTablaMisCanciones()
{
    tablaMiListaCanciones.innerHTML = "";
    cargarMisCanciones();
}

function cargarMisCanciones()
{
    if (listaUsuarios[indiceUsuario].canciones.length  > 0)
    {
      listaUsuarios[indiceUsuario].canciones.forEach((item)=>{
            crearMiLista(item)
        })
    }
}
formLogin.addEventListener("submit", login);
