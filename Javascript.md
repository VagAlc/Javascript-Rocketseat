Importância da Sintaxe

Sintaxe é a escrita exata das coisas.
82% dos erros acontecem por falta de atenção na escrita.

Comentários em JavaScript:
// para comentar uma linha
/* (conteúdo) */ para comentar em várias linhas

# Tipos de dados

    *Gramática
    *Vocabulário
Obs: Cuidado com letras maiúsculas e minúsculas.

- String: cadeia de caracteres.
        Utilizar crases `(conteúdo)` é a melhor forma de escrever uma linha de código, pois a crase permite digitar mais de uma linha e também a maioria dos caracteres sem dar erro.

- Number

- Boolean (verdadeiro ou falso)
undefined (indefinido)
null (objeto que não tem nada nele)

Dados
    -Object
        propriedades(atributos)/funcionalidades(métodos)
        {valor }
console.log 

Array (vetores): Lista ou agrupamento de dados.
[(lista)]

De acordo com o ECMAScript standad temos 9 tipos de dados, sendo divididos em primitive, structural, structural primitive.
## Primitivos - Não é um objeto, e é imutável.
    -String; ("", '', ``)
    -Number; (1234...)
    -Boolean; (true / false)
    -undefined; (não definido)
    -Symbol;
    -BigInt.

## Structural (estruturais)
    -Object
        -Array;
        -Map;
        -Set;
        -Date;
        -...
    -Function

## Primitivo Estrutural
    -Null

# Variáveis
    Nomes simbólicos para receber algum valor (tipos de dados)
    Atalhos de código
    Identificadores
Palavras que criam variáveis:
    -var
    -let
    -const (variáveis constantes não podem ser alteradas)

# Scope
    Escopo determina a visibilidade de alguma variável
        Block Statement (declaração de bloco)
        Usar chaves {(código)}
OBS: o escopo da variável var é global e ao mesmo tempo local. Dependendo da situação, o JS faz a leitura do var antes do código, fora das chaves e o classifica como undefined.
As variáveis const e let são locais e funcionam apenas no escopo ({ Escopo}) em que foram criados.

# Nomes de Variáveis:
    JS é case-sensitive, ou seja, sensível a letras maiúsculas e minúsculas.
    JS também aceita acentuações, aspas e caracteres especiais (Unicode).

Ao criar uma variável, na hora de nomear ela, eu posso começar com caracteres especiais (&%$#@!), letras, colocar acentos e diferenciar com letras maiúsculas e minúsculas.
Não posso jamais começar com números e nem colocar espaços vazios no nome.
Na hora de nomear a variável, tentar deixar claro o que ela faz ou é. Usar ou camelCase (no lugar de espaços, letras maiúsculas) ou snake_case (no lugar de espaço, usar _)

