// js/modules/router.js (VERSÃO ATUALIZADA)

// Importa as funções que precisam ser executadas DEPOIS que a página carrega
import { initFormValidation } from './validation.js';
import { initMasks } from '../mascaras.js';

// O "alvo" onde o conteúdo será injetado
const appRoot = document.getElementById('app-root');

// Define as rotas (link -> arquivo template)
const routes = {
    '/': '/pages/home.html',
    '/pages/home.html': '/pages/home.html',
    '/pages/projetos.html': '/pages/projetos.html',
    '/pages/cadastro.html': '/pages/cadastro.html'
};

// Função para rolar para uma âncora (hash)
const scrollToHash = (hash) => {
    if (!hash) return; // Se não houver hash, não faz nada

    // Espera um instante para o DOM ser atualizado pelo 'innerHTML'
    setTimeout(() => {
        // Remove o '#' do início para pegar o ID
        const targetElement = document.getElementById(hash.substring(1)); 
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100); // 100ms é geralmente o suficiente
};

// Função para carregar a página
const loadPage = async (path, hash) => { // <-- Agora recebe o HASH
    // Se a rota não existir, vai para a home
    const filePath = routes[path] || routes['/'];
    
    try {
        // 1. Busca o conteúdo do arquivo HTML (template)
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Página não encontrada');
        const html = await response.text();
        
        // 2. Injeta o HTML no "alvo"
        appRoot.innerHTML = html;
        
        // 3. Rola para a âncora, se houver
        scrollToHash(hash);
        
        // 4. Executa os scripts específicos daquela página
        if (path === '/pages/cadastro.html') {
            initFormValidation(); // Executa a validação
            initMasks();          // Executa as máscaras
        }
        
    } catch (error) {
        console.error('Erro ao carregar a página:', error);
        appRoot.innerHTML = '<h2>Erro 404 - Página não encontrada</h2>';
    }
};

// Função principal do Roteador
export function initRouter() {
    
    // 1. Ouve os cliques em todos os links do site
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a'); // Acha o <a> mais próximo do clique

        if (!link) return; // Se não foi um link, ignora

        const href = link.getAttribute('href');

        // Ignora links externos (http://) e links de email (mailto:)
        if (href.startsWith('http') || href.startsWith('mailto')) {
            return;
        }

        // Se for um link de âncora NA MESMA PÁGINA (começa com #)
        if (href.startsWith('#')) {
            e.preventDefault(); // Impede o pulo brusco
            scrollToHash(href); // Rola suavemente
            return;
        }

        // Se for um link da SPA (começa com /)
        if (href.startsWith('/')) {
            e.preventDefault(); // Impede o recarregamento da página
            
            // Separa o caminho da âncora (ex: /pages/projetos.html e #doar)
            const url = new URL(link.href);
            const path = url.pathname;
            const hash = url.hash;

            // Atualiza a URL na barra do navegador
            window.history.pushState({}, '', href);
            
            // Carrega o conteúdo
            loadPage(path, hash);
            return;
        }
    });

    // 2. Carrega a página inicial (ou a página da URL) quando o site abre
    loadPage(window.location.pathname, window.location.hash);

    // 3. Ouve os botões "Voltar" e "Avançar" do navegador
    window.addEventListener('popstate', () => {
        loadPage(window.location.pathname, window.location.hash);
    });
}