//Para
for(let i = 0; i<10; i++) {
    console.log('O valor de i é: ' + i);
}

let i = 0;
while(i < 10) {
    console.log(i);
    i = i+1; // i++
}

//Equivalente ao REPITA Em JS
// //while equivale, neste caso, ao até
// const read = require('readline-sync');
// let parar = 'n';
// do{
//     console.log('Repetiu');
//     parar = read.question('Parar de repetir? (s/n)');
//     console.log(parar);
// } while(parar != 'S' && parar != 's');
// // Note a diferença do operador, agora com And (&&)

//Declaração de vetores
let nomes = [];
nomes[0] = 'João';
nomes[1] = 'Maria';
nomes[2] = 'José';
//Acessando cada posição do vetor
for (let i = 0; i < 3; i++) {
    console.log(nomes[i]);
}