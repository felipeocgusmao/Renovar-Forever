<h1>Projeto Renovar Forever</h1>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Renovar Forever</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bentham&family=Montserrat:wght@200;300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="script.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.2/ScrollTrigger.min.js"></script>
</head>
<body>
    <div class="main-container">
        <!-- Cabeçalho -->
        <header>
            <img src="assets/img001.png" alt="Logo Renovar Forever" style="width: 500px; height: 350px; object-fit: contain;">
            <div class="container">
                <div class="logo"></div>
            </div>
        </header>

        <!-- Seção Principal (Hero)  -->
        <section id="hero" class="section">
            <div class="hero-text">
                <h2>Elegância em Cada Detalhe, Encanto em Cada Festa</h2>
                <p>Transformando sonhos em realidade através de criações únicas!</p>
            </div>
        </section>

		<!-- Seção Sobre com fade-in ao rolar -->
        <section id="about" class="section">
            <div class="container">
                <div class="row">
                    <div class="col-left">
                        <h2>Quem Somos?</h2>
                        <p>Olá! Eu sou Karolaine Gusmão, fundadora da <strong>Renovar Forever</strong>, especializada em papelaria premium para festas infantis.</p>
                        <p>O meu propósito é transformar sonhos em realidade através de criações únicas, que trazem elegância e criatividade para momentos especiais. Com uma paixão por detalhes e dedicação em cada projeto, ajudo mamães e papais a criarem festas inesquecíveis para seus filhos, entregando produtos feitos com carinho e qualidade. Se você busca exclusividade e personalização, está no lugar certo!</p>
                    </div>
                    <div class="col-right">
                        <img src="assets/img01.png" alt="Foto Karol" style="width: 300px; height: 360px; object-fit: cover;">
                    </div>
                </div>
            </div>
        </section>

		<!-- Seção de Serviços -->
        <section id="servicos" class="section">
            <div class="container">
                <h2>O que Oferecemos?</h2>
                <ul class="service-list">
                    <li class="service-item">
                        <div class="service-number">1</div>
                        <div class="service-content">
                            <h3>Personalizados Premium</h3>
                            <p>Personalizados Premium, podendo ser feito em vários formatos e em qualquer tema.</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-number">2</div>
                        <div class="service-content">
                            <h3>Lembrancinhas Fim de Festa</h3>
                            <p>Lembrancinhas Fim de Festa, além dos personalizados, temos um catálogo com muitas opções de lembrancinhas, para que você possa ter a mesma identidade visual em todos os itens de papelaria da festa.</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-number">3</div>
                        <div class="service-content">
                            <h3>Convites e Tags</h3>
                            <p>Convites, tags, e produtos para fazer lojinha. Tudo o que você precisa para ter uma festa completa.</p>
                        </div>
                    </li>
                    <li class="service-item">
                        <div class="service-number">4</div>
                        <div class="service-content">
                            <h3>Envios para todo Brasil via Correio</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

		<!-- Seção de Processo -->
        <section class="processo">
            <h2>Processo</h2>
                <ul class="processo-list">
                    <li class="processo-item">
                        <div class="processo-arrow">
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </div>
                        <div class="processo-text">
                            Após a confirmação do pedido pedimos foto da sua decoração para criarmos o design de cada peça
                        </div>
                        </li>
                    <li class="processo-item">
                        <div class="processo-arrow">
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </div>
                        <div class="processo-text">
                            Depois enviamos uma prévia para o cliente aprovar e ver se gostou de todos os detalhes
                        </div>
                    </li>
                    <li class="processo-item">
                        <div class="processo-arrow">
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </div>
                        <div class="processo-text">
                            Depois de aprovado, separamos todo o material adequado para produzir as peças
                        </div>
                    </li>
                    <li class="processo-item">
                        <div class="processo-arrow">
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </div>
                        <div class="processo-text">
                            Iniciamos a produção, impressão, corte, camadas e montagem
                        </div>
                    </li>
                    <li class="processo-item">
                        <div class="processo-arrow">
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </div>
                        <div class="processo-text">
                            Tiramos foto de tudo e mandamos o resultado final para o cliente se apaixonar mais ainda
                        </div>
                    </li>
                    <li class="processo-item">
                        <div class="processo-arrow">
                            <svg viewBox="0 0 24 24">
                                <path d="M5 12h14m-7-7l7 7-7 7"></path>
                            </svg>
                        </div>
                        <div class="processo-text">
                            Enviamos seu pedido com todo cuidado e segurança via correio
                        </div>
                    </li>
                </ul>
        </section>

		<!-- Seção de Feedbacks -->
        <section id="feedback" class="feedback-section">
            <div class="container">
                <h2>As clientes amam, todos os feedbacks são muito positivos</h2>
                <div class="feedback-container">
				<!-- Navegação esquerda -->
                    <button class="nav-button prev">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>

					<!-- Container principal do carrossel -->
                    <div class="feedback-carousel">
                        <div class="feedback-track">
                            <!-- Os slides serão criados dinamicamente via JavaScript -->
                        </div>
                    </div>

					<!-- Navegação direita -->
                    <button class="nav-button next">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

				<!-- Indicadores de página -->
                <div class="feedback-indicators"></div>
            </div>
        </section>

		<!-- Seçãpo de Missao -->
        <section id="mission" class="section">
            <div class="container" style="padding: 30px 10px;">
                <h2>A Missão da Renovar Forever</h2>
                <p>A minha missão é <strong>transformar</strong> momentos especiais em lembranças inesquecíveis, criando personalizados que refletem a essência de cada celebração. Com foco na <strong>criatividade</strong>, <strong>exclusividade</strong> e <strong>atenção</strong> aos detalhes, busco proporcionar experiências únicas para os clientes, garantindo que cada festa seja <strong>marcada</strong> por elegância e encantamento.</p>
            </div>
        </section>

		<!-- Seção de Contato -->
        <section id="contato" class="section">
            <h2>Link de Contato e Catálogo</h2>
            <div class="contato-boxes">
                <a href="https://wa.me/message/OVCOGVWSMI2FG1" target="_blank" class="contato-box">
                    <h3>Whatsapp</h3>
                </a>
                <a href="https://www.canva.com/design/DAF1pEpJ270/tdDGr3FiDmaH7Nqv-h6BYg/edit?utm_content=DAF1pEpJ270&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="contato-box">
                    <h3>Personalizados Premium</h3>
                </a>
                <a href="https://www.canva.com/design/DAGTePN5iKk/wckfnVRgDlZXMmzgVo9-QQ/edit?utm_content=DAGTePN5iKk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" class="contato-box">
                    <h3>Lembrancinhas</h3>
                </a>
            </div>
        </section>

        <!-- Rodapé -->
        <footer id="footer" class="section">
            <div class="container">
                <p>© 2024 Renovar Forever. Todos os direitos reservados.</p>
            </div>
        </footer>
    </div>
    <script src="script.js"></script>
</body>
</html>