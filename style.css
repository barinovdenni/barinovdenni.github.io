document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card");

    const modal = document.querySelector("#project-modal");
    const modalImage = document.querySelector("#modal-image");
    const modalTitle = document.querySelector("#modal-title");
    const closeButton = document.querySelector(".modal-close");
    const modalOverlay = document.querySelector("[data-close-modal]");

    const cardRects = new WeakMap();

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    let previousFocusedElement = null;


    /* Возвращаем карточку в исходное положение */

    function resetCard(card) {
        card.style.transition = "transform 0.35s ease";

        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
        card.style.setProperty("--move-y", "0px");
        card.style.setProperty("--card-scale", "1");

        card.style.zIndex = "1";

        cardRects.delete(card);
    }


    /* Открываем увеличенное изображение */

    function openModal(card) {
        if (!modal || !modalImage || !modalTitle) {
            return;
        }

        const image = card.querySelector("img");
        const title = card.querySelector("h3");

        if (!image || !title) {
            return;
        }

        previousFocusedElement = document.activeElement;

        modalImage.src = image.currentSrc || image.src;
        modalImage.alt = image.alt;
        modalTitle.textContent = title.textContent.trim();

        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");

        document.body.classList.add("modal-open");

        closeButton?.focus();
    }


    /* Закрываем увеличенное изображение */

    function closeModal() {
        if (!modal || !modal.classList.contains("open")) {
            return;
        }

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");

        document.body.classList.remove("modal-open");

        modalImage?.removeAttribute("src");

        if (previousFocusedElement instanceof HTMLElement) {
            previousFocusedElement.focus();
        }
    }


    /* Настраиваем карточки */

    cards.forEach((card) => {
        const title = card.querySelector("h3");

        card.tabIndex = 0;
        card.setAttribute("role", "button");

        if (title) {
            card.setAttribute(
                "aria-label",
                `Открыть проект: ${title.textContent.trim()}`
            );
        }


        /* Запоминаем исходное положение карточки */

        card.addEventListener("pointerenter", () => {
            cardRects.set(card, card.getBoundingClientRect());
        });


        /* Наклоняем карточку вслед за курсором */

        card.addEventListener("pointermove", (event) => {
            if (
                prefersReducedMotion ||
                event.pointerType === "touch"
            ) {
                return;
            }

            let rect = cardRects.get(card);

            if (!rect) {
                rect = card.getBoundingClientRect();
                cardRects.set(card, rect);
            }

            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY =
                ((mouseX - centerX) / centerX) * 16;

            const rotateX =
                ((centerY - mouseY) / centerY) * 16;

            card.style.transition = "transform 0.08s linear";
            card.style.zIndex = "10";

            card.style.setProperty(
                "--rotate-x",
                `${rotateX}deg`
            );

            card.style.setProperty(
                "--rotate-y",
                `${rotateY}deg`
            );

            card.style.setProperty("--move-y", "-7px");
            card.style.setProperty("--card-scale", "1.03");

            card.style.setProperty(
                "--mouse-x",
                `${mouseX}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${mouseY}px`
            );
        });


        /* Возвращаем карточку назад */

        card.addEventListener("pointerleave", () => {
            resetCard(card);
        });


        /* Открытие мышкой */

        card.addEventListener("click", () => {
            openModal(card);
        });


        /* Открытие клавиатурой */

        card.addEventListener("keydown", (event) => {
            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openModal(card);
            }
        });
    });


    /* Закрытие модального окна */

    closeButton?.addEventListener("click", closeModal);
    modalOverlay?.addEventListener("click", closeModal);

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeModal();
        }
    });
});