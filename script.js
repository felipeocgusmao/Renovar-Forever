class PremiumFeedbackCarousel {
    constructor() {
        this.carousel = document.querySelector('.feedback-carousel');
        this.track = document.querySelector('.feedback-track');
        this.slides = [];
        this.currentIndex = 0;
        this.autoplayInterval = null;

        this.init();
    }

    init() {
        // Dados dos feedbacks
        const feedbacks = [
            { image: 'assets/Feedbacks/feedback01.png' },
            { image: 'assets/Feedbacks/feedback02.png' },
            { image: 'assets/Feedbacks/feedback03.png' },
            { image: 'assets/Feedbacks/feedback04.png' },
            { image: 'assets/Feedbacks/feedback05.png' },
            { image: 'assets/Feedbacks/feedback06.png' },
            { image: 'assets/Feedbacks/feedback07.png' }
        ];

        // Criar slides
        this.createSlides(feedbacks);

        // Configurar navegação
        this.setupNavigation();

        // Configurar indicadores
        this.setupIndicators(feedbacks.length);

        // Iniciar autoplay
        this.startAutoplay();

        // Configurar eventos de hover
        this.setupHoverEvents();

        // Configurar responsividade
        this.setupResponsive();

        // Atualizar estado inicial
        this.updateCarousel();
    }

    createSlides(feedbacks) {
        feedbacks.forEach((feedback, index) => {
            const slide = document.createElement('div');
            slide.className = 'feedback-slide';
            slide.innerHTML = `
                <div class="feedback-card">
                    <img
                        src="${feedback.image}"
                        alt="Feedback de cliente ${index + 1}"
                        class="feedback-image"
                        loading="lazy"
                    >
                </div>
            `;
            this.track.appendChild(slide);
        });

        this.slides = document.querySelectorAll('.feedback-slide');
    }

    setupNavigation() {
        const prevButton = document.querySelector('.nav-button.prev');
        const nextButton = document.querySelector('.nav-button.next');

        prevButton.addEventListener('click', () => {
            this.navigate('prev');
            this.resetAutoplay();
        });

        nextButton.addEventListener('click', () => {
            this.navigate('next');
            this.resetAutoplay();
        });
    }

    setupIndicators(count) {
        const container = document.querySelector('.feedback-indicators');
        const slidesPerView = this.getSlidesPerView();
        const indicatorCount = Math.ceil(count / slidesPerView);

        for (let i = 0; i < indicatorCount; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.addEventListener('click', () => {
                this.goToPage(i);
                this.resetAutoplay();
            });
            container.appendChild(indicator);
        }
    }

    setupHoverEvents() {
        this.carousel.addEventListener('mouseenter', () => this.stopAutoplay());
        this.carousel.addEventListener('mouseleave', () => this.startAutoplay());
    }

    setupResponsive() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.updateCarousel();
            }, 250);
        });
    }

    getSlidesPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    navigate(direction) {
        const slidesPerView = this.getSlidesPerView();
        if (direction === 'next') {
            this.currentIndex = Math.min(this.currentIndex + 1, this.slides.length - slidesPerView);
        } else {
            this.currentIndex = Math.max(this.currentIndex - 1, 0);
        }
        this.updateCarousel();
    }

    goToPage(pageIndex) {
        const slidesPerView = this.getSlidesPerView();
        this.currentIndex = pageIndex * slidesPerView;
        this.updateCarousel();
    }

    updateCarousel() {
        const slideWidth = 100 / this.getSlidesPerView();
        const offset = -this.currentIndex * slideWidth;

        // Atualizar posição do track
        this.track.style.transform = `translateX(${offset}%)`;

        // Atualizar classes ativas
        this.slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === this.currentIndex);
        });

        // Atualizar indicadores
        const indicators = document.querySelectorAll('.indicator');
        const currentPage = Math.floor(this.currentIndex / this.getSlidesPerView());
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentPage);
        });

        // Atualizar estado dos botões
        this.updateNavigationState();
    }

    updateNavigationState() {
        const prevButton = document.querySelector('.nav-button.prev');
        const nextButton = document.querySelector('.nav-button.next');
        const slidesPerView = this.getSlidesPerView();

        prevButton.disabled = this.currentIndex === 0;
        nextButton.disabled = this.currentIndex >= this.slides.length - slidesPerView;

        prevButton.style.opacity = prevButton.disabled ? '0.5' : '1';
        nextButton.style.opacity = nextButton.disabled ? '0.5' : '1';
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => {
            const slidesPerView = this.getSlidesPerView();
            if (this.currentIndex < this.slides.length - slidesPerView) {
                this.navigate('next');
            } else {
                this.currentIndex = 0;
                this.updateCarousel();
            }
        }, 5000);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }

    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay();
    }
}

// Inicializar o carrossel quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new PremiumFeedbackCarousel();
});

// Estilo em Scroll Segmentado
class ScrollSnapManager {
    constructor() {
        this.sections = [];
        this.currentSectionIndex = 0;
        this.isScrolling = false;
        this.touchStartY = 0;
        this.init();
    }

    init() {
        // Configurar container principal
        const mainContainer = document.querySelector('.main-container');
        mainContainer.style.height = '100vh';
        mainContainer.style.overflow = 'hidden';

        // Criar wrapper para as seções
        const wrapper = document.createElement('div');
        wrapper.className = 'sections-wrapper';

        // Mover todas as seções para dentro do wrapper
        const sections = Array.from(mainContainer.querySelectorAll('section, #hero'));
        sections.forEach(section => {
            section.style.height = '100vh';
            section.style.minHeight = '100vh';
            wrapper.appendChild(section);
        });

        mainContainer.appendChild(wrapper);

        // Adicionar estilos necessários
        const style = document.createElement('style');
        style.textContent = `
            .sections-wrapper {
                height: 100vh;
                overflow-y: scroll;
                scroll-snap-type: y mandatory;
                scrollbar-width: none; /* Firefox */
                -ms-overflow-style: none; /* IE/Edge */
            }

            .sections-wrapper::-webkit-scrollbar {
                display: none; /* Chrome/Safari/Opera */
            }

            .sections-wrapper > section,
            .sections-wrapper > #hero {
                scroll-snap-align: start;
                scroll-snap-stop: always;
            }

            .scroll-indicator {
                position: fixed;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                display: flex;
                flex-direction: column;
                gap: 10px;
                z-index: 1000;
            }

            .scroll-dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #E0AAB8;
                cursor: pointer;
                transition: all 0.3s ease;
                opacity: 0.5;
            }

            .scroll-dot.active {
                opacity: 1;
                transform: scale(1.3);
                background-color: #A38064;
            }
        `;
        document.head.appendChild(style);

        // Criar indicadores de scroll
        this.createScrollIndicators(sections);

        // Configurar eventos
        this.wrapper = wrapper;
        this.sections = sections;

        this.setupEventListeners();
    }

    createScrollIndicators(sections) {
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';

        sections.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'scroll-dot';
            if (index === 0) dot.classList.add('active');

            dot.addEventListener('click', () => this.scrollToSection(index));
            indicator.appendChild(dot);
        });

        document.body.appendChild(indicator);
    }

    setupEventListeners() {
        // Evento de scroll
        this.wrapper.addEventListener('scroll', () => {
            if (!this.isScrolling) {
                this.handleScroll();
            }
        });

        // Eventos de teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.scrollToSection(this.currentSectionIndex - 1);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.scrollToSection(this.currentSectionIndex + 1);
            }
        });

        // Eventos de roda do mouse
        this.wrapper.addEventListener('wheel', (e) => {
            e.preventDefault();

            if (!this.isScrolling) {
                if (e.deltaY > 0) {
                    this.scrollToSection(this.currentSectionIndex + 1);
                } else {
                    this.scrollToSection(this.currentSectionIndex - 1);
                }
            }
        }, { passive: false });

        // Eventos de touch
        this.wrapper.addEventListener('touchstart', (e) => {
            this.touchStartY = e.touches[0].clientY;
        });

        this.wrapper.addEventListener('touchmove', (e) => {
            const touchEndY = e.touches[0].clientY;
            const diff = this.touchStartY - touchEndY;

            if (Math.abs(diff) > 50) { // Threshold para swipe
                if (diff > 0) {
                    this.scrollToSection(this.currentSectionIndex + 1);
                } else {
                    this.scrollToSection(this.currentSectionIndex - 1);
                }
                this.touchStartY = touchEndY;
            }
        });
    }

    handleScroll() {
        const scrollPosition = this.wrapper.scrollTop;
        const windowHeight = window.innerHeight;

        this.currentSectionIndex = Math.round(scrollPosition / windowHeight);

        // Atualizar indicadores
        const dots = document.querySelectorAll('.scroll-dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSectionIndex);
        });
    }

    scrollToSection(index) {
        if (index < 0 || index >= this.sections.length || this.isScrolling) return;

        this.isScrolling = true;
        this.currentSectionIndex = index;

        this.wrapper.scrollTo({
            top: index * window.innerHeight,
            behavior: 'smooth'
        });

        // Atualizar indicadores
        const dots = document.querySelectorAll('.scroll-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Reset do flag de scrolling após a animação
        setTimeout(() => {
            this.isScrolling = false;
        }, 1000);
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    new ScrollSnapManager();
});