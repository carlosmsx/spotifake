import { playMusic } from "./reproducir.js";

const parametro = window.location.search;
const urlParam = new URLSearchParams(parametro);
let reproduciendo = false;

let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
let cancionBuscada = listaCanciones.find((cancion) => {
  return cancion.codigo == urlParam.get("codigo");
});

let detalleCancion = document.getElementById("tarjetaDetalle");
detalleCancion.innerHTML = `
<nav aria-label="breadcrumb" id="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="../index.html">Inicio</a></li>
            <li class="breadcrumb-item active" aria-current="page">Detalle "${cancionBuscada.titulo}"</li>
          </ol>
        </nav>
        <article class="row bg-dark tarjetaDetalle rounded-3">
          <div class="col-12 col-md-4 p-0">
            <img
              src="${cancionBuscada.imagen}"
              alt=""
              class="imgDetalle"
            />
          </div>
          <div class="col-12 col-md-8 my-3">
            <div>
              <span class="badge bg-secondary">ID ${cancionBuscada.codigo}</span>
              <h3 class="my-2">${cancionBuscada.titulo}</h3>
              <h5>${cancionBuscada.artista}</h5>
              <hr />
            </div>
            <div>
              <span class="badge rounded-pill text-bg-info">${cancionBuscada.categoria}</span>
              <p class="my-2">Duración: ${cancionBuscada.duracion} minutos</p>
              <button id="botonReproducir" onclick="set('${cancionBuscada.cancion}')" class="btn"><i class="bi bi-play-circle"></i></i></button>
            </div>
          </div>
        </article>`;

window.set = function (cancion) {
  let music = new Audio(cancion);
  let reproducir = reproduciendo;
  console.log(`reproducir ${reproducir}`);
  reproduciendo = playMusic(music, reproducir);
};
