export function initFormValidation() {
    const form = document.getElementById('registration-form');
    if (!form) return; // Se não houver formulário, não faz nada

    const password = document.getElementById('senha');
    const confirmPassword = document.getElementById('confirma-senha');
    const feedbackEl = document.getElementById('form-feedback');

    form.addEventListener('submit', (e) => {
        // 1. Verifica a consistência
        if (password.value !== confirmPassword.value) {
            // Impede o envio do formulário
            e.preventDefault();
            
            // Mostra o aviso de erro (Req. da atividade)
            showFeedback('As senhas não conferem. Por favor, verifique.', 'danger');
        } else {
            // Exemplo de sucesso (na vida real, isso seria após o envio)
            e.preventDefault(); // Impedir envio real para o demo
            showFeedback('Cadastro enviado com sucesso!', 'success');
        }
    });

    // Função para mostrar o feedback
    function showFeedback(message, type) {
        feedbackEl.textContent = message;
        feedbackEl.className = `alert alert-${type}`; // Usa as classes de alerta que já criamos
        feedbackEl.style.display = 'block';
    }
}