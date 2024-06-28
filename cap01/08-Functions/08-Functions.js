// função sem parâmetro e sem retorno
function sayHello() {
  console.log("Hello!");
}
sayHello();

// função com parâmetro
function output(text) {
  console.log(text);
}
output("Hello!");

// função com retorno de valor
function sum(num1, num2) {
  return num1 + num2;
}
var result = sum(1, 2);
output(result);
