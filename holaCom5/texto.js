//Ejemplo p5JS con fuente personalizada
//ciclo for anidado
//función con parámetros y retorno de valor

//Creo variable para guardar mi fuente
let fuente

function preload(){
  //Importo fuente desde la carpeta assets
  fuente = loadFont("assets/Roboto-Light.ttf")
  
}

function setup() {

  createCanvas(800, 400)
  //Aplico el tipo de fuente personalizado
  textFont(fuente)
  
}


function draw() {
  
  background(255, 60)
  ejecutarFuncion(10, 10)
  
}

function ejecutarFuncion (valorX, valorY) {

  for (let i = 0; i < valorX; i++) {

    for (let j = 0; j < valorY; j++) {
      
      textSize(random(11, 12))
      dibujoConTexto(i, j)
      
    }
    
  }
  
}

//FUNCIÓN CON PARÁMETROS
function dibujoConTexto(x, y) {
  
  push()
  
    //SI LA FUNCIÓN QUE RETORNA UN VALOR ES VERDADERA:
    if (retornarValor() == true) {
    fill(0, 0, 220)
  } else {
    fill(0)
  }
  text("Hola COM5", x * width/10, y * height/10)
  
  pop()
  
}

//FUNCION QUE RETORNA UN VALOR SIN PARÁMETROS
function retornarValor() {
  
  if (mouseX < width/2) {
    
    return true
    
  } else {
    
    return false
    
  }
}
