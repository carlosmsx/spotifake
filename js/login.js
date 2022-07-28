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
    let vectorUsuarios = JSON.parse(localStorage.getItem("vectorUsuariosKey"));
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

export function cambioNav() {
  let listaNav = document.getElementById("listaNav");
  let usuarioActivo = localStorage.getItem("usuarioActivoKey") || null;
  console.log("desde cambio nav " + usuarioActivo);
  console.log(!usuarioActivo);
  if (!usuarioActivo) {
    console.log("hola");
    listaNav.innerHTML = `
    <li class="nav-item">
                <a
                  class="nav-link navLista active"
                  aria-current="page"
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
                  Descubrí
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
                    data-bs-target="#modalLogin">Iniciar sesión</a></li>
              `;
  } else {
    console.log("chau");
    listaNav.innerHTML = `
   <li class="nav-item">
                <a class="nav-link navLista" href="/pages/listaReproduccion.html"
                  >Mis canciones</a
                >
              </li>
  <li class="nav-item">
  
                <a
                  class="nav-link navLista active"
                  aria-current="page"
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
                  Descubrí
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navLista" href="/pages/acercade.html"
                  >Acerca de</a
                >
              </li>
              
              <li class="nav-item">
                <a class="nav-link navLista" onclick="cerrarSesion()">Cerrar sesión</a></li>
              </li>`;
  }
}

export function cerrarSesion() {
  console.log("cerrar");
  localStorage.removeItem("usuarioActivoKey");
  window.location = "/index.html";
}
