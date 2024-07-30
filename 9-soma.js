/*
Crie uma função chamada sumTwoNumbers que aceite dois números como parâmetros e retorne
a soma deles.

Programa desenvolvido por:
 - Alexandre
 - José
 - Kailane
 - Karina
*/

function sumTwoNumbers (vetor){
    var soma = 0
    for(let i=0; i < vetor.length; i++){
        soma+= vetor[i]
    }
return soma 
}

//teste 

var numeros =[ 1,3,2,4,]
console.log(sumTwoNumbers(numeros))
//finalizado
