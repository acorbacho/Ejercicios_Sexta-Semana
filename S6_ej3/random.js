/**
 * Función que genera un número aleatorio.
 * @returns {number} - Devuelve el número.
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}