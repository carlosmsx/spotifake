export function playMusic(music, reproduciendo) {
  let botonReproducir = document.getElementById("botonReproducir");
  music.addEventListener("ended", () => {
    botonReproducir.innerHTML = `<i class="bi bi-play-circle"></i>`;
    music.pause();
  });
  console.log(`reproduciendo ${reproduciendo}` )
  if (reproduciendo) {
    console.log("pause");
    botonReproducir.innerHTML = `<i class="bi bi-play-circle"></i>`;
    music.pause();
    music.currentTime = 0; //vuelve al principio la reproduccion
    console.log(music.currentTime);
    reproduciendo = false;
  } else {
    console.log("play");
    botonReproducir.innerHTML = `<i class="bi bi-stop-circle"></i>`;
    music.play();
    reproduciendo = true;
  }

  return reproduciendo;
}
