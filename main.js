// модалка для демо игр
document.querySelectorAll("[id^='demogame-']").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const id = this.id.split("-")[1];
    const modal = document.getElementById(`demogamemodal-${id}`);
    if (modal) {
      modal.classList.add("display-flex");
    }
  });
});

document.querySelectorAll(".demogameclose").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const modal = this.closest("[id^='demogamemodal-']");
    if (modal) {
      modal.classList.remove("display-flex");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const article = document.getElementById("article-1");
  if (article) {
    article.addEventListener("click", function () {
      window.location.href = this.dataset.url;
    });
  }
});

// модалка для хэдера
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger-menu');
  const headermenu = document.querySelector('.header-modal');

  if (burger && headermenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      headermenu.classList.toggle('open');
    });
  } else {
    console.warn('burger or header-modal not found');
  }
});


const update = () => {
  const AllArticles = document.querySelectorAll('.articles-card').length;
  document.querySelectorAll('.AllArticles').forEach(span => {
    span.textContent = AllArticles;
  });
    const GameGuides = document.querySelectorAll('.game-guides-article').length;
  document.querySelectorAll('.GameGuides').forEach(span => {
    span.textContent = GameGuides;
  });
    const CasinoReviews = document.querySelectorAll('.casino-reviews').length;
  document.querySelectorAll('.CasinoReviews').forEach(span => {
    span.textContent = CasinoReviews;
  });
      const Bonuses = document.querySelectorAll('.bonuses-article').length;
  document.querySelectorAll('.Bonuses').forEach(span => {
    span.textContent = Bonuses;
  });
      const Technology = document.querySelectorAll('.technology-article').length;
  document.querySelectorAll('.Technology').forEach(span => {
    span.textContent = Technology;
  });
      const Safety = document.querySelectorAll('.safety-article').length;
  document.querySelectorAll('.Safety').forEach(span => {
    span.textContent = Safety;
  });
};

update();



// CookieBanner скрыть баннер
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".cookie-banner");
  const acceptAllBtn = document.querySelector(".cookie-button--accept");
  const essentialOnlyBtn = document.querySelector(".cookie-button--essential");
  const closeBtn = document.querySelector(".cookie-button-x");

  const hasAccepted = localStorage.getItem("cookieAccepted");
  console.log(localStorage.getItem("cookieAccepted"))

  // Показываем баннер только если пользователь ещё не принял cookies
  if (hasAccepted !== "true" && banner) {
    banner.style.display = "flex";
  }
  if (hasAccepted == "true" && banner) {
    banner.style.display = "none";
  }

  // Функция скрытия и сохранения согласия
  function acceptCookies() {
    localStorage.setItem("cookieAccepted", "true");
    banner.style.display = "none";
  }

  // Обработчики
  if (acceptAllBtn) {
    acceptAllBtn.addEventListener("click", acceptCookies);
  }

  if (essentialOnlyBtn) {
    essentialOnlyBtn.addEventListener("click", acceptCookies);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", acceptCookies);
  }
});
  // CookieBanner изменение
  const CustomizeCookieButton = document.querySelector(".cookie-button--customize");
  const CookieDetailed = document.querySelector(".cookie-detailed");
  const CookieTitle = document.querySelector(".CookieTitle");
  const CookieLink = document.querySelector(".CookieLink");
  const CookieParagraph = document.querySelector(".CookieParagraph");
  const IconCookie = document.querySelector(".cookie-icon-cookie");
  const IconSettings = document.querySelector(".cookie-icon-settings");
  const ButtonCustomize = document.querySelector(".cookie-button--customize");
  const ButtonX = document.querySelector(".cookie-button-x");

  if (CookieDetailed.classList.contains("no-display")) {
    CookieTitle.textContent = "We use cookies to enhance your experience";
    CookieParagraph.innerHTML = `We use essential and optional cookies to improve our website functionality and provide you with personalized content.<a href="CookiePolicy.html" class="CookieLink">Learn more in our Cookie Policy</a>`;
    ButtonCustomize.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cookie-button-icon--settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>Customize`
  } else {
    CookieTitle.textContent = "Cookie Preferences";
    CookieParagraph.textContent = "Choose which cookies you want to accept";
    ButtonCustomize.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cookie-button-icon--check"><path d="M20 6 9 17l-5-5" /></svg>Save Preferences`
  }

CustomizeCookieButton.addEventListener("click", () => {
  CookieDetailed.classList.toggle("no-display");
  CookieLink.classList.toggle("no-display");
  IconCookie.classList.toggle("no-display");
  IconSettings.classList.toggle("no-display");
  ButtonX.classList.toggle("no-display");

  if (CookieDetailed.classList.contains("no-display")) {
    CookieTitle.textContent = "We use cookies to enhance your experience";
    CookieParagraph.innerHTML = `We use essential and optional cookies to improve our website functionality and provide you with personalized content.<a href="CookiePolicy.html" class="CookieLink">Learn more in our Cookie Policy</a>`;
    ButtonCustomize.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cookie-button-icon--settings"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>Customize`
  } else {
    CookieTitle.textContent = "Cookie Preferences";
    CookieParagraph.textContent = "Choose which cookies you want to accept";
    ButtonCustomize.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cookie-button-icon--check"><path d="M20 6 9 17l-5-5" /></svg>Save Preferences`
  }
});



// dropdown для aviator
document.addEventListener("DOMContentLoaded", () => {
  const cardsWinning = document.querySelectorAll(".winning-strategies-card");

  cardsWinning.forEach(cardWinning => {
    cardWinning.addEventListener("click", () => {
      const currentDropDownWinning = card.querySelector(".winning-strategies-card-drop-down");

      if (!currentDropDownWinning) return;

      const isVisibleWinning = !currentDropDownWinning.classList.contains("no-display");

      cards.forEach(c => {
        const dropWinning = c.querySelector(".winning-strategies-card-drop-down");
        if (dropWinning) dropWinning.classList.add("no-display");
        c.classList.remove("card-block-gold-shadow");
      });

      if (!isVisibleWinning) {
        currentDropDownWinning.classList.remove("no-display");
        cardWinning.classList.add("card-block-gold-shadow");
      }
    });
  });
});


// dropdown для crypto
document.addEventListener("DOMContentLoaded", () => {
  const cardsCrypto = document.querySelectorAll(".cryptocurrencies-card");

  cardsCrypto.forEach(cardCrypto => {
    cardCrypto.addEventListener("click", () => {
      const currentDropDownCrypto = cardCrypto.querySelector(".cryptocurrencies-drop-down");

      if (!currentDropDownCrypto) return;

      const isVisibleCrypto = !currentDropDownCrypto.classList.contains("no-display");

      cardsCrypto.forEach(a => {
        const dropCrypto = a.querySelector(".cryptocurrencies-drop-down");
        if (dropCrypto) dropCrypto.classList.add("no-display");
        a.classList.remove("card-block-blue-shadow");
      });

      if (!isVisibleCrypto) {
        currentDropDownCrypto.classList.remove("no-display");
        cardCrypto.classList.add("card-block-blue-shadow");
      }
    });
  });
});
