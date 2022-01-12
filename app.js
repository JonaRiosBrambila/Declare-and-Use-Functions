/*
function contar(a,b){
    resultado = a + b;
    console.log("La suma de dos numeros es:" + resultado);
}
contar();

var x = function(a,b){
    return a*b;
};
var z = x(4,3);
console.log(z(2,3));

console.log(rest(5,3));

function rest(a,b){
    return a-b;
    return a*b;
}
(function (){
    console.log("Hola Jona");
})("Ya es viernes");

function multi(a,b){
    resultado=a*b;
    console.log(resultado);
  }
  multi(2,3);
  
  var x = function(x,y){
    return x*y;
  }
  console.log(x(2,3));
  
  var y = (x,y) => x*y;
  console.log(y(2,3));
  */

  function getCost(){
    var trans = parseInt(prompt('Introduce la transaccion'));
    var total = trans * 3;
    return total + (total * 0.01);
}


//alert("El total es " + getCost());


function greet(){
    var name1 = prompt("Introduce el primer nombre");
    var name2 = prompt("Introduce el segundo nombre");
    var name3 = prompt("Introduce el tercer nombre");

    return "Hola " + name1 + ", hola " + name2 + ", hola " + name3;
}

//console.log( greet() );






function getAge(){
    var birthYear = prompt("Introduce tu año de nacimiento");

    var curYear = new Date().getFullYear();

    return curYear - birthYear;
}

//alert("Tu edad es " + getAge());


function greetWAge(){
    var name1 = prompt("Introduce el primer nombre");
    var age1 = prompt("Introduce su edad");

    var name2 = prompt("Introduce el segundo nombre");
    var age2 = prompt("Introduce su edad");

    var name3 = prompt("Introduce el tercer nombre");
    var age3 = prompt("Introduce su edad");

    return "Hola " + name1 + " tu edad es "+ age1 +", hola " + name2 + " tu edad es "+ age2 +", hola " + name3 +" tu edad es " + age3;
}

//console.log(greetWAge());


//Challenge Yourself 1

function aprueba(){
var numero = prompt('Ingresa un numero');

if ( numero <= 5 ){

  return Boolean(true);
}else
return Boolean(false);

}
//console.log(aprueba());


//Challenge Yourself 2
function aprueba(){
    var numero = prompt('Ingresa un numero');
    
    if ( numero >= 8 ){
    
      return "Si pasas";
    }else
    return "No pasaste";
     }
    //console.log(aprueba());

    //Challenge Yourself3

    function aprueba(){
        var numero = prompt('Ingresa un numero');
        
        if ( numero <= 8 ){
        
          return "Si pasas";
        }else if( numero == 11 ){
        return "Excelente papu";
         }
    }
        console.log(aprueba());

