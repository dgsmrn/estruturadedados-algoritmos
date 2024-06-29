A partir da versão ES2015 do ecmascript é possível utilizar let e const.
- Anteriormente utilizando var era possível redeclarar uma varíavel, isso causava muitos problemas
- Com let se tentarmos redeclarar uma variável no mesmo escopo será lançado um erro
- Com const podemos criar uma variável do tipo somente leitura que não pode ter seu valor alterado
- Porém se for um objeto do tipo const, ainda é possível alterar suas propriedaes, mas se tentarmos reatribuir um objeto novamente a uma const será lançado um erro