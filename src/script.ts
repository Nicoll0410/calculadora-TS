// Agrega a la pantalla el valor del botón que le pongamos
function agregar(valor: string): void {
    const pantalla = document.getElementById('pantalla') as HTMLInputElement;
    if (pantalla) {
        pantalla.value += valor;
    }
}

function borrar(): void {
    const pantalla = document.getElementById('pantalla') as HTMLInputElement;
    if (pantalla) {
        pantalla.value = '';
    }
}

function calcular(): void {
    const pantalla = document.getElementById('pantalla') as HTMLInputElement;
    if (pantalla) {
        try {
            const resultado = eval(pantalla.value);
            pantalla.value = resultado;
        } catch (e) {
            pantalla.value = 'Error';
        }
    }
}
