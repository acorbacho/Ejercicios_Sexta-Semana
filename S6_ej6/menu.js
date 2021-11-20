/**
 * Menú de agenda personal multifuncional.
 */
function menu() {
    /**
     * Guarda la selección del usuario.
     * @type {*}
     */
    var comando
    /**
     * Guarda los objetos-perfil.
     * @type {Array}
     */
    var perfiles = []
    /**
     * Nombre.
     * @type {string}
     */
    var nombre
    /**
     * Apellidos.
     * @type {string}
     */
    var apellidos
    /**
     * Dirección.
     * @type {string}
     */
    var direccion
    /**
     * Teléfono.
     * @type {string}
     */
    var telefono
    /**
     * Email.
     * @type {string}
     */
    var email
    /**
     * Almacena el índice del perfil que el usuario quiere buscar.
     * @type {number}
     */
    var indice
    /**
     * Almacena el nombre del perfil con el que el usuario quiere operar.
     * @type {string}
     */
    var nombre_perfil
    /**
     * Almacena el subcomando de los submenús.
     * @type {number}
     */
    var subcomando
    /**
     * Almacena el perfil modificado.
     * @type {object}
     */
    var perfil_modificado
    /**
     * Variable booleana que comprueba si se ha encontrado el nombre de usuario.
     * @type {boolean}
     */
    var comprobador


    while (comando != 6) {
        comando = entrada('Selecciona un número según lo que deseas hacer:\n 1-Crear un perfil de usario.\n 2-Borrar un perfil de usuario.\n 3-Modificar un perfil de usuario.\n 4-Mostrar un perfil de usuario.\n 5-Mostrar todos los perfiles de usuario existentes.\n 6-Salir.')
        parseInt(comando, 10)

        if (comando == 1) {

            if (perfiles.length < 5) {
                nombre = entrada('Introduce un nombre.')
                apellidos = entrada('Introduce apellidos.')
                direccion = entrada('Introduce una direccion.')
                telefono = entrada('Introduce un número de teléfono.')
                email = entrada('Introduce un correo electrónico.')
                /**
                 * Almacena el perfil de usuario.
                 * @type {object}
                 */
                var perfil_creado = crear_perfil(nombre, apellidos, direccion, telefono, email)
                perfiles.push(perfil_creado)

            } else {
                salida('Memoria llena, borre perfiles.')
            }

        } else if (comando == 2) {
            subcomando = entrada('Selecciona un número según lo que deseas hacer:\n 1-Borrar según el índice.\n 2-Borrar según el nombre de usuario.')

            if (subcomando == 1) {
                indice = entrada('Introduce el número índice del perfil que quieres borrar.')

                if (perfiles[indice]) {
                    perfiles.splice(indice, 1)
                    salida('Perfil borrado.')
                } else {
                    salida('No encontrado.')
                }

            } else if (subcomando == 2) {
                nombre_perfil = entrada('Introduce el nombre del perfil que deseas borrar.')
                comprobador = false

                for (i = 0; i < perfiles.length; i++) {

                    if (perfiles[i].nombre == nombre_perfil) {
                        perfiles.splice(i, 1)
                        salida('Perfil borrado.')
                        comprobador = true
                    }
                }

                if (comprobador == false) {
                    salida('No encontrado.')
                }

            } else {
                salida('No válido.')
            }

        } else if (comando == 3) {
            subcomando = entrada('Selecciona un número según lo que deseas hacer:\n 1-Modificar según el índice.\n 2-Modificar según el nombre de usuario.')

            if (subcomando == 1) {
                indice = entrada('Introduce el número índice del perfil que quieres modificar.')

                if (perfiles[indice]) {
                    nombre = entrada('Introduce un nombre.')
                    apellidos = entrada('Introduce apellidos.')
                    direccion = entrada('Introduce una direccion.')
                    telefono = entrada('Introduce un número de teléfono.')
                    email = entrada('Introduce un correo electrónico.')
                    perfil_modificado = crear_perfil(nombre, apellidos, direccion, telefono, email)
                    perfiles[indice] = perfil_modificado
                    salida('Perfil modificado.')
                } else {
                    salida('No encontrado.')
                }

            } else if (subcomando == 2) {
                nombre_perfil = entrada('Introduce el nombre del perfil que deseas modificar.')
                comprobador = false

                for (i = 0; i < perfiles.length; i++) {

                    if (perfiles[i].nombre == nombre_perfil) {
                        nombre = entrada('Introduce un nombre.')
                        apellidos = entrada('Introduce apellidos.')
                        direccion = entrada('Introduce una direccion.')
                        telefono = entrada('Introduce un número de teléfono.')
                        email = entrada('Introduce un correo electrónico.')
                        perfil_modificado = crear_perfil(nombre, apellidos, direccion, telefono, email)
                        perfiles[i] = perfil_modificado
                        salida('Perfil modificado.')
                        comprobador = true
                    }
                }

                if (comprobador == false) {
                    salida('No encontrado.')
                }

            } else {
                salida('No válido.')
            }

        } else if (comando == 4) {
            subcomando = entrada('Selecciona un número según lo que deseas hacer:\n 1-Mostrar según el índice.\n 2-Mostrar según el nombre de usuario.')

            if (subcomando == 1) {
                indice = entrada('Introduce el número índice del perfil que quieres mostrar.')

                if (perfiles[indice]) {
                    salida('Nombre: ' + perfiles[indice].nombre + '\nApellidos: ' + perfiles[indice].apellidos + '\nDirección: ' + perfiles[indice].direccion + '\nTeléfono: ' + perfiles[indice].telefono + '\nEmail: ' + perfiles[indice].email)
                } else {
                    salida('No encontrado.')
                }

            } else if (subcomando == 2) {
                nombre_perfil = entrada('Introduce el nombre del perfil que deseas mostrar.')
                comprobador = false

                for (i = 0; i < perfiles.length; i++) {

                    if (perfiles[i].nombre == nombre_perfil) {
                        salida('Nombre: ' + perfiles[i].nombre + '\nApellidos: ' + perfiles[i].apellidos + '\nDirección: ' + perfiles[i].direccion + '\nTeléfono: ' + perfiles[i].telefono + '\nEmail: ' + perfiles[i].email)
                        comprobador = true
                    }
                }

                if (comprobador == false) {
                    salida('No encontrado.')
                }
            } else {
                salida('No válido.')
            }

        } else if (comando == 5) {
            /**
             * Contador que almacena el número del perfil para mostrar al usuario.
             * @type {number}
             */
            var contador = 0

            for (perfil of perfiles) {
                salida('[Perfil ' + contador + ']\nNombre: ' + perfil.nombre + '\nApellidos: ' + perfil.apellidos + '\nDirección: ' + perfil.direccion + '\nTeléfono: ' + perfil.telefono + '\nEmail: ' + perfil.email)
                contador++
            }

        } else if (comando == 6) {
            salida('¡Hasta luego!')
        } else {
            salida('No válido.')
        }
    }
}