document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. ANIMACIÓN TYPEWRITER DEL LOGO (<AnthonyUribe />)
  // ==========================================
  const logoTextElement = document.getElementById('logo-text');
  const fullText = "<AnthonyUribe />";
  let charIndex = 0;
  let isDeleting = false;

  function typeWriterLoop() {
    if (!logoTextElement) return;

    const currentString = fullText.substring(0, charIndex);
    logoTextElement.textContent = currentString;

    let speed = isDeleting ? 70 : 130;

    if (!isDeleting && charIndex === fullText.length) {
      speed = 2200; // Pausa de 2.2 segundos con el texto completo
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      speed = 500; // Pausa antes de volver a empezar
      isDeleting = false;
    } else {
      charIndex += isDeleting ? -1 : 1;
    }

    setTimeout(typeWriterLoop, speed);
  }

  typeWriterLoop();

  // ==========================================
  // 2. EFECTO PARALLAX COMBINADO (MOUSE + SCROLL)
  // ==========================================
  const bubbles = document.querySelectorAll('.bg-bubble');
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 40;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 40;
    updateParallax();
  });

  window.addEventListener('scroll', () => {
    updateParallax();
  });

  function updateParallax() {
    const scrollY = window.scrollY;

    bubbles.forEach((bubble) => {
      const speed = parseFloat(bubble.getAttribute('data-speed')) || 0.1;
      const scrollOffset = scrollY * speed;
      
      // Combina el desplazamiento por Scroll y por Mouse
      bubble.style.transform = `translate3d(${mouseX}px, ${mouseY + scrollOffset}px, 0)`;
    });
  }

  // ==========================================
  // 3. GENERADOR DE PARTÍCULAS FLOTANTES
  // ==========================================
  const particlesContainer = document.getElementById('particles-container');
  const particleCount = 20;

  if (particlesContainer) {
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 8 + 4; // Tamaño entre 4px y 12px
      const left = Math.random() * 100; // Posición horizontal aleatoria
      const duration = Math.random() * 10 + 8; // Duración animación entre 8s y 18s
      const delay = Math.random() * 10; // Retraso de inicio aleatorio

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${left}vw`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `-${delay}s`;

      particlesContainer.appendChild(particle);
    }
  }

  // ==========================================
  // 4. DICCIONARIO DE TRADUCCIONES (i18n)
  // ==========================================
  const translations = {
    es: {
      'nav-about': 'Sobre mí',
      'nav-skills': 'Habilidades',
      'nav-projects': 'Proyectos',
      'nav-experience': 'Educación & Trayectoria',
      'nav-references': 'Referencias',
      'hero-badge': 'Disponible para nuevos proyectos y oportunidades',
      'hero-title': 'Desarrollador de Software Intermedio',
      'hero-subtitle': 'Estudiante de 20 años en la Pontificia Universidad Católica del Ecuador (PUCE). Especializado en desarrollo web con HTML, CSS, JavaScript, programación sólida en Python y sistemas de redes de computación. Gran facilidad para el trabajo en equipo y la colaboración.',
      'btn-projects': 'Ver Proyectos',
      'btn-print': 'Imprimir / PDF',
      'section-skills': 'Habilidades Técnicas & Blandas',
      'skill-frontend-title': 'Desarrollo Web (Frontend)',
      'skill-frontend-desc': 'HTML5, CSS3 (Flexbox, CSS Grid), JavaScript (ES6+), Maquetación Responsive & Accesibilidad Web.',
      'skill-backend-title': 'Programación & Backend',
      'skill-backend-desc': 'Python (Lógica de programación, desarrollo de scripts y frameworks web como Flask / FastAPI), SQL & Bases de Datos Relacionales.',
      'skill-networks-title': 'Sistemas de Redes de Computación',
      'skill-networks-desc': 'Configuración de redes, arquitectura de red, direccionamiento IP, protocolos de enrutamiento y simulación técnica.',
      'skill-video-title': 'Edición de Video & Multimedia',
      'skill-video-desc': 'Edición de video a nivel pre-profesional para proyectos tecnológicos, presentaciones ejecutivas y contenido audiovisual.',
      'skill-soft-title': 'Trabajo en Equipo & Convivencia',
      'skill-soft-desc': 'Facilidad para el trabajo en grupo, excelente comunicación interpersonal, resolución colaborativa de problemas y buena convivencia laboral.',
      'section-projects': 'Proyectos Destacados',
      'filter-all': 'Todos',
      'filter-web': 'Web & Full-Stack',
      'filter-python': 'Python & IA',
      'filter-redes': 'Redes & DB',
      'p1-title': 'TastyByte / FetchFood',
      'p1-desc': 'Sistema web para pedidos en mesas de restaurantes e interfaz en tiempo real para el área de cocina.',
      'p2-title': 'Bot Inmobiliario & RAG (Telegram)',
      'p2-desc': 'Bot de Telegram inteligente integrado con modelos de Machine Learning (Random Forest) y RAG para estimación de precios de vivienda e información sectorial.',
      'p3-title': 'Simulador de Cajero Automático',
      'p3-desc': 'Aplicación web para procesamiento de transacciones bancarias, procedimientos almacenados y generación de comprobantes PDF.',
      'p4-title': 'U-Subscriptions',
      'p4-desc': 'Plataforma web colaborativa para la gestión de descuentos y suscripciones enfocada en estudiantes universitarios.',
      'p5-title': 'Infraestructura & Enrutamiento OSPF',
      'p5-desc': 'Diseño e implementación de arquitectura de red con VLANs, subinterfaces y protocolo de enrutamiento OSPF.',
      'section-experience': 'Educación & Trayectoria',
      'edu1-title': 'Pontificia Universidad Católica del Ecuador (PUCE)',
      'edu1-desc': 'Estudiante de Desarrollo de Software. Formación integral en arquitectura de software, algoritmos, bases de datos y redes de computadoras.',
      'edu2-title': 'Proyectos Colaborativos & Trabajo en Equipo',
      'edu2-desc': 'Participación activa en equipos multidisciplinarios para el desarrollo de proyectos tecnológicos integradores, promoviendo un ambiente laboral armónico y productivo.',
      'section-references': 'Referencias',
      'ref1-title': 'Agencia de Contenido Audiovisual (Gyto)',
      'ref1-desc': 'Contacto de referencia compañía de edición de videos'
    },
    en: {
      'nav-about': 'About Me',
      'nav-skills': 'Skills',
      'nav-projects': 'Projects',
      'nav-experience': 'Education & Experience',
      'nav-references': 'References',
      'hero-badge': 'Available for new projects & opportunities',
      'hero-title': 'Intermediate Software Developer',
      'hero-subtitle': '20-year-old student at Pontificia Universidad Católica del Ecuador (PUCE). Specialized in web development with HTML, CSS, JavaScript, solid Python programming, and computer networking systems. Excellent teamwork and interpersonal skills.',
      'btn-projects': 'View Projects',
      'btn-print': 'Print / PDF',
      'section-skills': 'Technical & Soft Skills',
      'skill-frontend-title': 'Web Development (Frontend)',
      'skill-frontend-desc': 'HTML5, CSS3 (Flexbox, CSS Grid), JavaScript (ES6+), Responsive Layouts & Web Accessibility.',
      'skill-backend-title': 'Programming & Backend',
      'skill-backend-desc': 'Python (Core programming logic, scripting, and web development), SQL & Relational Databases.',
      'skill-networks-title': 'Computer Networking Systems',
      'skill-networks-desc': 'Network configuration, architecture, IP addressing, routing protocols, and technical simulation.',
      'skill-video-title': 'Video Editing & Multimedia',
      'skill-video-desc': 'Pre-professional video editing for technical projects, executive presentations, and audiovisual content creation.',
      'skill-soft-title': 'Teamwork & Collaboration',
      'skill-soft-desc': 'Strong ability to work in groups, excellent interpersonal communication, collaborative problem-solving, and positive workplace relationship building.',
      'section-projects': 'Featured Projects',
      'filter-all': 'All',
      'filter-web': 'Web & Full-Stack',
      'filter-python': 'Python & AI',
      'filter-redes': 'Networking & DB',
      'p1-title': 'TastyByte / FetchFood',
      'p1-desc': 'Web application for restaurant table ordering and real-time kitchen display management.',
      'p2-title': 'Real Estate & RAG Bot (Telegram)',
      'p2-desc': 'Intelligent Telegram bot integrated with Machine Learning models (Random Forest) and RAG for real estate price estimation.',
      'p3-title': 'ATM Transaction Simulator',
      'p3-desc': 'Web application for banking transaction processing with stored procedures and PDF receipt generation.',
      'p4-title': 'U-Subscriptions',
      'p4-desc': 'Collaborative web platform for managing university student discounts and subscriptions.',
      'p5-title': 'Infrastructure & OSPF Routing',
      'p5-desc': 'Design and implementation of network architecture featuring VLANs, subinterfaces, and dynamic OSPF routing.',
      'section-experience': 'Education & Experience',
      'edu1-title': 'Pontificia Universidad Católica del Ecuador (PUCE)',
      'edu1-desc': 'Software Development Student. Comprehensive training in software architecture, algorithms, databases, and computer networks.',
      'edu2-title': 'Collaborative Projects & Teamwork',
      'edu2-desc': 'Active participation in multidisciplinary teams for technology integration projects, fostering a harmonious and productive working environment.',
      'section-references': 'References',
      'ref1-title': 'Audiovisual Content Agency (Gyto)',
      'ref1-desc': 'Reference contact for video editing company'
    }
  };

  // Estado del idioma
  let currentLang = localStorage.getItem('preferredLang') || 'es';
  const langToggle = document.getElementById('lang-toggle');

  function updateLanguage(lang) {
    document.documentElement.lang = lang;
    currentLang = lang;
    localStorage.setItem('preferredLang', lang);

    if (langToggle) {
      langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      updateLanguage(newLang);
    });
  }

  updateLanguage(currentLang);

  // ==========================================
  // 5. MODO OSCURO / CLARO
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
  }

  // ==========================================
  // 6. FILTRO DE PROYECTOS CON ANIMACIÓN BUBBLE
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // ==========================================
  // 7. ANIMACIÓN DE APARICIÓN AL HACER SCROLL
  // ==========================================
  const revealElements = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(element => observer.observe(element));
});