// Project card functionality
const projectCards = {
    initialize() {
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            // Handle focus states for accessibility
            card.addEventListener('focus', () => {
                card.classList.add('ring-2', 'ring-blue-500');
            });
            
            card.addEventListener('blur', () => {
                card.classList.remove('ring-2', 'ring-blue-500');
            });
            
            // Handle keyboard navigation within cards
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const link = card.querySelector('a');
                    if (link) link.click();
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    projectCards.initialize();
}); 