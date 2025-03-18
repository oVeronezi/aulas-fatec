/* Para usar o equivalente ao Leia (no visualG), você precisa instalar o pacote readline-sync.
Para isso, abra o terminal e digite:
npm install readline-sync
Quando for executar, use o terminal e digite:
node leia.js
*/
const read = require('readline-sync');
let nome = read.question('Qual seu nome?');
console.log(nome);

let n1 = read.question('Digite um número: ');
let n2 = read.question('Digite outro número: ');
let resultado = parseInt(n1) + parseInt(n2);
console.log(nome + ' o resultado deu: '+ resultado);
/*tudo que o usuário digita vem como string,
por isso precisamos converter para número usando parseInt
*/