document.getElementById('LoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    // Aqui você pode adicionar a lógica de validação de login se necessário
    // Exemplo: verificar se o email ou senha não está vazio

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Exemplo básico de validação (pode ser mais complexo)
    if (email !== '' && password !== '') {
        // Redireciona para a página desejada após o login
        window.location.href = '/pages/tela-filmes.html'; // Substitua pelo link da página que deseja redirecionar
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
