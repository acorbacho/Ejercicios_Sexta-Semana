/**
 * 
 * @param {number} longitud - Longitud de la sucesión.
 * @returns {Array} - Sucesión de Fibonacci.
 */
function fibonacci(longitud) {
    /**
     * Variable que almacena la longitud del array de la sucesión de Fibonacci.
     * @type {number}
     */
    var longAux = longitud
    /**
     * Variable que almacena el array de la sucesión de Fibonacci.
     * @type {Array}
     */
    var array_fibo = [0, 1]

    for (i = 2; i < longAux; i++) {
        array_fibo[i] = array_fibo[i - 1] + array_fibo[i - 2]
    }
    return array_fibo
}