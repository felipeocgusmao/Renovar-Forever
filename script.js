// Função para rolar para a seção de serviços
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Script para formulário de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validação simples
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Validação de email usando expressão regular
        if (!validateEmail(email)) {
            document.getElementById('status').innerHTML = 'Por favor, insira um email válido.';
            return; // Impede o envio se o email for inválido
        }

        document.getElementById('status').innerHTML = 'Mensagem enviada com sucesso!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('status').innerHTML = 'Por favor, preencha todos os campos.';
    }
});

// Função para validar email com expressão regular
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Função para estilo carrossel
let currentIndex = 0;

function moveSlide(direction) {
    const images = document.querySelectorAll('.feedback-images img');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Volta para a última imagem
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Volta para a primeira imagem
    }

    const offset = -currentIndex * (images[0].clientWidth + 20); // 20 é a margem entre as imagens
    document.querySelector('.feedback-images').style.transform = `translateX(${offset}px)`;
}