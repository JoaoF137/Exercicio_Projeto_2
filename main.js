const form = document.getElementById('formulario');
let linhas = '';
const arrayContatos = [];
const arrayNumeros = [];

form.addEventListener('submit', function(e) {

    e.preventDefault(); 
    adicionaContato();
    atualizaTabela();
})

function adicionaContato() {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputNumeroContato = document.getElementById('numeroContato');
    const inputObservacao = document.getElementById('observacaoContato');

if(arrayContatos.includes(inputNomeContato.value) ) {
    alert(`O contato "${inputNomeContato.value}" já está cadastrado`);
}

if(arrayNumeros.includes(parseFloat(inputNumeroContato.value)) ) {
    alert(`O número "${inputNumeroContato.value}" já está cadastrado`);
}

else{

    arrayContatos.push(inputNomeContato.value);
    arrayNumeros.push(parseFloat(inputNumeroContato.value));
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += `<td>${inputObservacao.value}</td>`;
    linha += '</tr>';
    linhas += linha;


}
inputNomeContato.value = '';
inputNumeroContato.value = '';
inputObservacao.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
