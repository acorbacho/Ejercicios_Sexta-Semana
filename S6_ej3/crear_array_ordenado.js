/**
 * Función que crea un array ordenado a partir de otro array.
 * @param {Array} array - Array de entrada.
 * @returns {Array} - Array ordenado.
 */
function crear_array_ordenado(array) {
    /**
     * Guarda el array recibido.
     * @type {Array}
     */
    var array_recibido = array
    /**
     * Guarda el nuevo array ordenado.
     * @type {Array}
     */
    var nuevo_array_ordenado = []
    /**
     * Almacena la logitud del array recibido para que no varíe en el tiempo.
     * @type {Array}
     */
    var longitud_array_recibido = array_recibido.length

    for (i = 0; i < longitud_array_recibido; i++) {
        /**
         * Almacena el valor máximo de los valores que el bucle 'for' de abajo recorre en el 'array_recibido'.
         * @type {(number|null)}
         */
        var maximo = null

        for (num of array_recibido) {
            if (num >= maximo | maximo == null) {
                maximo = num
            }
        }
        nuevo_array_ordenado[i] = maximo
        /**
         * Almacena el índice del valor máximo encontrado.
         * @type {number}
         */
        var indice = array_recibido.indexOf(maximo)
        array_recibido.splice(indice, 1)
    }
    return nuevo_array_ordenado
}