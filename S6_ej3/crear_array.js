/**
 * Función que crea un array según unos parámetros.
 * @param {number} cantidad_datos - Datos del array.
 * @param {number} minimo - Valor mínimo de los números generados.
 * @param {number} maximo -Valor máximo de los números generados.
 * @returns {Array} - Devuelve el array generado.
 */
function crear_array(cantidad_datos, minimo, maximo) {
    /**
     * Variable que recibe la cantidad de datos del array.
     * @type {number}
     */
    var cantidad_datosAux = cantidad_datos
    /**
     * Variable que recibe el valor mínimo.
     * @type {number}
     */
    var minimoAux = minimo
    /**
     * Variable que recibe el valor máximo.
     * @type {number}
     */
    var maximoAux = maximo
    /**
     * Variable que guarda el array.
     * @type {Array}
     */
    var array = []

    for (i = 0; i < cantidad_datosAux; i++) {
        array[i] = random(minimoAux, maximoAux)
    }
    return array
}