// array
export let array = [
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
];

// calcular la suma mayor en el recorrrido
function calcular(array, i, j) {
  if (i == array.length) {
    return 0;
  }
  let sum;
  sum =
    array[i][j] + Math.max(calcular(array, i + 1, j), calcular(array, i + 1, j + 1));
  return sum;
}


//   Llamada a la funcion calcular
export function Sumtot(array) {
  return calcular(array, 0, 0);
}

let cont = 0;
const div = document.getElementById("piramyd");
array.forEach((rows) => {
  cont++;
  const parentDiv = document.createElement("div");
  parentDiv.id = "parent" + cont;
  div.appendChild(parentDiv);
  rows.forEach((column) => {
    const divParent = document.getElementById("parent" + cont);
    const childDiv = document.createElement("div");
    childDiv.textContent = column;
    divParent.appendChild(childDiv);
  });
});
/*
function crear_piramide(num_lineas) {
    console.log(num_lineas)
    num_lineas = parseInt(num_lineas)
    var piramide = ""
    piramide = piramideUp(num_lineas+1,0)
    piramide += piramideDown(num_lineas,0,1)
    document.getElementById('piramide').innerText = piramide
  }
  
  function piramideUp(num_lineas, inicio){
    let piramide= "" // el string
  
    for( let i = inicio; i <= num_lineas ; i++){
       //piramide += agregarEspacios(num_lineas,0,i) 
       piramide += agregarNumeros(i-1)
    }
    return piramide
  }
  
  function piramideDown(num_lineas, fin, suma){
    let piramide= "" // el string
  
    for( let i = num_lineas; i > fin ; i--){
       //piramide += agregarEspacios(num_lineas,suma,i) 
       piramide += agregarNumeros(i-1)
    }
    return piramide
  }
  
  function agregarNumeros(index){
       let piramide = (index + " ").repeat(index+1)
       return piramide += "\n" // fin de la linea
  
  }
  
  function agregarEspacios(num_lineas,suma, index){
       let piramide = ""
       for( let j = 0; j < (num_lineas+suma) - index; j++){
         piramide += " "  // espacio en blanco antes de cada linea
       }
       return piramide
  }
  */