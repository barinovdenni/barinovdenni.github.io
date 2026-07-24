<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
    >

    <meta
        name="description"
        content="Портфолио Дениса — дизайн премиальной упаковки, рекламная графика и подготовка макетов к производству."
    >

    <title>Денис — дизайнер упаковки</title>

    <link rel="stylesheet" href="style.css">
</head>

<body id="top">

    <!-- Шапка сайта -->

    <header class="header">
        <a
            href="#top"
            class="logo"
            aria-label="Вернуться наверх"
        >
            DENIS.
        </a>

        <nav
            class="navigation"
            aria-label="Основная навигация"
        >
            <a href="#about">Обо мне</a>
            <a href="#projects">Проекты</a>
            <a href="#contacts">Контакты</a>
        </nav>
    </header>


    <main>

        <!-- Главный экран -->

        <section class="hero">
            <p class="subtitle">
                Дизайнер упаковки и графики
            </p>

            <h1>
                Денис — дизайнер<br>
                премиальной упаковки
            </h1>

            <p class="description">
                Разрабатываю упаковку, рекламную графику,
                визуальные концепции и макеты для производства.
            </p>

            <a href="#projects" class="button">
                Смотреть работы
            </a>
        </section>


        <!-- Обо мне -->

        <section class="about" id="about">
            <h2>Обо мне</h2>

            <p>
                Работаю с CorelDRAW и Photoshop, создаю дизайн
                премиальной упаковки, подготавливаю макеты к печати
                и экспериментирую с нейросетями.
            </p>
        </section>


        <!-- Проекты -->

        <section class="projects" id="projects">
            <h2>Избранные проекты</h2>

            <div class="project-grid">

                <article class="project-card">
                    <img
                        src="images/project.jpg"
                        alt="Дизайн премиальной упаковки"
                        loading="lazy"
                        decoding="async"
                    >

                    <span>01</span>

                    <h3>Премиальная упаковка</h3>

                    <p>
                        Дизайн и подготовка конструкции к производству.
                    </p>
                </article>


                <article class="project-card">
                    <img
                        src="images/project-2.jpg"
                        alt="Эксклюзивная серия упаковки для парфюмерии"
                        loading="lazy"
                        decoding="async"
                    >

                    <span>02</span>

                    <h3>Эксклюзивная серия</h3>

                    <p>
                        Иллюстрации и оформление в современном стиле.
                    </p>
                </article>


                <article class="project-card">
                    <img
                        src="images/project-3.jpg"
                        alt="Дизайн парфюмерной упаковки"
                        loading="lazy"
                        decoding="async"
                    >

                    <span>03</span>

                    <h3>Парфюмерная упаковка</h3>

                    <p>
                        Разработка дизайна премиальной серии.
                    </p>
                </article>


                <article class="project-card">
                    <img
                        src="images/project-4.jpg"
                        alt="Дизайн подарочной упаковки"
                        loading="lazy"
                        decoding="async"
                    >

                    <span>04</span>

                    <h3>Подарочная серия</h3>

                    <p>
                        Концепция и оформление подарочной упаковки.
                    </p>
                </article>


                <article class="project-card">
                    <img
                        src="images/project-5.jpg"
                        alt="Пример рекламной графики"
                        loading="lazy"
                        decoding="async"
                    >

                    <span>05</span>

                    <h3>Рекламная графика</h3>

                    <p>
                        Постеры, каталоги и изображения
                        для социальных сетей.
                    </p>
                </article>

            </div>
        </section>

    </main>


    <!-- Подвал -->

    <footer class="footer" id="contacts">
        <p>
            © 2026 Денис. Дизайн и упаковка.
        </p>

        <a
            href="https://t.me/sambuca0"
            target="_blank"
            rel="noopener noreferrer"
        >
            Telegram
        </a>
    </footer>


    <!-- Окно просмотра проекта -->

    <div
        class="modal"
        id="project-modal"
        aria-hidden="true"
    >
        <div
            class="modal-overlay"
            data-close-modal
        ></div>

        <div
            class="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            tabindex="-1"
        >
            <button
                class="modal-close"
                type="button"
                aria-label="Закрыть окно просмотра"
            >
                ×
            </button>

            <img
                id="modal-image"
                alt=""
            >

            <h3 id="modal-title"></h3>
        </div>
    </div>


    <!-- Подключение JavaScript -->

    <script src="script.js?v=7"></script>

</body>
</html>