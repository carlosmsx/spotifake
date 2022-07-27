
let dataTest = `[{"codigo":"1658257375872","titulo":"Vengas Cuando Vengas","artista":"El Kanka, Carmen Boza","categoria":"rock","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_elKanka.jpg","duracion":"4:37","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_elKanka.ogg"},{"codigo":"1658257645278","titulo":"Paradise","artista":"Coldplay","categoria":"pop","imagen":"https://c2i-spotifake-dev.netlify.app/media/spotifake_coldplay.jpg","duracion":"4:38","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_coldplay.ogg"},{"codigo":"1658257768887","titulo":"Enter Sandman","artista":"Metallica","categoria":"rock","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_metallica.jpg","duracion":"5:31","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_metallica.ogg"},{"codigo":"1658257867591","titulo":"Tu defecto es el mio","artista":"No Te Va Gustar","categoria":"rock","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_notevagustar.jpg","duracion":"3:05","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_notevagustar.ogg"},{"codigo":"1658257976264","titulo":"Quevedo: Bzrp Music Sessions","artista":"Bizarrap, Quevedo","categoria":"salsa","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_quevedo.jpg","duracion":"3:18","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_quevedo.ogg"},{"codigo":"1658258110765","titulo":"Universo Paralelo","artista":"La K'onga, Nahuel Pennisi","categoria":"cumbia","imagen":"https://c2i-spotifake-dev.netlify.app/img/spotifake_laKonga.jpg","duracion":"3:37","cancion":"https://c2i-spotifake-dev.netlify.app/media/spotifake_laKonga.ogg"}]`
let userTest = `[
    {
        "nombre": "Carlos Escobar",
        "usuario": "carlos",
        "email": "carlos@gmail.com",
        "fechaNac": "15/06/1973",
        "sexo": "1",
        "calle": "aconquija",
        "numero": "1000",
        "localidad": "yerba buena",
        "pais": "AR",
        "codigoPostal": "4107",
        "password": "Hola123$",
        "canciones": []
    },
    {
        "nombre": "Valentina Ormaechea",
        "usuario": "vale",
        "email": "valentina@gmail.com",
        "fechaNac": "01/01/2000",
        "sexo": "2",
        "calle": "roca",
        "numero": "222",
        "localidad": "San Miguel de Tucuman",
        "pais": "AR",
        "codigoPostal": "4000",
        "password": "Hola123$",
        "canciones": []
    },
    {
        "nombre": "Nicolas Andrade",
        "usuario": "nico",
        "email": "nico@gmail.com",
        "fechaNac": "02/02/2001",
        "sexo": "1",
        "calle": "MITRE",
        "numero": "3333",
        "localidad": "Perico",
        "pais": "AR",
        "codigoPostal": "4450",
        "password": "Hola123$",
        "canciones": []
    },
    {
        "nombre": "Otto Krautmann",
        "usuario": "otto",
        "email": "otto@spotifake.com",
        "fechaNac": "01/01/1999",
        "sexo": "1",
        "calle": "alem",
        "numero": "500",
        "localidad": "tucuman",
        "pais": "AR",
        "codigoPostal": "4000",
        "password": "hola123$",
        "canciones": []
    },
    {
        "nombre": "Emilse Arias",
        "usuario": "emilse",
        "email": "emilse@rollingcode.com",
        "fechaNac": "01/01/1990",
        "sexo": "2",
        "calle": "veinticuatro de sept",
        "numero": "400",
        "localidad": "tucuman",
        "pais": "AR",
        "codigoPostal": "4000",
        "password": "Hola123$",
        "canciones": []
    }
]`

let boton = document.getElementById("boton")
let reproduciendo = false;
let music = new Audio('https://c2i-spotifake-dev.netlify.app/media/spotifake_metallica.ogg');

music.addEventListener("ended",()=>{
    boton.innerHTML = `<i class="bi bi-play-circle"></i>`
    music.pause();
    reproduciendo = false;
})

function playMusic(){
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

function recargarCanciones()
{
    localStorage.setItem('vectorCancionesKey', dataTest)   
    alert("Se cargaron las canciones de prueba")
}

function recargarUsuarios()
{
    localStorage.setItem('vectorUsuariosKey', userTest)   
    alert("Se cargaron los usuarios de prueba")
}

