// Importa os módulos
import { initRouter } from './modules/router.js';
import { initNavigation } from './modules/navigation.js';

// Executa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initNavigation(); // Inicializa o menu (hambúrguer e dropdown)
    initRouter();     // Inicializa o roteador SPA
});