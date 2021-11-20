/**
 * Función 'main' de creación de array con datos generados al azar y ordenados de mayor a menor.
 */
function main() {
    /**
     * Variable que recibe la cantidad de datos del array.
     * @type {number}
     */
    var cantidad_datos = 10
    /**
     * Variable que recibe el valor mínimo.
     * @type {number}
     */
    var minimo = 1
    /**
     * Variable que recibe el valor máximo.
     * @type {number}
     */
    var maximo = 100
    /**
     * Variable de almacenamiento del array.
     * @type {Array}
     */
    var array_creado = crear_array(cantidad_datos, minimo, maximo)
    /**
     * Variable de almacenamiento del array ordenado.
     * @type {Array}
     */
    var array_ordenado = crear_array_ordenado(array_creado)
    salida(array_ordenado)
}
main()