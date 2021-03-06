let inputUsuario = document.getElementById("inputUsuario");
let formLogin = document.getElementById("formLogin");
let claveLogin = document.getElementById("claveLogin");
let usuarioLogin = document.getElementById("usuarioLogin");

class UsuarioLogin {
  constructor(usuarioLogin, claveLogin) {
    this.usuario = usuarioLogin;
    this.clave = claveLogin;
  }
}

formLogin.addEventListener("submit", login);

export function login(e) {
  let inputClave = document.getElementById("inputClave");
  e.preventDefault();
  let usuarioIngresado = new UsuarioLogin(inputUsuario.value, inputClave.value);

  if (inputUsuario.value == "administrador") {
    if (inputClave.value == "administrador") {
      // localStorage.setItem("usuarioActivoKey", "admin");
      // cambioNav();
      window.location = "/pages/administracion.html";
    } else {
      contrase├▒aIncorrecta();
    }
  } else {
    let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey"));

    let usuarioEncontrado = vectorUsuarios.find((item) => {
      return inputUsuario.value == item.usuario;
    });

    if (usuarioEncontrado != undefined) {
      usuarioLogin.innerHTML = ``;
      if (inputClave.value == usuarioEncontrado.password) {
        window.location = "/index.html";
        localStorage.setItem("usuarioActivoKey", usuarioEncontrado.email);
        cambioNav();
      } else {
        contrase├▒aIncorrecta();
      }
    } else {
      usuarioNoRegistrado();
    }
  }
}

function contrase├▒aIncorrecta() {
  claveLogin.innerHTML = `<p class="text-danger text-sm">Clave incorrecta</p>`;
}

function usuarioNoRegistrado() {
  usuarioLogin.innerHTML = `<p class="text-danger text-sm">Usuario no encontrado</p>`;
}

export function cambioNav() {
  let listaNav = document.getElementById("listaNav");
  let usuarioActivo = localStorage.getItem("usuarioActivoKey") || null;

  if (!usuarioActivo) {
    listaNav.innerHTML = `
    <li class="nav-item">
                <a
                  class="nav-link navLista"
                  href="/index.html"
                  >Inicio</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navLista"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExplorar"
                  role="button"
                  aria-controls="offcanvasExplorar"
                >
                  Descubr├ş
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="/pages/acercade.html"
                  >Acerca de</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="/pages/registro.html"
                  >Registro</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" data-bs-toggle="modal"
                    data-bs-target="#modalLogin">Iniciar sesi├│n</a></li>
              `;
  } else {
    let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey"));
    let usuarioEncontrado = vectorUsuarios.find((item) => {
      return usuarioActivo == item.email;
    });
    listaNav.innerHTML = `
    <li class="nav-item me-auto">
    <a
      class="nav-link navLista disabled text-light"
      href="#"
      >Hola, ${usuarioEncontrado.nombre} </a
    >
    </li>
              <li class="nav-item">
              <a class="nav-link navLista me-0" href="/pages/listaReproduccion.html"
                  >Mis canciones</a
              >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navLista"
                  href="/index.html"
                  >Inicio</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link navLista"
                  data-bs-toggle="offcanvas"
                  href="#offcanvasExplorar"
                  role="button"
                  aria-controls="offcanvasExplorar"
                >
                  Descubr├ş
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="/pages/acercade.html"
                  >Acerca de</a
                >
              </li>
              
              <li class="nav-item">
                <a class="nav-link navLista" onclick="cerrarSesion()">Cerrar sesi├│n</a></li>
              </li>`;
  }
}

export function cerrarSesion() {
  localStorage.removeItem("usuarioActivoKey");
  window.location = "/index.html";
}
