document.addEventListener('DOMContentLoaded', () => {
    // Filtro de búsqueda básico para la interfaz
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('keyup', (e) => {
        const value = e.target.value.toLowerCase();
        const cards = document.querySelectorAll('.ficha-card, .product-mini, .tablet-item');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(value)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

function openModal(productName) {
    alert('Detalles del producto: ' + productName + '\nContacta a un asesor vía WhatsApp para confirmar inventario.');
}
