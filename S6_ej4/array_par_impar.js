/**
 * Esta función separa los valores pares y pares de un array, en otros dos arrays diferentes. Devuelve los 3 array con un mensaje.
 * @param {Array} array - El array a bifurcar.
 */
function array_par_impar(array) {
    /**
     * Variable que almacena el array recibido por parámetro.
     * @type {Array}
     */
    var array_recibido = array
    /**
     * Variable que almacena el array par generado.
     * @type {Array}
     */
    var nuevo_array_par = []
    /**
     * Variable que almacena el array impar generado.
     * @type {Array}
     */
    var nuevo_array_impar = []

    for (num of array_recibido) {
        if (num % 2 === 0) {
            nuevo_array_par.push(num)
        } else {
            nuevo_array_impar.push(num)
        }
    }
    salida("ARRAY: " + array_recibido)
    salida("ARRAY PARES: " + nuevo_array_par)
    salida("ARRAY IMPARES: " + nuevo_array_impar)
}