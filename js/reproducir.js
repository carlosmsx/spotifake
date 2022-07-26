let boton = {};
let reproduciendo = false;
let music = {};


export function playInit(botonId, urlCancion)
{
  boton = document.getElementById(botonId)
  reproduciendo = false;
  music = new Audio(urlCancion);
  music.addEventListener("ended",()=>{
    boton.innerHTML = `<i class="bi bi-play-circle"></i>`
    music.pause();
    reproduciendo = false;
  })
}

export function playMusic()
{
    if (reproduciendo)
    {
        boton.innerHTML = `<i class="bi bi-play-circle"></i>`
        music.pause();
        music.currentTime = 0; //vuelve al principio la reproduccion
        reproduciendo = false;
    }
    else
    {
        boton.innerHTML = `<i class="bi bi-stop-circle"></i>`
        music.play();
        reproduciendo = true;
    }
}
