document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".articulo").forEach(cancion =>{
  
            cancion.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?cancion.classList.remove("filtro")
              :cancion.classList.add("filtro")
        })
  
    }
  })