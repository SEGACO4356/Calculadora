let texto = document.getElementById("resultado");
let guardado = ""
let resultado = ''
let sumar1 = false
let resta1 = false
let multiplicar1 = false
let division1 = false
function mostrar_numero(numero) {
  document.getElementById("resultado").value += numero
}
function borrar() {
  texto.value = "";
  guardado = ""
}
function suma() {
  guardado = parseInt(texto.value)
  texto.value = ""
  sumar1 = true
}
function resta() {
  guardado = parseInt(texto.value)
  texto.value = ""
  resta1 = true
}
function multiplicar() {
  guardado = parseInt(texto.value)
  texto.value = ""
  multiplicar1 = true
}
function division() {
  guardado = parseInt(texto.value)
  texto.value = ""
  division1 = true
}
function igual() {
  if (sumar1 == true) {
    resultado = parseInt(guardado) + parseInt(texto.value)
    texto.value = resultado
  }
  else if (resta1 == true) {
    resultado = parseInt(guardado) - parseInt(texto.value)
    texto.value = resultado
  }
  else if (multiplicar1 == true) {
    resultado = parseInt(guardado) * parseInt(texto.value)
    texto.value = resultado
  }
 if (division1 == true) {
    resultado = parseFloat(guardado) / parseFloat(texto.value)
    texto.value = resultado
  }

}
