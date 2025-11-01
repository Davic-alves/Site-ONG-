// Exporta a função de inicialização
export function initNavigation() {
    const nav = document.getElementById('main-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // --- 1. Funcionalidade do Menu Hambúrguer ---
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isExpanded = nav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // --- 2. Funcionalidade do Dropdown (para Mobile) ---
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            // Verifica se está em modo mobile
            const isMobile = menuToggle.offsetParent !== null;

            if (isMobile) {
                e.preventDefault(); // Previne a navegação no clique do link "Sobre"
                const dropdownItem = toggle.parentElement;
                dropdownItem.classList.toggle('active');
                const isDropdownExpanded = dropdownItem.classList.contains('active');
                toggle.setAttribute('aria-expanded', isDropdownExpanded);
            }
        });
    });

    // --- 3. Fechar o menu ao clicar em um link (ESSENCIAL para SPA) ---
    const allLinks = nav.querySelectorAll('a');
    allLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
}