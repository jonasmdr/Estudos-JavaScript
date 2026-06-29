// O objetivo deste script é pegar o nome do jogo e o resultado, 
// e adicionar uma nova linha (li) dentro da nossa lista (ul).

const button = document.querySelector('#addBtn');
const gameInput = document.querySelector('#gameName');
const resultInput = document.querySelector('#matchResult');
const list = document.querySelector('#matchList');

button.addEventListener('click', function() {
    let game = gameInput.value;
    let result = resultInput.value;

    // Validação simples para ver se o campo de texto está vazio
    if (game === "") {
        alert("Por favor, digite o nome do jogo!");
        return;
    }

    // Criando o elemento da lista e adicionando o texto
    let newMatch = document.createElement('li');
    newMatch.innerText = `${game} - ${result}`;

    // Inserindo o novo elemento na lista do HTML
    list.appendChild(newMatch);

    // Limpando o campo de texto após adicionar
    gameInput.value = "";
});