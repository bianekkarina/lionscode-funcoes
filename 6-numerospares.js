/*
Crie uma função chamada getEvenNumbers que aceite um array de números e
retorne um novo array contendo apenas os números pares do array original.

Dica: Para filtrar os números pares, você pode usar o operador módulo (%).
Um número é par se o resto da divisão desse número por 2 é zero (num % 2 === 0).
Tente utilizar o método filter para criar um novo array contendo apenas os
números que atendem a essa condição.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function getEvenNumbers (vetor){
    var pares =[]
    for (let i = 0; i <= vetor.length; i++ ) {
        if (vetor[i] % 2 == 0){
            pares.push(vetor[i])
        }
    }
return pares
}


//teste
teste = [1,4,5,6,7,8,10]
console.log(getEvenNumbers(teste))

//feito