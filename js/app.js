let listaCanciones =
  JSON.parse(localStorage.getItem("vectorCancionesKey")) || [];
cargaTarjetas();
// Si hay datos dibujar las cards

function cargaTarjetas() {
  listaCanciones.forEach((cancion) => {
    crearTarjeta(cancion);
  });
}

function crearTarjeta(cancion) {
  let seccionCanciones = document.getElementById("seccionCanciones");
  seccionCanciones.innerHTML += `
  <div class="col-6 col-md-3 col-lg-2 py-3" onclick="verDetalle(${cancion.codigo})">
                  <div class="card h-100 cardsEfect">
                    <img
                      src="${cancion.imagen}"
                      class="card-img-top"
                      alt="img-cancion"
                    />
                    <div class="card-body">
                      <p class="card-text">${cancion.titulo}</p>
                    </div>
                  </div>
              </div>`;
}

window.verDetalle = (codigo) => {
  console.log(codigo);
  console.log(window.location.origin + `/pages/detalle.html`);
  window.location.href =
    window.location.origin + `/pages/detalle.html?codigo=${codigo}`;
};
