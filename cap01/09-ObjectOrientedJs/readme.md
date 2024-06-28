Em javascript podemos criar objetos utilizando as chaves, cada objeto tem um par de chave e valor.

Podemos declarar uma classe(construtor) utilizando uma função que recebe parametros e atribui esses valores com this.

Com essa classe podemos instanciar novos objetos com new Construtor, e acessar, atribuir e alterar valores dos atributos da classe.

Também é possível adicionar funções em nossas classes, se for adicionada dentro da declaração do construtor a função será recriada em cada instância. Porém se adicionarmos ao Construtor.prototype, essa mesma função será compartilhada com todas as instâncias criadas a partir daquela mesma classe. Este formato economiza memória e reduz custo de processamento.