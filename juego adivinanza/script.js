// Generar un número aleatorio entre 1 y 100
let numeroAzar = Math.floor(Math.random() * 5) + 1;

// Obtener los elementos del DOM
let valor = document.getElementById('entrada');
let avisos = document.getElementById('aviso');
let contador = document.getElementById('contador');
let cuentajs = 0;

function comprobar() {
    cuentajs++;
    contador.textContent = (cuentajs)
    let intvalor = parseInt(valor.value);
    if (isNaN(intvalor) || intvalor > 5 || intvalor < 1) {
        avisos.textContent = 'por favor introdusca un valor que este en este rango 1-5';
        avisos.style.color = 'red'
        return
    }

    if (intvalor === numeroAzar) {
        avisos.textContent = 'eres un tigre lo atinaste bien eh lo logrante en el intento:' + cuentajs;
        valor.disabled = true;

        avisos.style.color = 'blue';
        return
    }

    else if (intvalor > numeroAzar) {
        avisos.textContent = 'el numero es mas bajo '

    }
    else {
        avisos.textContent = 'el numero es mas alto'

    }

}
function empezar() {
    location.reload();
}

