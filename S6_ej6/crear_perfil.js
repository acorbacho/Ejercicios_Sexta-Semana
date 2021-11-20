/**
 * Función que recoje los nombres de los atributos.
 * @param {string} nombre_introducido - Nombre
 * @param {string} apellidos_introducido - Apellidos
 * @param {string} direccion_introducido - Dirección
 * @param {string} telefono_introducido - Teléfono
 * @param {string} email_introducido - Email
 * @returns {object} - Perfil
 */
function crear_perfil(nombre_introducido, apellidos_introducido, direccion_introducido, telefono_introducido, email_introducido) {
    /**
     * Alacena el parámetro nombre_introducido.
     * @type {string}
     */
    var nombre_usuario = nombre_introducido
    /**
     * Alacena el parámetro apellidos_introducido.
     * @type {string}
     */
    var apellidos_usuario = apellidos_introducido
    /**
     * Alacena el parámetro direccion_introducido.
     * @type {string}
     */
    var direccion_usuario = direccion_introducido
    /**
     * Alacena el parámetro telefono_introducido.
     * @type {string}
     */
    var telefono_usuario = telefono_introducido
    /**
     * Alacena el parámetro email_introducido.
     * @type {string}
     */
    var email_usuario = email_introducido
    /**
     * Función de creación de objeto 'Perfil'.
     * @param {string} nombre - Nombre
     * @param {string} apellidos - Apellidos
     * @param {string} direccion - Dirección
     * @param {string} telefono - Teléfono
     * @param {string} email - Email
     */

    var Perfil = function (nombre, apellidos, direccion, telefono, email) {
        this.nombre = nombre
        this.apellidos = apellidos
        this.direccion = direccion
        this.telefono = telefono
        this.email = email
    }
    /**
     * Almacena el perfil.
     * @type {object}
     */
    perfil = new Perfil(nombre_usuario, apellidos_usuario, direccion_usuario, telefono_usuario, email_usuario)
    return perfil
}