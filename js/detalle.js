function crearDetalle(cancion) {
  let detalleCancion = document.getElementById("tarjetaDetalle");
  detalleCancion.innerHTML += `
    <div class="col-4 p-0">
            <img
              src="${cancion.imagen}"
              alt="Imagen cancion"
              class="imgDetalle"
            />
          </div>
          <div class="col-8 my-3">
            <div>
              <span class="badge bg-secondary">${cancion.codigo}</span>
              <h3 class="my-2">${cancion.titulo}</h3>
              <h5>{${cancion.artista}</h5>
              <hr />
            </div>
            <div>
              <span class="badge rounded-pill text-bg-info">${cancion.categoria}</span>
              <p class="my-2">Duración: ${cancion.duracion}</p>
              ${cancion.cancion}
            </div>
          </div>`;
}
