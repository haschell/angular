// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;
const PERSONAJE = {
  nombre: nombre,
  edad: edad
};
 
 
// Cree una interfaz que sirva para validar el siguiente objeto

interface HombreMurcielago{
    nombre: string;
    artesMarciales: string[];
}

function validar(heroe: HombreMurcielago){
    console.log("El nombre del heroe es: " +heroe.nombre);
    console.log("Las artes marciales que usa son: " +heroe.artesMarciales);
}

let batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
validar(batman);

 
 
// Convertir esta funcion a una funcion de flecha
//function resultadoDoble( a, b ){
  //return (a + b) * 2
//}

let resultadoDobleF = (a:number, b:number)  => (a+b)*2;
let resultado = resultadoDobleF(1,2);
console.log("Resultado: " +resultado);
 
 
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, arma:string ="arco", poder?:string ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
  console.log("Mensaje: " +mensaje);
};

getAvenger("Hawkeye", "ballesta","punteria" );
 
 
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class rectangulo{
    base:number=0;
    altura:number=0;

    constructor(){   }
    calcularArea(base:number, altura:number){
        let resultado = base * altura;
        return resultado;
    }
}

const rectan = new rectangulo;
rectan.base = 5;
rectan.altura = 2;

console.log("Resultado: " +rectan.calcularArea(rectan.base, rectan.altura));