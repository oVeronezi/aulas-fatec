/*const read = require('readline-sync');
// Declaração das matrizes
let nomes = [[]];

// Primeiro, acessa as linhas
for(let i = 0; i < 3; i++) {
    // Depois, acessa as colunas
    for(let j = 0; j < 2; j++){
        nomes = read.question('linha '+ i + ' coluna '+ j +': ');
    }
}*/

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
// console.log(matriz/*linha*/[0]/*coluna*/[1]); //Saída: 2
let somar = matriz[0][1] + matriz[1][0] + matriz[1][2] + matriz[2][1];
console.log(`A soma dos números pares da matriz é: ${somar}`); //Saída: 15
console.log(`Os números pares da matriz são: ${matriz[0][1]}, ${matriz[1][0]}, ${matriz[1][2]}, ${matriz[2][1]}`); //Saída: 2, 4, 6, 8