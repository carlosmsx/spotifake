
let dataTest = `[{"codigo":"1658257375872","titulo":"Vengas Cuando Vengas","artista":"El Kanka, Carmen Boza","categoria":"rock","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_elKanka.jpg","duracion":"4:37","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_elKanka.ogg"},{"codigo":"1658257645278","titulo":"Paradise","artista":"Coldplay","categoria":"pop","imagen":"https://c2i-spotifake-dev.netlify.app/media/spotifake_coldplay.jpg","duracion":"4:38","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_coldplay.ogg"},{"codigo":"1658257768887","titulo":"Enter Sandman","artista":"Metallica","categoria":"rock","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_metallica.jpg","duracion":"5:31","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_metallica.ogg"},{"codigo":"1658257867591","titulo":"Tu defecto es el mio","artista":"No Te Va Gustar","categoria":"rock","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_notevagustar.jpg","duracion":"3:05","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_notevagustar.ogg"},{"codigo":"1658257976264","titulo":"Quevedo: Bzrp Music Sessions","artista":"Bizarrap, Quevedo","categoria":"salsa","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_quevedo.jpg","duracion":"3:18","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_quevedo.ogg"},{"codigo":"1658258110765","titulo":"Universo Paralelo","artista":"La K'onga, Nahuel Pennisi","categoria":"cumbia","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_laKonga.jpg","duracion":"3:37","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_laKonga.ogg"}]`

let boton = document.getElementById("boton")
let repro = false;
let music = new Audio('https://c2i-spotifake-dev.netlify.app/media/spotifake_metallica.ogg');

music.addEventListener("ended",()=>{
    boton.innerHTML = `<i class="bi bi-play-circle"></i>`
    music.pause();
    repro = false;
})

function playMusic(){
    if (repro)
    {
        boton.innerHTML = `<i class="bi bi-play-circle"></i>`
        music.pause();
        repro = false;
    }
    else
    {
        boton.innerHTML = `<i class="bi bi-stop-circle"></i>`
        music.play();
        repro = true;
    }
}

function recargarDatos()
{
    localStorage.setItem('vectorCancionesKey', dataTest)   
    alert("Se cargaron los datos de prueba")
}