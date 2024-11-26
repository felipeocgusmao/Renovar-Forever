let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.getElementById('whatsappBtn').addEventListener('click', function() {
    // Replace this number with your actual WhatsApp number
    const phoneNumber = 'https://wa.me/message/OVCOGVWSMI2FG1';
    const message = 'Olá! Gostaria de fazer um orçamento com você.';

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  });

  // Change WhatsApp icon color on hover
  const whatsappBtn = document.getElementById('whatsappBtn');
  const whatsappIcon = whatsappBtn.querySelector('.whatsapp-icon');
  const originalIconSrc = whatsappIcon.src;
  const hoverIconSrc = originalIconSrc.replace('A38064', 'F5E9E9');

  whatsappBtn.addEventListener('mouseenter', function() {
    whatsappIcon.src = hoverIconSrc;
  });

  whatsappBtn.addEventListener('mouseleave', function() {
    whatsappIcon.src = originalIconSrc;
});