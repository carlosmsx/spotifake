//desde aqui nico
let tablaMiListaCanciones = document.getElementById("tablaMiListaCanciones");
const parametro = window.location.search;
const urlParam = new URLSearchParams(parametro);

let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
let cancionAgregada = listaCanciones.find((cancion) => {
  return cancion.codigo == urlParam.get("codigo");
});
console.log(cancionAgregada);
let listaUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey")) || [];
let usuarioActivo = listaUsuarios.find((usuario) => {
  return usuario.email == "nico@gmail.com"; // estoy hay que modificarlo con el usuario logeado mas adelante
});
console.log (usuarioActivo);


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
      <button class="btn btnEditar" onclick="modificarCancion('${cancion.codigo}')"><i class="bi bi-pencil-square"></i></button>
      <button class="btn btnBorrar" onclick="borrarCancion('${cancion.codigo}')"><i class="bi bi-x-square"></i></button>
  </td>
  </tr>`

  tablaMiListaCanciones.innerHTML += newRow;
}
// fin nico