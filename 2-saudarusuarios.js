/*
Crie uma função chamada greetUsers que aceita um array de nomes e
exibe uma saudação para cada nome no console.

Programa desenvolvido por:
 - Alexandre
 - José
 - Kailane
 - Karina
*/

function greetUsers (vetor) {
    vetor.forEach(nome => {
         console.log("Parabéns " + nome)
    });

}

greetUsers(["kailane", "karina"])
