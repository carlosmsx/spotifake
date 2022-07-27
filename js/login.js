import { Usuario } from "./usuarioClass.js";

let inputUsuario = document.getElementById("inputUsuario");
let formLogin = document.getElementById("formLogin");
let claveLogin = document.getElementById("claveLogin");
let usuarioLogin = document.getElementById("usuarioLogin");
let vectorUsuarios =
  JSON.parse(localStorage.getItem("vectorUsuariosKey")) || []; //se usa el operador OR para cuando el primer valor sea nulo use el segundo valor

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
  console.log(usuarioIngresado);
  console.log(inputClave.value);
  if (inputUsuario.value == "administrador") {
    if (inputClave.value == "administrador") {
      // insertar pagina del admin
      window.location = "/pages/administracion.html";
    } else {
      contraseñaIncorrecta();
      // alert("clave incorrecta");
    }
  } else {
    console.log(vectorUsuarios);
    let usuarioEncontrado = vectorUsuarios.find((item) => {
      return inputUsuario.value == item.usuario;
    });
    console.log(usuarioEncontrado);
    if (usuarioEncontrado != undefined) {
      usuarioLogin.innerHTML = ``;
      if (inputClave.value == usuarioEncontrado.password) {
        // insertar pagina del usuario
        window.location = "/index.html";
        localStorage.setItem("usuarioActivoKey", usuarioEncontrado.email);
        usuarioActivo =
          JSON.parse(localStorage.getItem("usuarioActivoKey")) || [];
        cambioNav();
        console.log();
      } else {
        contraseñaIncorrecta();
        // alert("clave incorrecta");
      }
    } else {
      usuarioNoRegistrado();
    }
  }
}

function contraseñaIncorrecta() {
  // e.preventDefault()
  claveLogin.innerHTML = `<p class="text-danger text-sm">Clave incorrecta</p>`;
}

function usuarioNoRegistrado() {
  usuarioLogin.innerHTML = `<p class="text-danger text-sm">Usuario no encontrado</p>`;
}

export function cambioNav(usuarioActivo) {
  let listaNav = document.getElementById("listaNav");
  console.log("desde cambio nav" + usuarioActivo);
  if ((usuarioActivo = null)) {
    listaNav.innerHTML = `
    <li class="nav-item">
                <a
                  class="nav-link navLista active"
                  aria-current="page"
                  href="index.html"
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
                  Descubrí
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="pages/acercade.html"
                  >Acerca de</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="pages/registro.html"
                  >Registro</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" data-bs-toggle="modal"
                    data-bs-target="#modalLogin">Iniciar sesión</a></li>
              `;
  } else {
    listaNav.innerHTML = `
  <li class="nav-item">
                <a
                  class="nav-link navLista active"
                  aria-current="page"
                  href="index.html"
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
                  Descubrí
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="pages/acercade.html"
                  >Acerca de</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link navLista">Cerrar sesión</a></li>
              </li>`;
  }
}
