function setup() {
  createCanvas(400, 400)
}


function draw() {
  
  background(120)
  dibujo()
  
}


//FUNCION:
function dibujo() {

  push()
  rect(100, 100, 100, 100)
  text(devolverTexto(), 100, 100)
  text(devolverUnValor( mouseX, mouseY), mouseX, mouseY)
  pop()

}

//FUNCION QUE RETORNA UN VALOR:
//DE TIPO STRING:
let devolverTexto = () => { 

  return mouseX+", "+mouseY

}


//let devolverTexto = function() {
// return mouseX+", "+mouseY;
//}


//FUNCION DE TIPO FLECHA QUE DEVUELVE UN VALOR Y TAMBIEN ACEPTA PARAMETROS
//DECLARAMOS EL TIPO //ELEGIMOS PARAMETROS PARA COMPARAR
let devolverUnValor = (x, y) => {

  //SIEMPRE DEVOLVEMOS UN VALOR, EN ESTE CASO verdadero y falso
  if (x <= y) {
    return  false
  } else {
    return true
  }

}
