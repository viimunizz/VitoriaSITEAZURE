// Função para lidar com o envio do formulário
    document.getElementById("formulario").onsubmit = function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Obtém o valor do nome do usuário do campo de entrada
    var nomeUsuario = document.getElementById("nome").value;

    // Exibe o nome do usuário abaixo do formulário
    document.getElementById("nomeUsuario").innerText = "Seu nome é: " + nomeUsuario;
};