export class Cancion
{
    constructor(codigo, titulo, artista, categoria, imagen, duracion, cancion)
    {
        this.codigo = codigo; 
        this.titulo = titulo; 
        this.artista = artista; 
        this.categoria = categoria; 
        this.imagen = imagen; 
        this.duracion = duracion; 
        this.cancion = cancion; 
        
    }
    
    get getCodigo() { return this.codigo; }
    get getTitulo() { return this.titulo; }
    get getArtista() { return this.artista; }
    get getCategoria() { return this.categoria; }
    get getImgen() { return this.imagen; }
    get getDuracion() { return this.duracion; }
    get getCancion() { return this.cancion; }
   
    set setCodigo(value) { this.codigo = value; }
    set setTitulo(value) { this.titulo = value; }
    set setArtista(value) { this.artista = value; }
    set setCategoria(value) { this.categoria = value; }
    set setImagen(value) { this.imagen = value; }
    set setDuracion(value) { this.duracion = value; }
    set setCancion(value) { this.cancion = value; }
}
