/* 
╭━━━╮╱╱╱╱╭╮╱╱╱╱╱╱╭╮╭━━━╮
┃╭━━╯╱╱╱╱┃┃╱╱╱╱╱╭╯┃┃╭━╮┃
┃╰━━┳━━┳━╯┣━━┳━━╋╮┃┃┃┃┃┃
┃╭━━┫┃━┫╭╮┃┃━┫━━┫┃┃┃┃┃┃┃
┃┃╱╱┃┃━┫╰╯┃┃━╋━━┣╯╰┫╰━╯┃
╰╯╱╱╰━━┻━━┻━━┻━━┻━━┻━━━╯
╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╭╮
┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╭╯╰╮
┃┃╱╰┳━━┳━━┳╮╱╭┳━┳┳━━┫╰┻╮╭╯
┃┃╱╭┫╭╮┃╭╮┃┃╱┃┃╭╋┫╭╮┃╭╮┃┃
┃╰━╯┃╰╯┃╰╯┃╰━╯┃┃┃┃╰╯┃┃┃┃╰╮
╰━━━┻━━┫╭━┻━╮╭┻╯╰┻━╮┣╯╰┻━╯
╱╱╱╱╱╱╱┃┃╱╭━╯┃╱╱╱╭━╯┃
╱╱╱╱╱╱╱╰╯╱╰━━╯╱╱╱╰━━╯


© 2026 Fedes10
*/
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

// ==================== INICIALIZACIÓN AL CARGAR DOM ====================
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== FRASES Y SANTOS ALEATORIOS DIARIOS ====================
    const phrasesPringado = [
        "Que contigo solo sepamos decirle Sí",
        "¡A CUBOS!",
        "Descalzos",
        "Existe un Mundo que todo el mundo quiera que exista",
        "Somos Capricho",
        "Es Tan Sencillo",
        "Spread Love",
        "BAILA Y DÉJATE DE HISTORIAS",
        "Que poco es una vida para darla",
        "Que todo sea verdad",
        "Bello es el riesgo",
        "¡No aflojen!",
        "El arte de vivir",
        "Relajao... relajao!!",
        "Hoy quiero decirte Señor: ¡Gracias!",
        "Enemigos del sillón",
        "¡Aún no has visto nada!",
        "Pues yo también he sido uno de ellos",
        "A toda vela vas",
        "Mi pobre loco",
        "100.000 todos por todos",
        "Abraza el plan B",
        "Con Toda El Alma",
        "Necesariamente disfrutones",
        "Tranquilo",
        "Vivir abrazando",
        "El mar son gotas",
        "El cielo aguarda",
        "Vivir en gerundio",
        "En lo escondido",
        "Sin gravedad",
        "SENCILLAMENTE",
        "Siempre en pie de guerra",
        "Un futuro junto a ti",
        "¿Y a ti qué?",
        "Escandalosamente alegres",
        "Guárdate de olvidar"
    ];
    
    const mariaFrases = [
        "María: Por el día - Gracias, Madre, por sostenerme hoy.",
        "María: Por el día - Virgen de Guadalupe, gracias por tu paz.",
        "María: Por el día - Gracias por guiar mis pasos hoy.",
        "María: Por el día - Virgen Santísima, gracias por tu ayuda.",
        "María: Por el día - Gracias por cada bendición.",
        "María: Por el día - Señora del Rosario, gracias por escucharme.",
        "María: Por el día - Gracias por iluminar mi camino.",
        "María: Por el día - Madre de Dios, gracias por cuidar a los míos.",
        "María: Por el día - Gracias por tu abrazo invisible.",
        "María: Por el día - Virgen de la Candelaria, gracias por tu luz.",
        "María: Por el día - Gracias por tu compañía constante.",
        "María: Por el día - Madre querida, gracias por tu cuidado.",
        "María: Por el día - Gracias, Virgen, por cada oportunidad.",
        "María: Por el día - Gracias por la alegría de hoy.",
        "María: Por el día - Gracias, María Auxiliadora, por tu guía.",
        "María: Por el día - Gracias, Virgen de Fátima, por tu amor.",
        "María: Por el día - Gracias por la calma que me das.",
        "María: Por el día - Gracias por enseñarme a confiar.",
        "María: Por el día - Gracias por cada sonrisa recibida.",
        "María: Por el día - Gracias, Madre de esperanza, por tu luz.",
        "María: Por la noche - Que tu paz me acompañe al dormir.",
        "María: Por la noche - Madre, calma mis inquietudes esta noche.",
        "María: Por la noche - Que tus manos protejan mi descanso.",
        "María: Por la noche - Virgen de Fátima, guía mis sueños.",
        "María: Por la noche - Gracias por tu abrazo en la noche.",
        "María: Por la noche - Que tu manto cubra mi corazón.",
        "María: Por la noche - Madre querida, acompáñame al dormir.",
        "María: Por la noche - Que mis pensamientos se llenen de paz.",
        "María: Por la noche - Que tu luz me guíe en la oscuridad.",
        "María: Por la noche - Que tu amor disipe mis temores.",
        "María: Por la noche - Virgen Santísima, acompáñame al dormir.",
        "María: Por la noche - Que duerma tranquilo bajo tu cuidado.",
        "María: Por la noche - Madre, haz mi noche serena.",
        "María: Por la noche - Que tu presencia me dé seguridad.",
        "María: Por la noche - Que tus bendiciones me rodeen hoy.",
        "María: Por la noche - Virgen del Carmen, vela mi descanso.",
        "María: Por la noche - Que la calma reine en mi corazón.",
        "María: Por la noche - Que tu abrazo sea mi refugio.",
        "María: Por la noche - Madre, aleja mis miedos esta noche.",
        "María: Por la noche - Que tus manos me protejan al dormir.",
        "María: Para mañana - Que mañana sienta tu luz.",
        "María: Para mañana - Madre, dame fuerzas para empezar.",
        "María: Para mañana - Que mis pasos lleven tu bendición.",
        "María: Para mañana - Que mi día esté lleno de tu paz.",
        "María: Para mañana - Que pueda amar como tú enseñas.",
        "María: Para mañana - Virgen de Lourdes, guía mi camino.",
        "María: Para mañana - Que la esperanza florezca en mí.",
        "María: Para mañana - Dame claridad en mis decisiones.",
        "María: Para mañana - Que mis actos reflejen tu amor.",
        "María: Para mañana - Que sienta tu presencia en todo.",
        "María: Para mañana - Madre, ilumina mi jornada.",
        "María: Para mañana - Que mis palabras nazcan del amor.",
        "María: Para mañana - Que tu paz me acompañe mañana.",
        "María: Para mañana - Virgen de Guadalupe, acompáñame.",
        "María: Para mañana - Que mi fe me mantenga firme.",
        "María: Para mañana - Que tu luz ilumine mis pasos.",
        "María: Para mañana - Que el amor guíe mis acciones.",
        "María: Para mañana - Que mis manos hagan el bien.",
        "María: Para mañana - Madre, fortalece mi corazón.",
        "María: Para mañana - Que tu bendición me rodee.",
        "María: Peticiones - Madre, ayúdame a perdonar.",
        "María: Peticiones - Virgen Santísima, dame fuerza.",
        "María: Peticiones - Intercede por los que sufren.",
        "María: Peticiones - Que tu paz llene mi alma.",
        "María: Peticiones - Madre, acompáñame en mi debilidad.",
        "María: Peticiones - Ayúdame a confiar en ti.",
        "María: Peticiones - Virgen de la Perpetua Ayuda, guía mis pasos.",
        "María: Peticiones - Dame claridad para elegir bien.",
        "María: Peticiones - Madre de esperanza, quita mis dudas.",
        "María: Peticiones - Que tu luz disipe mis miedos.",
        "María: Peticiones - Virgen del Carmen, protégenos hoy.",
        "María: Peticiones - Madre, dame paciencia y amor.",
        "María: Peticiones - Que tu ayuda llegue a los necesitados.",
        "María: Peticiones - Virgen de Fátima, guía nuestras decisiones.",
        "María: Peticiones - Que mi corazón confíe en tu amor.",
        "María: Peticiones - Que tus manos calmen mi ansiedad.",
        "María: Peticiones - Virgen de Lourdes, escucha mi oración.",
        "María: Peticiones - Madre, llena mi alma de serenidad.",
        "María: Peticiones - Que tu luz sea mi guía siempre.",
        "María: Peticiones - Virgen, acompáñame en los momentos difíciles.",
        "María: Piropos y cariño - Siento tu amor más fuerte que todo.",
        "María: Piropos y cariño - Tu presencia es mi refugio.",
        "María: Piropos y cariño - Eres paz en mi tormenta interior.",
        "María: Piropos y cariño - Tu cariño transforma mis sombras.",
        "María: Piropos y cariño - Tu abrazo supera cualquier miedo.",
        "María: Piropos y cariño - Eres luz que disipa el desaliento.",
        "María: Piropos y cariño - Tu amor calma mi alma.",
        "María: Piropos y cariño - Tu ternura nutre mi esperanza.",
        "María: Piropos y cariño - Tu compañía convierte lo ordinario en bendición.",
        "María: Piropos y cariño - Tu amor es refugio seguro.",
        "María: Piropos y cariño - Madre, tu mirada me reconforta.",
        "María: Piropos y cariño - Virgen, tu cercanía me llena de paz.",
        "María: Piropos y cariño - Tu amor es mi fuerza.",
        "María: Piropos y cariño - Virgen Santísima, tu guía es mi luz.",
        "María: Piropos y cariño - María Auxiliadora, gracias por tu amor.",
        "María: Piropos y cariño - Madre, tu protección me acompaña.",
        "María: Piropos y cariño - Virgen, tu paz me sostiene.",
        "María: Piropos y cariño - Tu cariño me da valor.",
        "María: Piropos y cariño - Madre, tu luz llena mi corazón.",
        "María: Piropos y cariño - Virgen, tu abrazo me da esperanza.",
        "María: Lamentaciones - Madre, perdóname mis errores.",
        "María: Lamentaciones - Ayúdame a aceptar mis fallos.",
        "María: Lamentaciones - Siento el peso de mis dudas, consuélame.",
        "María: Lamentaciones - Cuando estoy triste, acompáñame.",
        "María: Lamentaciones - Cuando dudo, ilumina mi camino.",
        "María: Lamentaciones - Cuando me siento solo, abrázame.",
        "María: Lamentaciones - Líbrame del desánimo, Madre.",
        "María: Lamentaciones - Cubre mis heridas con tu amor.",
        "María: Lamentaciones - Cuando mi fe flaquea, dame fuerza.",
        "María: Lamentaciones - Que tu ternura sane mi espíritu.",
        "María: Lamentaciones - Virgen, perdona mis faltas.",
        "María: Lamentaciones - Madre, calma mi corazón inquieto.",
        "María: Lamentaciones - Que tu luz disipe mis sombras.",
        "María: Lamentaciones - Virgen, acompáñame en mi dolor.",
        "María: Lamentaciones - Madre, ayúdame a ser fuerte.",
        "María: Lamentaciones - Que tu amor sane mi tristeza.",
        "María: Lamentaciones - Virgen, dame valor ante mis miedos.",
        "María: Lamentaciones - Madre, acompáñame en mi soledad.",
        "María: Lamentaciones - Que tu luz guíe mis pasos inseguros.",
        "María: Lamentaciones - Virgen, hazme sentir tu consuelo."
    ];
    
    const decalogoTitulos = [
        "Sonrisa y Mirada",
        "Compasión",
        "Ofrecimiento",
        "Cuidar un Sagrario",
        "Hora Santa",
        "Formación",
        "Sed de Amor",
        "Acompañamiento",
        "Sacramentos",
        "Amor a María"
    ];
    
    // Función para obtener el santo del día
    function getSantoDia() {
        return getSantoDelDia(); // Función definida en santos.js
    }
    
    // Función para obtener índice aleatorio basado en la fecha
    function getDailyIndex(arrayLength) {
        const today = new Date();
        const dateString = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        
        // Crear hash simple del string de fecha
        let hash = 0;
        for (let i = 0; i < dateString.length; i++) {
            hash = ((hash << 5) - hash) + dateString.charCodeAt(i);
            hash = hash & hash; // Convertir a 32bit integer
        }
        
        return Math.abs(hash) % arrayLength;
    }
    
    // Actualizar contenidos diarios
    function updateDailyContent() {
        const santoEl = document.getElementById('daily-santo');
        const phraseEl = document.getElementById('daily-phrase-pringado');
        const mariaEl = document.getElementById('daily-maria');
        const decalogoEl = document.getElementById('daily-decalogo');
        
        // Elementos móviles
        const mobileSantoEl = document.getElementById('mobile-daily-santo');
        const mobilePhraseEl = document.getElementById('mobile-daily-phrase-pringado');
        const mobileMariaEl = document.getElementById('mobile-daily-maria');
        const mobileDecalogoEl = document.getElementById('mobile-daily-decalogo');
        
        if (santoEl) {
            const santo = getSantoDia();
            santoEl.textContent = santo;
            if (mobileSantoEl) mobileSantoEl.textContent = santo;
        }
        
        if (phraseEl) {
            const phraseIndex = getDailyIndex(phrasesPringado.length);
            phraseEl.textContent = phrasesPringado[phraseIndex];
            if (mobilePhraseEl) mobilePhraseEl.textContent = phrasesPringado[phraseIndex];
        }
        
        if (mariaEl) {
            const mariaIndex = getDailyIndex(mariaFrases.length);
            const mariaEntry = mariaFrases[mariaIndex];
            const parsedMaria = parseMariaEntry(mariaEntry);
            const headerText = `María: ${parsedMaria.category}`;

            mariaEl.textContent = headerText;
            if (mobileMariaEl) mobileMariaEl.textContent = headerText;

            const mariaDetailEl = document.getElementById('daily-maria-detail');
            if (mariaDetailEl) {
                mariaDetailEl.innerHTML = `<strong>${parsedMaria.category}:</strong> ${parsedMaria.phrase}`;
                mariaDetailEl.style.display = 'block';
            }
        }
        
        if (decalogoEl) {
            const decalogoIndex = getDailyIndex(decalogoTitulos.length);
            const numeroDecalogo = decalogoIndex + 1;
            decalogoEl.textContent = `${numeroDecalogo}. ${decalogoTitulos[decalogoIndex]}`;
            if (mobileDecalogoEl) mobileDecalogoEl.textContent = `${numeroDecalogo}. ${decalogoTitulos[decalogoIndex]}`;
        }
        
        // Actualizar lista de todos los santos
        updateAllSantosList();
    }

    // Parsear entrada de María con formato "María: Categoría - Frase"
    function parseMariaEntry(entry) {
        const withoutPrefix = entry.replace(/^María:\s*/i, '');
        const parts = withoutPrefix.split(' - ');
        if (parts.length >= 2) {
            return {
                category: parts[0].trim(),
                phrase: parts.slice(1).join(' - ').trim()
            };
        }

        return {
            category: 'María',
            phrase: withoutPrefix.trim()
        };
    }
    
    // Actualizar la lista completa de santos
    function updateAllSantosList() {
        const allSantosList = document.getElementById('all-santos-list');
        if (!allSantosList) return;
        
        const todosLosSantos = getTodosLosSantos();
        
        // Si hay más de un santo, mostrar el resto
        if (todosLosSantos.length > 1) {
            const otrosSantos = todosLosSantos.slice(1); // Omitir el primero que ya está en el header
            allSantosList.innerHTML = `<strong>Otros santos:</strong> ${otrosSantos.join(', ')}`;
            allSantosList.style.display = 'block';
        } else {
            allSantosList.style.display = 'none';
        }
    }
    
    // Llamar al cargar la página
    updateDailyContent();
    
    // ==================== FECHA Y HORA ====================
    function updateDateTime() {
        const now = new Date();
        
        // Actualizar día
        const dayNumber = document.getElementById('day-number');
        if (dayNumber) {
            dayNumber.textContent = now.getDate();
        }
        
        // Actualizar mes
        const monthName = document.getElementById('month-name');
        if (monthName) {
            const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                          'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            monthName.textContent = months[now.getMonth()];
        }
        
        // Actualizar hora con dos puntos parpadeantes
        const timeDisplay = document.getElementById('time-display');
        if (timeDisplay) {
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            timeDisplay.innerHTML = `${hours}<span class="time-separator">:</span>${minutes}`;
        }
    }
    
    // Actualizar inmediatamente
    updateDateTime();
    
    // Actualizar cada minuto
    setInterval(updateDateTime, 60000);

    // ==================== FUNCIÓN PANTALLA COMPLETA ====================
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    
    fullscreenBtn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        
        if (!document.fullscreenElement) {
            // Entrar en pantalla completa
            document.documentElement.requestFullscreen().catch((err) => {
                console.log('Error al intentar pantalla completa:', err);
            });
            icon.classList.remove('fa-expand');
            icon.classList.add('fa-compress');
        } else {
            // Salir de pantalla completa
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
    });
    
    // Actualizar icono cuando se sale de pantalla completa con ESC
    document.addEventListener('fullscreenchange', function () {
        const btn = document.getElementById('fullscreen-btn');
        const icon = btn.querySelector('i');

        if (!document.fullscreenElement) {
            icon.classList.remove('fa-compress');
            icon.classList.add('fa-expand');
        }
    });
    
    // ==================== MODO DÍA/NOCHE ====================
    const themeCheckbox = document.getElementById('theme-checkbox');
    const body = document.body;
    
    // Variable para controlar si el usuario cambió manualmente el tema SOLO en esta sesión (no persistente)
    let userChangedTheme = false;

    // Función para detectar hora y aplicar modo automático
    function setThemeByTime() {
        const hour = new Date().getHours();
        
        // Solo aplicar automáticamente si el usuario NO ha cambiado manualmente en esta sesión
        if (!userChangedTheme) {
            // Modo oscuro: 20:00 - 6:59 (8pm a 6:59am)
            // Modo claro: 7:00 - 19:59 (7am a 7:59pm)
            if (hour >= 20 || hour < 7) {
                body.classList.add('dark-mode');
                themeCheckbox.checked = true;
            } else {
                body.classList.remove('dark-mode');
                themeCheckbox.checked = false;
            }
        }
    }

    // Función para destacar secciones según la hora
    function highlightSectionByTime() {
        const now = new Date();
        const hour = now.getHours();
        const minutes = now.getMinutes();
        const morningSection = document.getElementById('oracion-inicio');
        const nightSection = document.getElementById('oracion-noche');
        
        const timeInMinutes = hour * 60 + minutes;
        const morningStart = 7 * 60; // 7:00 = 420 minutos
        const morningEnd = 12 * 60 + 30; // 12:30 = 750 minutos
        
        // Quitar highlight previo
        document.querySelectorAll('.glass-card').forEach(card => {
            card.classList.remove('highlight-section');
        });
        
        // Mañana: 7:00 - 12:30 (7am a 12:30pm)
        if (timeInMinutes >= morningStart && timeInMinutes <= morningEnd) {
            if (morningSection) {
                const card = morningSection.querySelector('.glass-card');
                if (card) {
                    card.classList.add('highlight-section');
                }
            }
        }
        // Noche: 20:00 - 1:00 (8pm hasta la 1:00, no después)
        // hour 20, 21, 22, 23, 0 (medianoche hasta 00:59)
        else if (hour >= 20 || hour === 0) {
            if (nightSection) {
                const card = nightSection.querySelector('.glass-card');
                if (card) {
                    card.classList.add('highlight-section');
                }
            }
        }
        // A la 1:00 AM en adelante, verificar minutos para incluir solo hasta 1:00
        else if (hour === 1 && minutes === 0) {
            if (nightSection) {
                const card = nightSection.querySelector('.glass-card');
                if (card) {
                    card.classList.add('highlight-section');
                }
            }
        }
    }

    // Aplicar tema y destacados al cargar
    setThemeByTime();
    highlightSectionByTime();

    // Actualizar cada minuto
    setInterval(() => {
        if (!userChangedTheme) {
            setThemeByTime();
        }
        highlightSectionByTime();
    }, 60000); // 60000ms = 1 minuto

    // Toggle modo oscuro (cambio manual solo afecta hasta que se recargue la página)
    themeCheckbox.addEventListener('change', function() {
        // Marcar que el usuario cambió el tema manualmente (solo en memoria, no persistente)
        userChangedTheme = true;
        
        if (this.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });

    // ==================== HACER CLICABLE TODA LA CAJA ==================== 
    const collapsibleSections = document.querySelectorAll('.collapsible-section');
    
    collapsibleSections.forEach(card => {
        card.addEventListener('click', function(e) {
            // Obtener el contenido de esta sección
            const content = this.querySelector('.section-content');
            const icon = this.querySelector('.section-toggle-icon');
            
            if (!content || !icon) {
                return;
            }
            
            // Si la sección está abierta
            if (content.classList.contains('open')) {
                // Solo cerrar si se hizo clic específicamente en la flechita
                const clickedOnIcon = e.target.closest('.section-toggle-icon');
                
                if (clickedOnIcon) {
                    // Clic en la flechita, cerrar
                    content.classList.remove('open');
                    icon.classList.remove('open');
                    e.stopPropagation();
                }
                // En cualquier otro lugar dentro de la caja, no hacer nada
                // (esto evita que se cierre al hacer clic dentro)
                e.stopPropagation();
                return;
            }
            
            // Si está cerrada, cualquier clic en la caja la abre
            content.classList.add('open');
            icon.classList.add('open');
            
            // Prevenir que el evento se propague
            e.stopPropagation();
        });
    });

    // ==================== TOGGLE PARA SABER MAS ====================
    const moreToggleButton = document.getElementById('toggle-more-sections');
    const moreSections = document.getElementById('more-sections');

    if (moreToggleButton && moreSections) {
        moreToggleButton.addEventListener('click', function(e) {
            moreSections.classList.toggle('open');
            moreToggleButton.classList.toggle('open');
            e.stopPropagation();
        });
    }

    // ==================== TOGGLE FOOTER PANEL ====================
    const footerToggleButton = document.getElementById('footer-toggle');
    const footerPanel = document.getElementById('footer-panel');

    if (footerToggleButton && footerPanel) {
        footerToggleButton.addEventListener('click', function(e) {
            footerPanel.classList.toggle('open');
            footerToggleButton.classList.toggle('open');
            e.stopPropagation();
        });
    }
});

// ==================== CERRAR DESPLEGABLES AL HACER CLICK FUERA ====================
document.addEventListener('click', function (event) {
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

    const moreSections = document.getElementById('more-sections');
    const moreToggleButton = document.getElementById('toggle-more-sections');
    if (moreSections && moreSections.classList.contains('open')) {
        if (!event.target.closest('#more-sections') && !event.target.closest('#toggle-more-sections')) {
            moreSections.classList.remove('open');
            if (moreToggleButton) {
                moreToggleButton.classList.remove('open');
            }

            const extraSectionIds = ['que-es-hakuna-content', 'que-es-pringado-content'];
            extraSectionIds.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                const icon = document.getElementById('icon-' + sectionId);
                if (section && section.classList.contains('open')) {
                    section.classList.remove('open');
                    icon.classList.remove('open');
                }
            });
        }
    }

    const footerPanel = document.getElementById('footer-panel');
    const footerToggleButton = document.getElementById('footer-toggle');
    if (footerPanel && footerPanel.classList.contains('open')) {
        if (!event.target.closest('#footer-panel') && !event.target.closest('#footer-toggle')) {
            footerPanel.classList.remove('open');
            if (footerToggleButton) {
                footerToggleButton.classList.remove('open');
            }
        }
    }
});
