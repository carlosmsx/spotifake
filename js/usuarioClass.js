export class Usuario
{
    constructor(nombre, usuario, email, fechaNac, sexo, calle, numero, localidad, pais, codigoPostal, password)
    {
        this.nombre = nombre;
        this.usuario = usuario;
        this.email = email;
        this.fechaNac = fechaNac;
        this.sexo = sexo;
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.pais = pais;
        this.codigoPostal = codigoPostal;
        this.password = password;
        this.canciones = [];
    }
    
    /****** propiedades *******/
    //getters
    get getNombre() { return this.nombre; }
    //usuario
    get getEmail() { return this.email; }
    get getFechaNac() { return this.fechaNac; }
    get getSexo() { return this.sexo; }
    get getCalle() { return this.calle; }
    get getNumero() { return this.numero; }
    get getLocalidad() { return this.localidad; }
    get getPais() { return this.pais; }
    get getcodigoPostal() { return this.codigoPostal; }
    get getPassword() { return this.password; }
    get getCanciones() { return this.canciones; }
    //setters
    set setNombre(value) { this.nombre = value; }
    //usuario
    set setEmail(value) { this.email = value; }
    set setFechaNac(value) { this.fechaNac = value; }
    set setSexo(value) { this.sexo = value; }
    set setCalle(value) { this.calle = value; }
    set setNumero(value) { this.numero = value; }
    set setLocalidad(value) { this.localidad = value; }
    set setPais(value) { this.pais = value; }
    set setcodigoPostal(value) { this.codigoPostal = value; }
    set setPassword(value) { this.password = value; }
    set setCanciones(value) { this.canciones = value; }
}
