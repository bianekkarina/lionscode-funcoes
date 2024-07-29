/*
Crie uma função chamada findMax que aceita um array de números e retorne
o maior número do array.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function findMax(vetor){
    let maior = vetor[0]
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] > maior){
            maior = vetor[i]
        }        
    }
    return maior
}
console.log(findMax([2, 4, 9, 6]))