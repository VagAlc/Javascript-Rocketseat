// function expression
// function anonymous

// parâmetros (paremeters)
/*
const sum = function (number1, number2) {
    total = number1 + number2
    return total
}


let number1 = 34
let number2 = 25

console.log(`O Number 1 é: ${number1}`)
console.log(`O Number 2 é: ${number2}`)
console.log(`A soma é: ${sum (number1, number2)}`)
*/
/*
// Function Scope

let subject = 'create video'

function createThink(subject) {
    return subject
}

console.log(subject)
console.log(createThink(subject))
*/

/*
// Function Hoisting

sayMyName();

function sayMyName () {
    console.log('Mayk')
}
*/
/*
// Arrow Function

const sayMyName =() =>{
    console.log ('Vagner')
}
sayMyName()
*/
/*
// Callback function

function sayMyName(name){
    console.log('antes de executar a callback')
    name()
    console.log('depois de executar a callback')
}
sayMyName(() => {
    console.log('estou em uma callback')
})
*/
/*
// Function() constructor
    *expressão new
    * criar um novo objeto
    * this keyword
*/
/*
function Person(name) {
this.name = name
}
const mayk = new Person ("Mayk")
const joao = new Person ("João")
console.log(mayk)
console.log(joao)
*/

/* Prototype

    * prototype-based language
    * prototype chain
    * __proto__
*/

/*
    Type conversion (typecasting) vs Type coersion
    * alteração de um típo de dado para outro tipo

    type coersion= o JS faz a alteração automaticamente para não ter problema no código.

    type conversion= quando é o usuário quem muda.
    Ex: console.log(Number('9')+ 5)
*/
/*let dinheiroNaConta = false
const makePix = dinheiroNaConta ? 'Fazer o Pix' : 'Aguardar para fazer o Pix'

console.log(makePix)


console.log(4 + 8)
*/

// Resolução dos Exercícios Propostos

// Transformar Notas Esclares


let nota = 59

function imprimirNota(nota){
    if(nota >= 90){
        console.log("A - Sensacional, aprovadíssimo!")
    } else if (nota >= 80){
        console.log("B - Muito bom, você foi bem!")
    } else if (nota >= 70) {
        console.log("C - Bom, mas você pode ser ainda melhor!")
     } else if (nota >= 60){
        console.log("D - Quase! Você precisa melhorar!")
     } else if (nota < 60){
        console.log("F - Reprovado! Precisamos conversar imediatamente!")
     }
}

imprimirNota(99)
imprimirNota(89)
imprimirNota(79)
imprimirNota(69)
imprimirNota(59)
