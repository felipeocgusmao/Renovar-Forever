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

// Scroll Segmentado
document.querySelectorAll('.scroll-section').forEach((section) => {
    section.style.height = '100vh';
  });

  window.addEventListener('scroll', () => {
    // Adicione lógica personalizada, se necessário
  });
