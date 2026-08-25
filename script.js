document.addEventListener('DOMContentLoaded', () => {
    // 1. Auto-cierre del Modal de Promoción a los 8 segundos
    setTimeout(() => {
        closePromoModal();
    }, 8000);

    // 2. Filtro de búsqueda en vivo
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
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
    }
});

// Función para cerrar el modal de la promoción manualmente o por tiempo
function closePromoModal() {
    const modal = document.getElementById('promoModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Función para redirigir a tu WhatsApp Business cuando seleccionen un producto
function openWhatsApp(productName) {
    const mensaje = encodeURIComponent(`Hola Creditel Smartphone, me interesa ver más detalles del producto: ${productName}`);
    window.open(`https://wa.me/message/BCL2QA4FMFRHP1?text=${mensaje}`, '_blank');
}
