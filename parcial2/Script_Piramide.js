// Array

let Arreglo = [

  [75],

  [95, 64],

  [17, 47, 82],

  [18, 35, 87, 10],

  [20, 4, 82, 47, 65],

  [19, 01, 23, 75, 3, 34],

  [88, 2, 77, 73, 7, 63, 67],

  [99, 65, 4, 28, 6, 16, 70, 92],

  [41, 41, 26, 56, 83, 40, 80, 70, 33],

  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],

  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],

  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],

  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],

  [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],

  [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23],

]
//   Llamada a la funcion calcular

function Sumatot(Arreglo) {
  return calcular(Arreglo, 0, 0);
}

let contador = 0;
const div = document.getElementById("piramide");

Arreglo.forEach((rows) => {
  contador++;
  const parentDiv = document.createElement("div");
  parentDiv.id = "parent" + contador;
  div.appendChild(parentDiv);
      rows.forEach((column) => {
        const divParent = document.getElementById("parent" + contador);
        const childDiv = document.createElement("div");

        childDiv.textContent = column;

        divParent.appendChild(childDiv);

  });
  
});

/*const textSum = document.getElementById("suma");
  textSum.innerHTML = "La suma de la ruta mayor es de: " + Sumatot(Arreglo);
  document.write( "<b>La suma del primer recorrrido es [" + Sumatot(Arreglo) + "]</b><br/>" );*/

 


// calcular el arreglo en el recorrrido

function calcular(Arreglo, i, j) {
	
  if (i == Arreglo.length) {
    return 0;
  }
  
  var contador1, x, y, i, j, contador2;
  contador1 = 0;
  contador2 = 0;

	
	/*En esta bloque se realiza el primer recorrido y se realiza el calculo*/
	
	for (x=0;x<Arreglo.length;x++) {
       for (y=0;y<Arreglo.length;y++) {
      // Acceder al elemento
	  
	  document.write( "El valor de la posición [" + x + "] [" + y + "] es [" + Arreglo[x][y] + "]<br/>" );
	  contador1 = contador1 + Arreglo[x][y];
	  
       }
	   document.write( "<b>La suma del primer recorrrido es [" + contador1 + "]</b><br/>" );
	   contador1 = 0;
    }
	
	
	document.write( "<b>La suma del primer recorrrido es [" + contador1 + "]</b><br/>" );
}