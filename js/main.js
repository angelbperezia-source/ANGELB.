document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema diseño web esta cargado. Estética ANGEL NOMAS activa.");

    const terminalText = document.getElementById('terminal-text');
    const voiceBtn = document.getElementById('voice-btn');
    const launchBtn = document.getElementById('launch-btn');
    const rotateBtn = document.getElementById('rotate-btn');
    const portal = document.getElementById('portal');
    const meterFill = document.getElementById('meter-fill');
    const navToggle = document.getElementById('nav-toggle');
    const nav = document.querySelector('.nav');
    const revealElements = document.querySelectorAll('.reveal');

    const terminalLines = [
        "// Conectando con angel B...",
        "// Analizando patrones de graffiti y neón...",
        "// Estado: portal psicodélico activo [420]...",
        "// Compilando identidad ANGEL NOMAS...",
        "// Sincronización estable..."
    ];

    let lineIndex = 0;
    let meter = 0;

    const updateTerminal = () => {
        terminalText.textContent = terminalLines[lineIndex];
        lineIndex = (lineIndex + 1) % terminalLines.length;
    };

    const updateMeter = () => {
        meter = (meter + 7) % 101;
        meterFill.style.width = `${meter}%`;
    };

    updateTerminal();
    setInterval(updateTerminal, 2800);
    setInterval(updateMeter, 450);

    const speakMessage = () => {
        if (!('speechSynthesis' in window)) {
            alert('La síntesis de voz no es compatible con este navegador.');
            return;
        }

        window.speechSynthesis.cancel();

        const messages = [
            'Bienvenido a MI MUNDO. las puertas está abiertas.',
            'ANGEL NOMAS activa una nueva frecuencia creativa.',
            'El multiverso responde. La imaginación ya no tiene fronteras.'
        ];

        const message = messages[Math.floor(Math.random() * messages.length)];
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.lang = 'es-ES';
        utterance.pitch = 0.8;
        utterance.rate = 1.1;
        window.speechSynthesis.speak(utterance);
    };

    voiceBtn.addEventListener('click', speakMessage);

    launchBtn.addEventListener('click', () => {
        const active = portal.classList.toggle('portal-open');
        launchBtn.textContent = active ? 'Cerrar portal' : 'Abrir portal';
        launchBtn.classList.toggle('active', active);
        meterFill.style.width = active ? '100%' : '12%';
    });

    rotateBtn.addEventListener('click', () => {
        const paused = portal.classList.toggle('portal-paused');
        rotateBtn.textContent = paused ? 'Reanudar giro' : 'Pausar giro';
        rotateBtn.setAttribute('aria-pressed', String(paused));
    });

    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            nav.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealElements.forEach((element) => observer.observe(element));
});