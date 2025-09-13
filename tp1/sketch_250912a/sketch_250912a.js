let imagentp3;

let tam;
let colorRelleno;
let colorRellenoClaro;

let usarColoresRandom = false;
let usarTamanosRandom = false;


function setup() {
  createCanvas(800, 400);
  
  imagentp3 = loadImage("imagentp3.jpeg");
 
  
  colorRelleno = color(0, 0, 139); // azul oscuro
  colorRellenoClaro = color(135, 206, 250); // azul clarito
}

function draw() {
  background(255);
  noStroke();

  grillaCuadrados(100);

  //circulos
  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {

      //tamanos aleatorios si se presiona 'd'
      if (usarTamanosRandom) {
        tam = random(40, 100);
      } else {
        tam = 100;
      }
      
      //cambio de color
      if (usarColoresRandom) {
        if ((x / 100 + y / 100) % 2 === 0) {
          fill(colorRellenoClaro);
        } else {
          fill(colorRelleno);
        }
      } else {
        //colores por defecto
        if ((x / 100 + y / 100) % 2 === 0) {
          fill(color(135, 206, 250)); // azul clarito
        } else {
          fill(color(0, 0, 139)); // azul oscuro
        }
      }
      
      ellipse(x + 50, y + 50, tam, tam);
    }
  }

  usarTamanosRandom = false;
  
  image(imagentp3, 0, 0, 400, 400);
}

function colorAleatorio(brillo) {
  return color(random(255), random(255), brillo);
}

function grillaCuadrados(tam) {
  for (let y = 0; y < height; y += 100) {
    for (let x = 0; x < width; x += 100) {
      if ((x / 100 + y / 100) % 2 === 0) {
        fill(0, 0, 139); // azul oscuro
      } else {
        fill(135, 206, 250); // azul clarito
      }
      rect(x, y, tam, tam);
    }
  }
}

function keyPressed() {
  if (key === 'a' || key === 'A') {
    usarColoresRandom = true;
    colorRelleno = colorAleatorio(255);
    colorRellenoClaro = colorAleatorio(255);
  }
  if (key === 'd' || key === 'D') {
    usarTamanosRandom = true;
  }
  if (key === ' ') {
    usarColoresRandom = false;
    usarTamanosRandom = false;
  }
}

//Link al video explicativo: https://youtu.be/PP1FpPztHoE?si=odiXJdVJu4zYetVf
