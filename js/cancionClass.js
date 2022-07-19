export class Cancion
{
    constructor(codigo, titulo, artista, categoria, imagen, duracion, cancion)
    {
        this.codigo = codigo; //Código único.
        this.titulo = titulo; //Título
        this.artista = artista; //Artista o grupo
        this.categoria = categoria; //Categoría
        this.imagen = imagen; //Imagen (álbum o alguna imagen decorativa de la canción) cargada con url
        this.duracion = duracion; //duración de la canción
        this.cancion = cancion; //canción
        //NOTA: Pueden agregar más propiedades si lo consideran necesario.
    }
    /****** propiedades *******/
    //getters
    get getCodigo() { return this.codigo; }
    get getTitulo() { return this.titulo; }
    get getArtista() { return this.artista; }
    get getCategoria() { return this.categoria; }
    get getImgen() { return this.imagen; }
    get getDuracion() { return this.duracion; }
    get getCancion() { return this.cancion; }
    //setters
    set setCodigo(value) { this.codigo = value; }
    set setTitulo(value) { this.titulo = value; }
    set setArtista(value) { this.artista = value; }
    set setCategoria(value) { this.categoria = value; }
    set setImagen(value) { this.imagen = value; }
    set setDuracion(value) { this.duracion = value; }
    set setCancion(value) { this.cancion = value; }
}
