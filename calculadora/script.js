//esta funcion se encarga de mostrar los numeros en pantalla
function agregar(valor) {
    document.getElementById('pantalla').value += valor
}
//borra todo los datos de pantalla
function borrar() {
    document.getElementById('pantalla').value = ''
}
//calcula todas las operaciones 
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}