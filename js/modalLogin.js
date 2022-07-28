import { login, cambioNav, cerrarSesion } from "./login.js";

cambioNav();

window.cerrarSesion = () => {
    cerrarSesion();
  };

formLogin.addEventListener("submit", login);