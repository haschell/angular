// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
function validar(heroe) {
    console.log("El nombre del heroe es: " + heroe.nombre);
    console.log("Las artes marciales que usa son: " + heroe.artesMarciales);
}
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
validar(batman);
// Convertir esta funcion a una funcion de flecha
//function resultadoDoble( a, b ){
//return (a + b) * 2
//}
var resultadoDobleF = function (a, b) { return (a + b) * 2; };
var resultado = resultadoDobleF(1, 2);
console.log("Resultado: " + resultado);
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, arma, poder) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
    console.log("Mensaje: " + mensaje);
}
;
getAvenger("Hawkeye", "ballesta", "punteria");
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var rectangulo = /** @class */ (function () {
    function rectangulo() {
        this.base = 0;
        this.altura = 0;
    }
    rectangulo.prototype.calcularArea = function (base, altura) {
        var resultado = base * altura;
        return resultado;
    };
    return rectangulo;
}());
var rectan = new rectangulo;
rectan.base = 5;
rectan.altura = 2;
console.log("Resultado: " + rectan.calcularArea(rectan.base, rectan.altura));
