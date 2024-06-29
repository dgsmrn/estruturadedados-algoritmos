// variável com var pode ter declaração sobrescrita
var framework = "Angular";
var framework = "React";

console.log(framework);

// variável com let não pode ter declaração sobrescrita
let language = "Javascript";
// let language = "Ruby"; // lança um erro
console.log(language);

// variável do tipo const é somente de leitura não pode ter seu valor alterado
const PI = 3.141593;
// PI = 3.0; // lança um erro
console.log(PI);

// Em um objeto do tipo const é possível adicionar novos valores ou atualizar seus valores
const jsFramework = {
  name: "Angular",
};
jsFramework.name = "React";
console.log(jsFramework.name);

// Se tentarmos atribuir um nova referência à varíavel jsFramework será lançado um erro
jsFramework = {
  name: "Vue",
};

