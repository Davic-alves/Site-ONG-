// Envolvemos o código antigo em uma função exportável
export function initMasks() {
    // Seleciona os inputs pelos IDs
    const inputCPF = document.getElementById('cpf');
    const inputTelefone = document.getElementById('telefone');
    const inputCEP = document.getElementById('cep');

    // (O resto do seu código de máscaras idêntico...)
    if (inputCPF) {
        inputCPF.addEventListener('input', (e) => {
            // ...lógica da máscara...
        });
    }
    if (inputTelefone) {
        inputTelefone.addEventListener('input', (e) => {
            // ...lógica da máscara...
        });
    }
    if (inputCEP) {
        inputCEP.addEventListener('input', (e) => {
            // ...lógica da máscara...
        });
    }
}