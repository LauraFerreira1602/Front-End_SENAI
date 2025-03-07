// Botão limpar
function limparInput() {
   var limpar = confirm("Você tem certeza de que deseja apagar seus dados?")
    if (limpar)
    document.getElementById('nome').value = ""
    document.getElementById('sobrenome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('telefone').value = ""
    document.getElementById('endereco').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('cep').value = ""

}

// Mudar Cor
function nomeColor() {
    const nome = document.getElementById("nome")

    nome.style.color = "green"
}

function sobrenomeColor() {
    const sobrenome = document.getElementById("sobrenome")

    sobrenome.style.color = "green"
}

function emailColor() {
    const email = document.getElementById("email")

    email.style.color = "green"
}

function senhaColor() {
    const senha = document.getElementById("senha")

    senha.style.color = "green"
}

function telefoneColor() {
    const telefone = document.getElementById("telefone")
    telefone.style.color = "green"
}

function enderecoColor() {
    const endereco = document.getElementById("endereco")

    endereco.style.color = "green"
}

function cidadeColor() {
    const cidade = document.getElementById("cidade")

    cidade.style.color = "green"
}

function estadoColor() {
    const estado = document.getElementById("estado")

    estado.style.color = "green"
}

function cepColor() {
    const cep = document.getElementById("cep")

    cep.style.color = "green"
}


function nomeAparecer(){
    document.getElementById("input_nome").value = "Nome"
}

function sobrenomeAparecer(){
    document.getElementById("input_sobrenome").value = "Sobrenome"
}

function emailAparecer(){
    document.getElementById("input_email").value = "Email"
}

function senhaAparecer(){
    document.getElementById("input_senha").value = "Senha"
}

function telefoneAparecer(){
    document.getElementById("input_telefone").value = "Telefone"
}

function enderecoAparecer(){
    document.getElementById("input_endereco").value = "Endereço"
}

function cidadeAparecer(){
    document.getElementById("input_cidade").value = "Cidade"
}

function cepAparecer(){
    document.getElementById("input_cep").value = "CEP"
}