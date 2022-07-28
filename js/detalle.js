import { playInit, playMusic } from "./reproducir.js";
import { login, cambioNav, cerrarSesion } from "./login.js";

const parametro = window.location.search;
const urlParam = new URLSearchParams(parametro);

let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
let cancionBuscada = listaCanciones.find((cancion) => {
  return cancion.codigo == urlParam.get("codigo");
});
let formLogin = document.getElementById("formLogin");
let detalleCancion = document.getElementById("tarjetaDetalle");

cambioNav();

detalleCancion.innerHTML = `
<nav aria-label="breadcrumb" id="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../index.html">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Detalle "${cancionBuscada.titulo}"</li>
          </ol>
        </nav>
        <article class="row rounded-3">
          <div class="col-12 col-md-4 p-0">
          <div class="card bg-dark ">
            <img
              src="${cancionBuscada.imagen}"
              alt=""
              class="imgDetalle"
            />
            </div>
          </div>
          <div class="col-12 col-md-8">
            <div>
              <span class="badge bg-secondary">ID ${cancionBuscada.codigo}</span>
              <h3 class="my-2">${cancionBuscada.titulo}</h3>
              <h6>${cancionBuscada.artista}</h6>
              <hr />
            </div>
            <div>
              <span class="badge rounded-pill text-bg-info">${cancionBuscada.categoria}</span>
              <p class="my-2">Duración: ${cancionBuscada.duracion} minutos</p>
              <button id="botonReproducir" onclick="set('${cancionBuscada.cancion}')" class="btn"><i class="bi bi-play-circle"></i></i></button>
            </div>
          </div>
        </article>`;

playInit("botonReproducir", cancionBuscada.cancion);

window.set = function (cancion) {
  playMusic();
};

window.cerrarSesion = () => {
  cerrarSesion();
};

formLogin.addEventListener("submit", login);
