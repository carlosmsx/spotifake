export class Usuario
{
    constructor(nombre, email, fechaNac, sexo, calle, numero, localidad, pais, CP, password)
    {
        this.nombre = nombre;
        this.email = email;
        this.fechaNac = fechaNac;
        this.sexo = sexo;
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.pais = pais;
        this.CP = CP;
        this.password = password;
    }
    
    /****** propiedades *******/
    //getters
    get getNombre() { return this.nombre; }
    get getEmail() { return this.email; }
    get getFechaNac() { return this.fechaNac; }
    get getSexo() { return this.sexo; }
    get getCalle() { return this.calle; }
    get getNumero() { return this.numero; }
    get getLocalidad() { return this.localidad; }
    get getPais() { return this.pais; }
    get getCP() { return this.CP; }
    get getPassword() { return this.password; }
    //setters
    set setCodigo(value) { this.codigo = value; }
    set setNombre(value) { this.nombre = value; }
    set setEmail(value) { this.email = value; }
    set setFechaNac(value) { this.fechaNac = value; }
    set setSexo(value) { this.sexo = value; }
    set setCalle(value) { this.calle = value; }
    set setNumero(value) { this.numero = value; }
    set setLocalidad(value) { this.localidad = value; }
    set setPais(value) { this.pais = value; }
    set setCP(value) { this.CP = value; }
    set setPassword(value) { this.password = value; }
}
