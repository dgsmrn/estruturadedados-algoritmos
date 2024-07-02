function sum(x = 1, y = 2, z = 3) {
  return x + y + z;
}

// operador de espalhamento (spread operator)
let params = [3, 4, 5];
console.log(sum(...params));

// o código abaixo tem o mesmo comportamento do código acima
console.log(sum.apply(undefined, params));

function restParameterFunction(x, y, ...a) {
  return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, "hello", true, 7));

function restParameterFunction2(x, y) {
  var a = Array.prototype.slice.call(arguments, 2);
  return (x + y) * a.length;
}
console.log(restParameterFunction2(1, 2, "hello", true, 7));

//-----------------------------------------------------------------------

// desestruturação de array (array destructuring)
let [x, y] = ["a", "b"];

// o código anterior é igual o código a seguir
let x2 = "a";
let y2 = "b";

// trocar valores com desestruturação (swap)
[x2, y2] = [y2, x2];

// o código anterior é igual o código a seguir
var temp = x2;
x2 = y2;
y2 = temp;

// property shorthand
let [x3, y3] = ["a", "b"];
let obj = { x3, y3 };
console.log(obj);

// o código anterior é igual o código a seguir
var x4 = "a";
var y4 = "b";
var obj2 = { x4: x4, y4: y4 };
console.log(obj2);

// shorthand meethod names
const hello = {
  name: "abcdef",
  printHello() {
    console.log("Hello");
  },
};
console.log(hello.printHello());

// o código anterior também pode ser escrito conforme abaixo
var hello2 = {
  name: "abcdef",
  printHello: function printHello() {
    console.log("hello");
  },
};
console.log(hello2.printHello());
