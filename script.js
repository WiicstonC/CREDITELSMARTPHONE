document.addEventListener('DOMContentLoaded', () => {
    // 1. Auto-cierre del Popup de Promoción a los 7 segundos
    setTimeout(() => {
        closePromoModal();
    }, 7000);

    // 2. Filtro de búsqueda por texto en tiempo real
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase().trim();
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

// Filtrar por categoría mediante los botones de marca
function filterCategory(category, event) {
    // Manejo de clase activa en los botones de filtro
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Filtrar elementos de la cuadrícula superior
    const items = document.querySelectorAll('.catalog-item');
    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });

    // Filtrar fichas técnicas inferiores
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

// Redirigir a WhatsApp con mensaje personalizado de consulta
function openWhatsApp(productName) {
    const mensaje = encodeURIComponent(`Hola Creditel Smartphone, me interesa conocer la disponibilidad y precio de: ${productName}`);
    window.open(`https://wa.me/message/BCL2QA4FMFRHP1?text=${mensaje}`, '_blank');
}

