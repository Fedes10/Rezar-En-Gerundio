// ==================== FUNCIONES DE TOGGLE PARA REGLAS DEL DECÁLOGO ====================
function toggleDetail(index) {
    const detail = document.getElementById('detail-' + index);
    const icon = document.getElementById('icon-' + index);
    detail.classList.toggle('open');
    icon.classList.toggle('open');
}

function toggleAlternative() {
    const alternative = document.getElementById('alternative-prayer');
    const icon = document.getElementById('icon-alt');
    alternative.classList.toggle('open');
    icon.classList.toggle('open');
}

function toggleNightAlternative() {
    const alternative = document.getElementById('night-alternative-prayer');
    const icon = document.getElementById('icon-night-alt');
    alternative.classList.toggle('open');
    icon.classList.toggle('open');
}

// ==================== FUNCIONES DE TOGGLE PARA SECCIONES PRINCIPALES ====================
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById('icon-' + sectionId);
    section.classList.toggle('open');
    icon.classList.toggle('open');
}

// ==================== CERRAR DESPLEGABLES AL HACER CLICK FUERA ====================
document.addEventListener('click', function(event) {
    // Si el click no es en un toggle-detail ni en su contenido
    if (!event.target.closest('.toggle-detail') && !event.target.closest('.rule-detail')) {
        // Cerrar todos los detalles de las reglas
        for (let i = 0; i < 10; i++) {
            const detail = document.getElementById('detail-' + i);
            const icon = document.getElementById('icon-' + i);
            if (detail && detail.classList.contains('open')) {
                detail.classList.remove('open');
                icon.classList.remove('open');
            }
        }
        // Cerrar la oración alternativa
        const alternative = document.getElementById('alternative-prayer');
        const iconAlt = document.getElementById('icon-alt');
        if (alternative && alternative.classList.contains('open')) {
            alternative.classList.remove('open');
            iconAlt.classList.remove('open');
        }
        // Cerrar la oración alternativa de la noche
        const nightAlternative = document.getElementById('night-alternative-prayer');
        const iconNightAlt = document.getElementById('icon-night-alt');
        if (nightAlternative && nightAlternative.classList.contains('open')) {
            nightAlternative.classList.remove('open');
            iconNightAlt.classList.remove('open');
        }
    }
    
    // Si el click no es en un section-header ni en su contenido
    if (!event.target.closest('.section-header') && !event.target.closest('.section-content')) {
        // Cerrar todas las secciones principales
        const sectionIds = ['oracion-inicio-content', 'oracion-pringado-content', 'decalogo-content', 'oracion-noche-content', 'que-es-hakuna-content', 'que-es-pringado-content'];
        sectionIds.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            const icon = document.getElementById('icon-' + sectionId);
            if (section && section.classList.contains('open')) {
                section.classList.remove('open');
                icon.classList.remove('open');
            }
        });
    }
});
