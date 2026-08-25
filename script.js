document.addEventListener('DOMContentLoaded', () => {
    // 1. Auto-cierre del Popup de Promoción a los 8 segundos
    setTimeout(() => {
        closePromoModal();
    }, 8000);

    // 2. Filtro de búsqueda por texto en tiempo real
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const value = e.target.value.toLowerCase();
            const items = document.querySelectorAll('.catalog-item, .ficha-card');
            
            items.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(value)) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// Cerrar popup de promoción
function closePromoModal() {
    const modal = document.getElementById('promoModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Filtrar por categoría al hacer clic en los botones de marcas
function filterCategory(category) {
    // Cambiar estado activo de los botones
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Mostrar u ocultar elementos según la categoría seleccionada
    const items = document.querySelectorAll('.catalog-item');
    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

    // Manejar fichas técnicas inferiores
    const fichas = document.querySelectorAll('.fichas-grid .ficha-card');
    fichas.forEach(ficha => {
        const fichaCat = ficha.getAttribute('data-category');
        if (category === 'all' || fichaCat === category) {
            ficha.style.display = '';
        } else {
            ficha.style.display = 'none';
        }
    });
}

// Redirigir a WhatsApp Business con mensaje personalizado
function openWhatsApp(productName) {
    const mensaje = encodeURIComponent(`Hola Creditel Smartphone, me interesa ver más detalles del producto: ${productName}`);
    window.open(`https://wa.me/message/BCL2QA4FMFRHP1?text=${mensaje}`, '_blank');
}

