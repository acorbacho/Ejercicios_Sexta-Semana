/**
 * Función 'main' del programa de creación de sucesiones de Fibonacci.
 */
function main() {
    /**
     * Longitud del array.
     * @type {number}
     */
    var longitud_array = 20
    /**
     * Array que guarda la sucesión.
     * @type {Array}
     */
    var array = fibonacci(longitud_array)
    salida(array)
}
main()