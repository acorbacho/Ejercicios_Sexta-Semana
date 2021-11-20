/**
 * Función 'main' de creación de array con datos generados al azar.
 */
function main() {
    /**
     * Variable que recibe la cantidad de datos del array.
     * @type {number}
     */
    var cantidad_datos = parseInt(entrada("Escribe cuantos datos quieres incluir en el vector."), 10)
    /**
     * Variable que recibe el valor mínimo.
     * @type {number}
     */
    var minimo = parseInt(entrada("Escribe el valor mínimo de los números a elegir al azar."), 10)
    /**
     * Variable que recibe el valor máximo.
     * @type {number}
     */
    var maximo = parseInt(entrada("Escribe el valor máximo de los números a elegir al azar."), 10)
    /**
     * Variable de almacenamiento del array.
     * @type {Array}
     */
    var array_creado = crear_array(cantidad_datos, minimo, maximo)
    salida(array_creado)
}
main()