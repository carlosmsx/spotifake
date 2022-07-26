import {login} from "./login.js"

let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
cargaTarjetas();
const formLogin = document.getElementById("formLogin");



// Si hay datos dibujar las cards

function cargaTarjetas() {
  listaCanciones.forEach((cancion) => {
    crearTarjeta(cancion);
  });
}
//onclick="verDetalle(${cancion.codigo})"
function crearTarjeta(cancion) {
  let seccionCanciones = document.getElementById("seccionCanciones");
  seccionCanciones.innerHTML += `
                 <div class="col-6 col-md-3 col-lg-2 py-3 articulo"  >
                    <div class="card h-100 cardsEfect" > 
                       <img
                         src="${cancion.imagen}"
                         class="card-img-top"
                         alt="img-cancion"
                        />
                      <div class="card-body">
                         <p class="card-text">${cancion.titulo}</p>

                        <!-- boton seleccion -->
                        <div class="row ">
                        <div class='col-12 d-flex  justify-content-end'onclick="verDetalle(${cancion.codigo})"> 
                          <i class="bi bi-play-circle-fill color-btn-AgregaCancion fs-1"></i>
                          </i>
                        </div>
                        <div class='col-12 d-flex  justify-content-end' onclick="agregarCancion('${cancion.codigo}')"> 
                        <i class="bi bi-plus-square-fill color-btn-AgregaCancion fs-3">
                        </i> </div>
                        
                   
                      </div>
                    </div>
              </div>`;
}
//
window.agregarCancion = (codigo) => {
  console.log(codigo);
  window.location.href =
  window.location.origin + `/pages/listaReproduccion.html?codigo=${codigo}`;
}

//
window.verDetalle = (codigo) => {
  console.log(codigo);
  console.log(window.location.origin + `/pages/detalle.html`);
  window.location.href =
    window.location.origin + `/pages/detalle.html?codigo=${codigo}`;
};

formLogin.addEventListener("submit", login);