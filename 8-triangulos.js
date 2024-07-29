/*
Crie uma função chamada drawTriangle que aceite um número n e desenhe um triângulo de
altura n no console usando asteriscos (*).

Dica: Utilize um laço de repetição para iterar desde 1 até n. Em cada iteração,
imprima uma linha com um número crescente de asteriscos, começando com 1 asterisco
na primeira linha e adicionando um asterisco a cada linha subsequente.
Você pode usar a função .repeat().

Programa desenvolvido por:
 - Alexandre
 - José
 - Kailane
 - Karina
*/

function drawTriangle(n) {
    for (let i = 0; i <= n; i++) {
        console.log('*'.repeat(i))
    }
}

//exemplos de uso
drawTriangle(5)
drawTriangle(3)
drawTriangle(15)

//site de pesquisa: https://www.freecodecamp.org/portuguese/news/tres-maneiras-de-repetir-uma-string-em-javascript/
