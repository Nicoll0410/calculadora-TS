"use strict";
// Agrega a la pantalla el valor del botón que le pongamos
function agregar(valor) {
    const pantalla = document.getElementById('pantalla');
    if (pantalla) {
        pantalla.value += valor;
    }
}
function borrar() {
    const pantalla = document.getElementById('pantalla');
    if (pantalla) {
        pantalla.value = '';
    }
}
function calcular() {
    const pantalla = document.getElementById('pantalla');
    if (pantalla) {
        try {
            const resultado = eval(pantalla.value);
            pantalla.value = resultado;
        }
        catch (e) {
            pantalla.value = 'Error';
        }
    }
}
