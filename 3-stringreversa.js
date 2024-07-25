/*
Crie uma função chamada reverseString que aceite uma string como parâmetro
e retorne a string invertida. Por exemplo, se a entrada for "hello", a
função deve retornar "olleh".

Dica: Para inverter uma string, você pode usar os métodos split('')
para dividir a string em um array de caracteres, reverse() para
inverter o array e join('') para juntar os caracteres de volta em uma string.

Programa desenvolvido por:
 - Aluno 1
 - Aluno 2
 - Aluno 3
 - Aluno 4
*/

function reverseString(str){
    var split = str.split("")
    var reverse = split.reverse ()
    var join = reverse.join("")
    
    return join
}


//teste


palavra = "Hello"
console.log(reverseString(palavra))


//terminado - site usado: https://www.freecodecamp.org/portuguese/news/tres-maneiras-de-inverter-uma-string-em-javascript/