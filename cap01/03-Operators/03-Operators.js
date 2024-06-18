// operadores aritméticos
var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
// operadores de atribuição
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;
// operadores de comparação
console.log("num == 1 : " + (num == 1));
console.log("num === 1 : " + (num === 1));
console.log("num != 1 : " + (num != 1));
console.log("num > 1 : " + (num > 1));
console.log("num < 1 : " + (num < 1));
console.log("num >= 1 : " + (num >= 1));
console.log("num <= 1 : " + (num <= 1));
// operadores lógicos
console.log("true && false : " + (true && false))
console.log("true || false : " + (true || false));
console.log("!true : " + (!true));
// operadores bit a bit (bitwise)
console.log("5 & 1 : ", (5 & 1));
console.log("5 | 1 : ", (5 | 1));
console.log("~ 5 : ",  (~5));
console.log('5 ^ 1 : ', (5 ^ 1));
console.log("5 << 1 : ", (5 << 1));
console.log("5 >> 1 : ", (5 >> 1))
// operador typeof
console.log("typeof num : ", typeof num);
console.log("typeof Packt : ", typeof 'Packt');
console.log("typeof true : ", typeof true);
console.log("typeof [1,2,3] : ", typeof [1,2,3]);
console.log("typeof {name:john} : ", typeof {name: 'john'});
// operador delete
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj)

