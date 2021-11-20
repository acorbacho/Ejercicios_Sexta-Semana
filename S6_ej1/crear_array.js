/**
 * Función que recibe los parámetros y va creando el array.
 */
function crear_array() {
    /**
     * Almacena el valor de entrada.
     * @type {*}
     */
    var valor
    /**
     * Array.
     * @type {Array}
     */
    var array = []
    /**
     * Contador que indica la posición índice del array.
     * @type {number}
     */
    var contador = 0

    while (valor !== 'stop') {
        valor = entrada("Introduce un valor para añadir al array. Escribe 'stop' para parar.")

        if (valor === 'stop') {
            salida("Array: " + array)
        } else {
            array.push(valor)
            salida(`Posición ${contador}: ${array[contador]}`)
            contador++
        }
    }
}