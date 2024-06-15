function verificarResposta() {
    const resposta = document.getElementById('resposta').value.toLowerCase();
    const mensagem = document.getElementById('mensagem');

    if (resposta === 'duas cartinhas e um chocolate') {
        mensagem.style.color = 'green';
        mensagem.textContent = 'Correto! ... --- -.../';
    } else {
        mensagem.style.color = 'red';
        mensagem.textContent = 'Tente novamente!';
    }
}
