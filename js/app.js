import { login, cambioNav, cerrarSesion } from "./login.js";

let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
cargaTarjetas();
const formLogin = document.getElementById("formLogin");

function cargaTarjetas() {
  listaCanciones.forEach((cancion) => {
    crearTarjeta(cancion);
  });
}

cambioNav();


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
                        <div class="card-img-overlay">
                        <div class="row pt-85px">
                          <div class=' d-flex  justify-content-end 'onclick="verDetalle(${cancion.codigo})"> 
                            <i class="bi bi-play-circle-fill color-btn-AgregaCancion fs-1"></i>
                            </i>
                          </div>
                          <div class='pt-40px d-flex  justify-content-end' onclick="agregarCancion('${cancion.codigo}')"> 
                            <i class="bi bi-plus-square-fill color-btn-AgregaCancion fs-3"></i>
                          </div>
                         </div>
                      </div>
                      <div class="card-body">
                         <p class="card-text">${cancion.titulo}</p>

                        <!-- boton seleccion -->
                        
                        </div>
                     </div>
                  </div>`;
}
//
window.agregarCancion = (codigo) => {
  
  window.location.href =
    window.location.origin + `/pages/listaReproduccion.html?codigo=${codigo}`;
};

//
window.verDetalle = (codigo) => {
  
  window.location.href =
    window.location.origin + `/pages/detalle.html?codigo=${codigo}`;
};

window.cerrarSesion = () => {
  cerrarSesion();
};

formLogin.addEventListener("submit", login);
