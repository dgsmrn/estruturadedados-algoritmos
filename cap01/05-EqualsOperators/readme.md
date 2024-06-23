Funções dos operadores de igualdade
- Quando == é usado os valores poderão ser considerados iguais mesmo que forem de tipos diferentes.
    Abaixo tabela das conversões que ocorrem quando existe comparações com ==
    X                   Y                   RESULTADO
    null                undefined           true
    undefined           null                true
    Number              String              x == toNumber(y)    // string será convertida para number
    String              Number              toNumber(x) == y    // string será convertida para number
    Boolean             Any                 toNumber(x) == y    // boolean é convertido em number
    Any                 Boolean             x == toNumber(y)    // boolean é convertido em number
    String ou Number    Object              x == toPrimitive(y) // object é convertido em primitive
    Object              String ou Number    toPrimitive(x) == y // object é convertido em primitive

    toNumber e toPrimitive são internos e avaliam os valores conforme abaixo
    
    toNumber
    Tipo do valor       Resultado
    undefined           é NaN
    null                é +0
    Boolean             Se o valor for true, o resultado é 1; se o valor for false, o resultado será +0
    Number              É o valor do número

    toPrimitive
    Tipo do valor       Resultado
    Object              Se valueOf devolver um valor primitivo, esse valor primitivo será devolvido; caso contrário, se toString devolver um valor primitivo, esse valor será devolvido;  senão, um erro será devolvido.

- Quando === é usado se estivermos comparando tipos diferenetes os valores serão sempre false, não haverá tentativa de conversão confome a tabela acima. Se forem do mesmo tipo serão comaparados conforme tabela abaixo.
    Type(x)     Valores                                     Resultado
    Number      x tem o mesmo valor que y(mas não é NaN)    true
    String      x e y têm caracteres idênticos              true
    Boolean     x e y são ambos true ou são ambos false     true
    Object      x e y referenciam o mesmo objeto            true