/* Arquivo: 
   => utilidades (arquivo js com funções)  
*/
// Função para juntar nome e sobrenome.

function juntarNome() {
    let nome      = document.getElementById("nome").value;
    let sobrenome = document.getElementById('sobrenome').value;

    // 1. Concatenação de strings normal.
    let nomecompleto = nome + " \n" + sobrenome;

    // 2.Concatenação de strings com uso 
    // de interpolação (template strings).
    let nomecompleto1 = `<i>${nome} <br>${sobrenome}</i>`;
    //console.log('Nome: ' + nome);
    //console.log('Sobrenome: ' + sobrenome);
    //console.log('Nome Completo: ' + nomecompleto);

    // As três linhas acima (16,17 e 18) são substituídas 
    // pela linha abaixo na função mostrarLog(nome, sobrenome).
    mostrarLog(nome, sobrenome);

    // 3. Executar a injeção de texto com \n (JavaScript).
    document.getElementById('nomecompleto').innerText = nomecompleto;
    
    // 4. Executar a injeção de tags (elementos HTML) + textos:
    document.getElementById('nomecompleto1').innerHTML = nomecompleto1;
}

// Função para limpar o formulário de dados.
function limparDados() {
    // Exclui os valores contidos em nome e sobrenome (inputs).
    document.getElementById("nome").value = "";
    document.getElementById('sobrenome').value = "";
    
    // Exclui os valores contidos no formulário nomes (nome e sobrenome).
    document.getElementById("nomes").reset();

    // Limpar o parágrafo do nomecompleto e nomecompleto1.
    document.getElementById("nomecompleto").innerText = "";
    document.getElementById("nomecompleto1").innerHTML = "";

    // Após limpar o formulário e limpar os parágrafos nomecompleto
    // e nomecompleto1, posicionar o cursor no foco do campo nome.
    ajustarFoco();
}

// Função para mostrar o log de saída de dados.
function mostrarLog(n,s) {
    console.log("Nome: " + n);
    console.log("Sobrenome: " + s);
    console.log("Nome Completo: " + n + " " + s);
}

// Função para ajustar o foco no campo nome.
function ajustarFoco() {
    document.getElementById("nome").focus();
}

// Função para escrever o nome completo na página web (document).
function escreverNome() {
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let resultado =  alerta() +
                     "<strong>" + nome + " " + sobrenome + "</strong><br />" +
                     "<button id='voltar' onclick='location.reload()'>" +
                          "<i class='fa fa-arrow-left'></i>Voltar</button>";
    document.writeln(resultado);
    mostrarLog(nome, sobrenome);
}

// Função Alerta
function alerta() {
    window.alert("Enquanto não fechar esta janela, \nnão será mostrado o nome completo.");
}